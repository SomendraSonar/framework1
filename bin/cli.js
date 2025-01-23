#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { program } = require('commander');

program
  .version('1.0.0')
  .description('CLI for Your Framework')
  .command('init <project-name>')
  .action((projectName) => {
    const projectPath = path.join(process.cwd(), projectName);
    if (fs.existsSync(projectPath)) {
      console.error('Project already exists!');
      return;
    }

    fs.mkdirSync(projectPath);
    fs.writeFileSync(path.join(projectPath, 'index.html'), '<!DOCTYPE html><html><head></head><body></body></html>');
    console.log(`Project ${projectName} initialized.`);
  });

program.parse(process.argv);
