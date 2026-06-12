#!/usr/bin/env bash
set -euo pipefail

BRANCH="main"
COMMIT_MESSAGE="${1:-Deploy production build}"

echo "Switching to $BRANCH branch..."
git checkout "$BRANCH"

echo "Pulling latest $BRANCH..."
git pull --ff-only origin "$BRANCH"

echo "Running production build..."
npm run build

echo "Adding built files and changes..."
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