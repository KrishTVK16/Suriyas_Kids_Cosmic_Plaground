$files = Get-ChildItem "e:\OfficeDownloads_\DecWebsites\suryas\kids\*.html" -Exclude "admin.html"
$newNavbar = @"
<!-- Navigation -->
<nav class="navbar navbar-expand-lg">
    <div class="container">
        <a class="navbar-brand" href="index.html">
            <span class="logo-icon">🌟</span>
            <span class="logo-text">
                <span class="logo-line1">Kidz</span>
                <span class="logo-line2">Magazine</span>
            </span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="homeDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">🏠 Home</a>
                    <ul class="dropdown-menu" aria-labelledby="homeDropdown">
                        <li><a class="dropdown-item" href="index.html">Basic Magazine</a></li>
                        <li><a class="dropdown-item" href="home_magazine.html">New Magazine</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="exploreDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">🚀 Explore</a>
                    <ul class="dropdown-menu" aria-labelledby="exploreDropdown">
                        <li><a class="dropdown-item" href="stories.html">📚 Stories</a></li>
                        <li><a class="dropdown-item" href="videos.html">🎬 Videos</a></li>
                        <li><a class="dropdown-item" href="games.html">🎮 Games</a></li>
                    </ul>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="learnDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">💡 Learn</a>
                    <ul class="dropdown-menu" aria-labelledby="learnDropdown">
                        <li><a class="dropdown-item" href="nature.html">🌿 Nature</a></li>
                        <li><a class="dropdown-item" href="learning.html">🔬 Science</a></li>
                        <li><a class="dropdown-item" href="history.html">⏳ History</a></li>
                        <li><a class="dropdown-item" href="arts.html">🎨 Arts</a></li>
                    </ul>
                </li>
                 <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="communityDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">👥 Community</a>
                    <ul class="dropdown-menu" aria-labelledby="communityDropdown">
                        <li><a class="dropdown-item" href="kids-corner.html">🌟 Kids Corner</a></li>
                        <li><a class="dropdown-item" href="subscribe.html">📬 Subscribe</a></li>
                    </ul>
                </li>
                 <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="companyDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">🏢 Company</a>
                    <ul class="dropdown-menu" aria-labelledby="companyDropdown">
                        <li><a class="dropdown-item" href="about.html">👥 About Us</a></li>
                        <li><a class="dropdown-item" href="contact.html">📞 Contact</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn-header-admin" href="admin.html">🔒 Admin</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn-header-login" href="login.html">🔑 Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn-header-signup" href="register.html">✨ Sign Up</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
"@

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    if ($content -match '(?s)<!-- Navigation -->.*?<\/nav>') {
        $content = $content -replace '(?s)<!-- Navigation -->.*?<\/nav>', $newNavbar
        Set-Content $file.FullName $content -NoNewline
        Write-Host "Updated Navbar in: $($file.Name)"
    }
    else {
        Write-Warning "Could not find navbar in: $($file.Name)"
    }
}
