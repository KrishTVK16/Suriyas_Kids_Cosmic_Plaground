$files = Get-ChildItem "e:\OfficeDownloads_\DecWebsites\suryas\kids\*.html"

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # 1. Update Title Tag
    # Replace "Cosmic Playground" with "Kidz Magazine" in title, but keep page specific part if possible or just do simple replace
    $content = $content -replace '<title>(.*?) - Cosmic Playground</title>', '<title>$1 - Kidz Magazine</title>'
    $content = $content -replace '<title>Cosmic Playground - (.*?)</title>', '<title>Kidz Magazine - $1</title>'
    
    # 2. Update Footer Logo Text
    $content = $content -replace '<span class="logo-line1">Cosmic</span>', '<span class="logo-line1">Kidz</span>'
    $content = $content -replace '<span class="logo-line2">Playground</span>', '<span class="logo-line2">Magazine</span>'
    
    # 3. Update Footer Copyright
    $content = $content -replace '2025 Cosmic Playground', '2025 Kidz Magazine'
    
    # 4. Update About/Contact Intro Text (generic replace for common phrases)
    $content = $content -replace 'Welcome to Cosmic Playground', 'Welcome to Kidz Magazine'
    $content = $content -replace 'team behind Cosmic Playground', 'team behind Kidz Magazine'
    
    Set-Content $file.FullName $content -NoNewline
    Write-Host "Updated Branding in: $($file.Name)"
}
