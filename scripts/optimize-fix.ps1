Add-Type -AssemblyName System.Drawing

function Optimize-Image {
    param (
        [string]$FilePath,
        [int]$MaxWidth = 1200,
        [int]$Quality = 75
    )

    if (-not (Test-Path $FilePath)) {
        Write-Warning "File not found: $FilePath"
        return
    }

    Write-Host "Processing $FilePath..."
    
    # Backup
    $backupPath = "$FilePath.bak"
    if (-not (Test-Path $backupPath)) {
        Copy-Item $FilePath $backupPath
    }

    try {
        $img = [System.Drawing.Image]::FromFile($FilePath)
        
        $newWidth = $img.Width
        $newHeight = $img.Height

        # Resize if larger than max width
        if ($img.Width -gt $MaxWidth) {
            $newWidth = $MaxWidth
            $newHeight = [Math]::Floor($img.Height * ($MaxWidth / $img.Width))
        }

        $bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
        $graph = [System.Drawing.Graphics]::FromImage($bmp)
        
        $graph.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
        $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
        $graph.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
        
        # Fill background with white for PNG -> JPG conversion
        $graph.Clear([System.Drawing.Color]::White)
        $graph.DrawImage($img, 0, 0, $newWidth, $newHeight)
        
        # Encoder parameters for JPEG quality
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$Quality)
        
        # Save as JPG
        # Fix: Use Join-Path and Get-Item to construct new path safely
        $fileItem = Get-Item $FilePath
        $newFileName = $fileItem.BaseName + ".jpg"
        $newFilePath = Join-Path $fileItem.DirectoryName $newFileName
        
        $bmp.Save($newFilePath, $codec, $ep)
        
        $img.Dispose()
        $bmp.Dispose()
        $graph.Dispose()
        
        Write-Host "Optimized to $newFilePath"

    } catch {
        Write-Error "Failed to process $FilePath`: $_"
    }
}

# Optimize Banner
Optimize-Image -FilePath "public\banner.jpg" -MaxWidth 1920

# Optimize Solai Villa
Optimize-Image -FilePath "public\project\Solai Villa.png" -MaxWidth 1200
