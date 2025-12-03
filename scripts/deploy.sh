#!/bin/bash

# Production deployment script using npm only
echo "🚀 Starting production deployment..."

# Clean install
echo "📦 Installing dependencies..."
rm -rf node_modules package-lock.json
npm install

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build for production
echo "🏗️ Building for production..."
NODE_ENV=production npm run build

# Start production server
echo "🌟 Starting production server..."
npm start
