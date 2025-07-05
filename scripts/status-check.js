#!/usr/bin/env node

/**
 * Nova Meet Project Status Checker
 * Checks the health and status of all project components
 */

const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const colors = {
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    reset: '\x1b[0m',
    bold: '\x1b[1m'
};

const log = (message, color = colors.reset) => {
    console.log(`${color}${message}${colors.reset}`);
};

const checkFile = (filePath, description) => {
    return new Promise((resolve) => {
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (err) {
                log(`❌ ${description}: Not found`, colors.red);
                resolve(false);
            } else {
                log(`✅ ${description}: Found`, colors.green);
                resolve(true);
            }
        });
    });
};

const runCommand = (command, description) => {
    return new Promise((resolve) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                log(`❌ ${description}: Failed`, colors.red);
                if (stderr) log(`   Error: ${stderr}`, colors.red);
                resolve(false);
            } else {
                log(`✅ ${description}: OK`, colors.green);
                resolve(true);
            }
        });
    });
};

async function checkProjectStatus() {
    log('\n🔍 Nova Meet Project Status Check', colors.bold + colors.blue);
    log('=' .repeat(50), colors.blue);

    // Check core files
    log('\n📁 Core Project Files:', colors.bold);
    await checkFile('package.json', 'Root package.json');
    await checkFile('README.md', 'README documentation');
    await checkFile('LICENSE', 'License file');
    await checkFile('.gitignore', 'Git ignore file');

    // Check documentation
    log('\n📚 Documentation:', colors.bold);
    await checkFile('CONTRIBUTING.md', 'Contributing guidelines');
    await checkFile('SECURITY.md', 'Security policy');
    await checkFile('CHANGELOG.md', 'Changelog');

    // Check Docker configuration
    log('\n🐳 Docker Configuration:', colors.bold);
    await checkFile('docker-compose.yml', 'Production Docker Compose');
    await checkFile('docker-compose.dev.yml', 'Development Docker Compose');
    await checkFile('backend/Dockerfile', 'Backend Dockerfile');
    await checkFile('client/Dockerfile', 'Frontend Dockerfile');

    // Check GitHub configuration
    log('\n🐙 GitHub Configuration:', colors.bold);
    await checkFile('.github/workflows/ci-cd.yml', 'CI/CD Pipeline');
    await checkFile('.github/ISSUE_TEMPLATE/bug_report.md', 'Bug Report Template');
    await checkFile('.github/ISSUE_TEMPLATE/feature_request.md', 'Feature Request Template');
    await checkFile('.github/pull_request_template.md', 'Pull Request Template');

    // Check environment files
    log('\n🌍 Environment Configuration:', colors.bold);
    await checkFile('backend/.env.example', 'Backend Environment Example');
    await checkFile('client/.env.example', 'Frontend Environment Example');

    // Check directory structure
    log('\n📂 Directory Structure:', colors.bold);
    await checkFile('backend', 'Backend directory');
    await checkFile('client', 'Frontend directory');
    await checkFile('client/src', 'Frontend source directory');
    await checkFile('nova', 'Nova directory');
    await checkFile('docker', 'Docker configuration directory');

    // Check system dependencies
    log('\n⚙️  System Dependencies:', colors.bold);
    await runCommand('node --version', 'Node.js');
    await runCommand('npm --version', 'npm');
    await runCommand('git --version', 'Git');
    await runCommand('docker --version', 'Docker');

    // Check Git status
    log('\n📊 Git Repository Status:', colors.bold);
    await runCommand('git status --porcelain', 'Working directory clean');
    await runCommand('git remote -v', 'Remote repository configured');

    // Summary
    log('\n' + '='.repeat(50), colors.blue);
    log('✨ Status check completed!', colors.bold + colors.green);
    log('\n🚀 Next steps:', colors.bold);
    log('   1. Review any missing files or failed checks above');
    log('   2. Run "npm run install:all" to install dependencies');
    log('   3. Copy .env.example files and configure your environment');
    log('   4. Run "npm run dev" to start development servers');
    log('   5. Visit the GitHub repository for the latest updates');
    log('\n🔗 Repository: https://github.com/thatamjad/Nova-Meet', colors.blue);
}

// Run the status check
checkProjectStatus().catch(console.error);
