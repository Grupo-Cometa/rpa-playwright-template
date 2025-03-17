#!/usr/bin/env node
const fs = require('fs-extra');
const path = require('path');

const templatePath = path.join(__dirname, 'template');
const projectName = process.argv[2];
const currentDirectory = process.cwd();
const currentDirectoryName = path.basename(currentDirectory);

const projectPath = projectName ? path.join(currentDirectory, projectName) : currentDirectory;

if (projectName) {
  fs.ensureDirSync(projectPath);
}

fs.copySync(templatePath, projectPath);

if (projectName || currentDirectoryName !== "template") {
  const packageJsonPath = path.join(projectPath, 'package.json');
  const packageJson = require(packageJsonPath);

  const currentPackageJsonPath = path.join(currentDirectory, 'package.json');

  if (fs.existsSync(currentPackageJsonPath)) {
    const currentPackageJson = require(currentPackageJsonPath);
    Object.assign(packageJson, currentPackageJson);
  }

  packageJson.name = projectName || currentDirectoryName;
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

const gitIgnoreContent = `
node_modules/
.env
dist/
`;

fs.writeFileSync(path.join(projectPath, '.gitignore'), gitIgnoreContent);

console.log('\x1b[32m%s\x1b[0m', `O Template RPA foi criado com sucesso!`);