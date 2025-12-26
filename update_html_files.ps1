# PowerShell script to batch update all HTML files

$files = @("stories.html", "learning.html", "arts.html", "games.html", "nature.html", "videos.html", "about.html", "vision.html", "archive.html", "contact.html", "subscribe.html")

foreach ($file in $files) {
    $path = "e:\OfficeDownloads_\DecWebsites\suryas\kids\$file"
    
    if (Test-Path $path) {
        $content = Get-Content $path -Raw
        
        # Add favicon
        if ($content -notmatch 'favicon.svg') {
            $content = $content -replace '(</title>)', ('</title>' + "`r`n    " + '<link rel="icon" type="image/svg+xml" href="favicon.svg">')
        }
        
        # Update login link style
        $content = $content -replace '<li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>', ('<li class="nav-item"><a class="nav-link nav-btn-login" href="login.html">Login</a></li>' + "`r`n                    " + '<li class="nav-item"><a class="nav-link nav-btn-register" href="register.html">Register</a></li>')
        
        # Update year2024 to 2025
        $content = $content -replace '2024 Cosmic Playground', '2025 Cosmic Playground'
        
        Set-Content $path $content -NoNewline
        Write-Host "Updated: $file"
    }
}
