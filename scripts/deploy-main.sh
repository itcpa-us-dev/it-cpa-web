#!/usr/bin/env bash
set -euo pipefail

BRANCH="main"

echo "Checking current branch..."
CURRENT_BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [ "$CURRENT_BRANCH" != "$BRANCH" ]; then
  echo "You are on '$CURRENT_BRANCH'. Switching to '$BRANCH'..."
  git checkout "$BRANCH"
fi

echo "Pulling latest changes from origin/$BRANCH..."
git fetch origin "$BRANCH"
git pull --ff-only origin "$BRANCH"

echo "Installing dependencies..."
npm ci

echo "Cleaning old production assets..."
rm -rf dist/assets

echo "Building production app..."
npm run build

echo "Adding changes..."
git add .

if git diff --cached --quiet; then
  echo "No changes to commit."
else
  COMMIT_MESSAGE="Build production deployment"
  echo "Committing changes..."
  git commit -m "$COMMIT_MESSAGE"
fi

echo "Pushing to origin/$BRANCH..."
git push origin "$BRANCH"

echo "Production deployment pushed to main."