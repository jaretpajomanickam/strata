const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Check if .git directory exists
const gitDir = path.join(process.cwd(), '.git');
if (!fs.existsSync(gitDir)) {
  console.log('Initializing git repository...');
  execSync('git init', { stdio: 'inherit' });
  
  // Add all files
  execSync('git add .', { stdio: 'inherit' });
  
  // Create initial commit
  execSync('git commit -m "Initial commit"', { stdio: 'inherit' });
  
  console.log('Git repository initialized with initial commit.');
}

// Check if Vercel CLI is installed
try {
  execSync('vercel --version', { stdio: 'ignore' });
  console.log('Vercel CLI is installed.');
} catch (error) {
  console.log('Installing Vercel CLI...');
  execSync('npm install -g vercel', { stdio: 'inherit' });
  console.log('Vercel CLI installed successfully.');
}

// Deploy to Vercel
console.log('Deploying to Vercel...');
execSync('vercel --prod', { stdio: 'inherit' });

console.log('Deployment completed!'); 