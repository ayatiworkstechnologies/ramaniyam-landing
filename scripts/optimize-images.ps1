Add-Type -AssemblyName System.Drawing

$projectDir = Join-Path (Get-Location) "public\project"
$backupDir = Join-Path (Get-Location) "public\project_backup"

if (-not (Test-Path $backupDir)) {
    New-Item -ItemType Directory -Force -Path $backupDir | Out-Null
}

$files = Get-ChildItem $projectDir -Include *.jpg,*.jpeg,*.png -Recurse

foreach ($file in $files) {
    Write-Host "Processing $($file.Name)..."
    
    $backupFile = Join-Path $backupDir $file.Name
    if (-not (Test-Path $backupFile)) {
        Copy-Item $file.FullName $backupFile
    }

    try {
        $img = [System.Drawing.Image]::FromFile($file.FullName)
        
        # Calculate new width/height maintaining aspect ratio
        $targetWidth = 1200
        if ($img.Width -gt $targetWidth) {
            $newWidth = $targetWidth
            $newHeight = [Math]::Floor($img.Height * ($targetWidth / $img.Width))
            
            $bmp = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
            $graph = [System.Drawing.Graphics]::FromImage($bmp)
            
            $graph.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
            $graph.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
            $graph.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
            
            $graph.DrawImage($img, 0, 0, $newWidth, $newHeight)
            
            # Encoder parameters for JPEG quality
            $codec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq "image/jpeg" }
            $ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
            $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]75)
            
            # Save to temp file
            $tempFile = $file.FullName + ".tmp.jpg"
            $bmp.Save($tempFile, $codec, $ep)
            
            $img.Dispose()
            $bmp.Dispose()
            $graph.Dispose()
            
            # Replace original
            Move-Item -Path $tempFile -Destination $file.FullName -Force
            Write-Host "Optimized $($file.Name)"
        } else {
             Write-Host "Skipping $($file.Name) (already small)"
             $img.Dispose()
        }
    } catch {
        Write-Error "Failed to process $($file.Name): $_"
    }
}
