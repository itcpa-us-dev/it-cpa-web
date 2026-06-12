#!/usr/bin/env bash
set -euo pipefail

BRANCH="main"
COMMIT_MESSAGE="${1:-Deploy production build}"

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

echo "Switching to $BRANCH branch..."
git checkout "$BRANCH"

echo "Pulling latest $BRANCH..."
git pull --ff-only origin "$BRANCH"

echo "Installing dependencies..."
npm install

echo "Running production build..."
npm run build

echo "Adding changes..."
git add -A

if git diff --cached --quiet; then
  echo "No changes to commit."
else
  echo "Committing changes..."
  git commit -m "$COMMIT_MESSAGE"
fi

echo "Pushing to origin/$BRANCH..."
git push origin "$BRANCH"

echo "Deployment complete."