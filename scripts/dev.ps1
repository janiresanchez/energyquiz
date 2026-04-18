param(
    [string]$Command = 'help',
    [string[]]$Args
)

function Show-Help {
    Write-Host "Usage: .\dev.ps1 <command> [args]" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "Commands:" -ForegroundColor Yellow
    Write-Host "  help           Show this help text"
    Write-Host "  serve          Start a local web server on port 8000"
    Write-Host "  open           Open http://localhost:8000 in the default browser"
    Write-Host "  status         Show git branch and working tree status"
    Write-Host "  log            Show recent git commits"
    Write-Host "  sync           Pull latest changes from origin/main"
    Write-Host "  push           Push current branch to origin"
    Write-Host "  reset          Reset current branch to origin/main (use with caution)"
    Write-Host "  build          Show a build message for this static web project"
    Write-Host ""
    Write-Host "Examples:" -ForegroundColor Yellow
    Write-Host "  .\dev.ps1 serve" 
    Write-Host "  .\dev.ps1 open"
    Write-Host "  .\dev.ps1 status"
    Write-Host "  .\dev.ps1 push"
}

function Start-Server {
    # Change to project root directory (parent of scripts/)
    Push-Location (Split-Path $PSScriptRoot -Parent)

    if (Get-Command python -ErrorAction SilentlyContinue) {
        Write-Host "Starting local server at http://localhost:8000" -ForegroundColor Green
        Write-Host "Serving from: $(Get-Location)" -ForegroundColor Gray
        python -m http.server 8000
    }
    elseif (Get-Command py -ErrorAction SilentlyContinue) {
        Write-Host "Starting local server at http://localhost:8000" -ForegroundColor Green
        Write-Host "Serving from: $(Get-Location)" -ForegroundColor Gray
        py -m http.server 8000
    }
    else {
        Write-Host "Python is not installed or not in PATH. Install Python or use another server." -ForegroundColor Red
    }

    # Return to original location when done
    Pop-Location
}

function Open-Browser {
    Start-Process "http://localhost:8000"
}

function Git-Status {
    git status --short --branch
}

function Git-Log {
    git log --oneline --decorate --graph -n 20
}

function Git-Sync {
    git pull --rebase
}

function Git-Push {
    git push
}

function Git-Reset {
    git reset --hard origin/main
}

function Build-Info {
    Write-Host "This is a static HTML/CSS/JS project, so no build step is required." -ForegroundColor Green
    Write-Host "Use the 'serve' command to preview locally." -ForegroundColor Green
}

switch ($Command.ToLower()) {
    'help' { Show-Help }
    'serve' { Start-Server }
    'open' { Open-Browser }
    'status' { Git-Status }
    'log' { Git-Log }
    'sync' { Git-Sync }
    'push' { Git-Push }
    'reset' { Git-Reset }
    'build' { Build-Info }
    default {
        Write-Host "Unknown command: $Command" -ForegroundColor Red
        Show-Help
        exit 1
    }
}
