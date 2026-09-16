# GitHub Setup Script for PHALENDROME
# Run this in PowerShell on your local machine where Git is installed
# Navigate to your project folder first: cd c:\workspace\phalendrome-site

# Stop on any error
$ErrorActionPreference = "Stop"

Write-Host "================================" -ForegroundColor Cyan
Write-Host "PHALENDROME GitHub Setup" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Initialize Git
Write-Host "Step 1: Initializing Git repository..." -ForegroundColor Yellow
git init
git add .
git commit -m "Initial commit: PHALENDROME website with legal pages, favicon ready, contact form setup"

Write-Host ""
Write-Host "Step 2: Initialize complete!" -ForegroundColor Green
Write-Host ""
Write-Host "================================" -ForegroundColor Cyan
Write-Host "NEXT STEPS (Manual on GitHub):" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "1. Go to: https://github.com/new" -ForegroundColor White
Write-Host "2. Fill in:" -ForegroundColor White
Write-Host "   - Repository name: PHALENDROME" -ForegroundColor Gray
Write-Host "   - Owner: TumeloPhale" -ForegroundColor Gray
Write-Host "   - Private: CHECK (yes)" -ForegroundColor Gray
Write-Host "   - Add README: UNCHECK (no)" -ForegroundColor Gray
Write-Host "3. Click 'Create repository'" -ForegroundColor White
Write-Host ""
Write-Host "4. Copy HTTPS URL from GitHub (looks like: https://github.com/TumeloPhale/PHALENDROME.git)" -ForegroundColor White
Write-Host ""
Write-Host "5. Run these commands in PowerShell:" -ForegroundColor White
Write-Host "   git remote add origin https://github.com/TumeloPhale/PHALENDROME.git" -ForegroundColor Gray
Write-Host "   git branch -M main" -ForegroundColor Gray
Write-Host "   git push -u origin main" -ForegroundColor Gray
Write-Host "   git checkout -b dev" -ForegroundColor Gray
Write-Host "   git push -u origin dev" -ForegroundColor Gray
Write-Host ""
Write-Host "6. On GitHub, go to Settings > Branches:" -ForegroundColor White
Write-Host "   - Set 'dev' as default branch" -ForegroundColor Gray
Write-Host "   - Add branch protection rule for 'dev'" -ForegroundColor Gray
Write-Host "   - Require 1 approving review before merge" -ForegroundColor Gray
Write-Host ""
Write-Host "================================" -ForegroundColor Green
Write-Host "Git initialized locally! Ready to push." -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
