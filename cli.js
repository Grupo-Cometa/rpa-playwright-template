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

// Personalizar o package.json, se projectName for fornecido
if (projectName || currentDirectoryName !== "template") {
  const packageJsonPath = path.join(projectPath, 'package.json');
  const packageJson = require(packageJsonPath);

  // Verificar se já existe um package.json no diretório atual
  const currentPackageJsonPath = path.join(currentDirectory, 'package.json');

  if (fs.existsSync(currentPackageJsonPath)) {
    // Se já existe um package.json, mescla as propriedades
    const currentPackageJson = require(currentPackageJsonPath);
    Object.assign(packageJson, currentPackageJson);
  }

  // Substituir o marcador de posição pelo nome do projeto
  packageJson.name = projectName || currentDirectoryName;

  // Salvar o package.json personalizado de volta
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}

if (projectName || currentDirectoryName !== "template") {
  console.log('\x1b[32m%s\x1b[0m', `${projectPath} criado com sucesso a partir do template RPA!`);
} else {
  console.log('\x1b[32m%s\x1b[0m', `Template RPA copiado com sucesso para o diretório atual!`);
}
