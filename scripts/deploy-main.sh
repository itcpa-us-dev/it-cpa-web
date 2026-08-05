#!/usr/bin/env bash
set -euo pipefail

# Usage: npm run deploy -- main "deploy message"
#   $1 = target branch to deploy to (e.g. "main")
#   $2 = commit message

TARGET_BRANCH="${1:-main}"
COMMIT_MESSAGE="${2:-Deploy production build}"
DEVELOP_BRANCH="develop"

# Always run from the project root, even if script is called from somewhere else
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

cd "$PROJECT_ROOT"

if [ ! -f "package.json" ]; then
  echo "ERROR: package.json not found in $PROJECT_ROOT"
  echo "Make sure scripts/deploy-main.sh is inside your project scripts folder."
  exit 1
fi

echo "Project root: $PROJECT_ROOT"

# --- 1. Build from develop -------------------------------------------------
echo "Switching to $DEVELOP_BRANCH branch..."
git checkout "$DEVELOP_BRANCH"

echo "Pulling latest $DEVELOP_BRANCH..."
git pull --ff-only origin "$DEVELOP_BRANCH"

echo "Installing dependencies..."
npm install

echo "Running production build on $DEVELOP_BRANCH..."
npm run build

if [ ! -d "dist" ]; then
  echo "ERROR: dist folder not found after build."
  exit 1
fi
# --- 1. Switch to the target branch ----------------------------------------
echo "Switching to $TARGET_BRANCH branch..."
git checkout "$TARGET_BRANCH"

# --- 2. Remove old assets, drop in the new build ----------------------------
echo "Removing existing assets folder..."
rm -rf "$PROJECT_ROOT/assets"

echo "Copying new dist files into project root..."
cp -R "dist/." "$PROJECT_ROOT/"

# --- 4. Commit and push ------------------------------------------------------
echo "Adding changes..."
git add -A

if git diff --cached --quiet; then
  echo "No changes to commit."
else
  echo "Committing changes..."
  git commit -m "$COMMIT_MESSAGE"
fi

echo "Pushing to origin/$TARGET_BRANCH..."
git push origin "$TARGET_BRANCH"

echo "Deployment complete."