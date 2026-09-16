# Git & GitHub Setup Instructions for PHALENDROME SOLUTIONS

## Prerequisites
- Git installed on your local machine ([git-scm.com](https://git-scm.com/))
- GitHub account and permission to create repos in TumeloPhale organization
- GitHub CLI `gh` installed and authenticated ([cli.github.com](https://cli.github.com/))

## Step 1: Create Private Repository on GitHub

Run this command to create a private repo:

```bash
gh repo create TumeloPhale/PHALENDROME --private --source=. --remote=origin --push
```

Or manually via GitHub web:
1. Go to https://github.com/new
2. Name: `PHALENDROME`
3. Owner: `TumeloPhale`
4. Private: ✓ Check
5. Create repository

## Step 2: Initialize Local Git & Push Code

```bash
# Navigate to your project directory
cd c:\workspace\phalendrome-site

# Initialize git (if not done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: PHALENDROME SOLUTIONS website v1"

# Add remote (if created manually)
git remote add origin https://github.com/TumeloPhale/PHALENDROME.git

# Create and switch to 'dev' branch
git checkout -b dev

# Push dev branch to remote
git push -u origin dev

# Set dev as default branch (via GitHub CLI)
gh repo edit TumeloPhale/PHALENDROME --default-branch=dev
```

## Step 3: Enable Branch Protection on 'dev'

Run this command to require 1 approving review before merges:

```bash
gh api repos/TumeloPhale/PHALENDROME/branches/dev/protection \
  -X PUT \
  -f required_status_checks=null \
  -f enforce_admins=true \
  -f required_pull_request_reviews='{"dismiss_stale_reviews":true,"require_code_owner_review":false,"required_approving_review_count":1}' \
  -f restrictions=null
```

Or via GitHub Web UI:
1. Go to https://github.com/TumeloPhale/PHALENDROME/settings/branches
2. Under "Branch protection rules" → "Add rule"
3. Branch name pattern: `dev`
4. Enable:
   - ✓ Require a pull request before merging
   - ✓ Require approvals (set to 1)
   - ✓ Enforce admins
5. Save changes

## Step 4: Add Collaborators & Set Permissions

To allow team members to contribute:

```bash
# Add collaborator
gh repo add-collaborator TumeloPhale/PHALENDROME <USERNAME> --permission=push

# Set up CODEOWNERS file (optional but recommended)
# Create file: .github/CODEOWNERS
# Content:
# * @TumeloPhale
```

## Workflow for Contributors

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/my-feature
   ```

2. **Make changes and commit:**
   ```bash
   git add .
   git commit -m "Add my feature"
   git push origin feature/my-feature
   ```

3. **Open a Pull Request:**
   - Go to https://github.com/TumeloPhale/PHALENDROME/pulls
   - Click "New Pull Request"
   - Select `dev` as the base branch
   - Request review from @TumeloPhale

4. **Get approval & merge:**
   - You (as admin) review and approve
   - Click "Merge pull request"

## Quick Reference

| Command | Purpose |
|---------|---------|
| `git checkout -b dev` | Create dev branch locally |
| `git push -u origin dev` | Push dev to GitHub and track |
| `gh repo edit --default-branch=dev` | Set dev as default branch |
| `gh api repos/.../branches/dev/protection -X PUT ...` | Enable branch protection |
| `git push origin feature/name` | Push feature branch |

## Rollback (if needed)

If you need to undo and start over:

```bash
# Delete local repo files
rm -r .git

# Delete remote repo via GitHub CLI
gh repo delete TumeloPhale/PHALENDROME --confirm

# Or delete manually via GitHub Settings → Delete Repository
```

---

**Last Updated:** February 9, 2026  
**Repository:** Private  
**Default Branch:** dev  
**Protection:** 1 approving review required for merges
