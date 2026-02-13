Add-Type -AssemblyName System.Drawing

function Optimize-Image-Force {
    param (
        [string]$FilePath,
        [int]$MaxWidth = 1920,
        [int]$Quality = 70
    )

    if (-not (Test-Path $FilePath)) {
        Write-Warning "File not found: $FilePath"
        return
    }

    Write-Host "Processing $FilePath..."
    
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
        
        $graph.DrawImage($img, 0, 0, $newWidth, $newHeight)
        
        # Encoder parameters for JPEG quality
        $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
        $ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
        $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]$Quality)
        
        $tempFile = $FilePath + ".tmp.jpg"
        $bmp.Save($tempFile, $codec, $ep)
        
        $img.Dispose()
        $bmp.Dispose()
        $graph.Dispose()
        
        Move-Item -Path $tempFile -Destination $FilePath -Force
        Write-Host "Optimized $FilePath"

    } catch {
        Write-Error "Failed to process $FilePath`: $_"
    }
}

# Optimize Banner - Force quality 70 and max width 1600 just to be safe/smaller
Optimize-Image-Force -FilePath "public\banner.jpg" -MaxWidth 1600 -Quality 70
