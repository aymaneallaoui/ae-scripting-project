#!/usr/bin/env node

const { execSync } = require("child_process");

const runCommmand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (e) {
    console.log(e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];

const gitCheckoutCommand = `git clone --depth 1 https://github.com/aymaneallaoui/ae-project-starter ${repoName}`;

const installDependenciesCommand = `cd ${repoName} && npm install`;

console.log("Creating project...");

const checkOut = runCommmand(gitCheckoutCommand);

if (!checkOut) process.exit(-1);

console.log("Installing dependencies...");
const installDependencies = runCommmand(installDependenciesCommand);
if (!installDependencies) process.exit(-1);

console.log("Done! Happy coding!");
console.log("To create new comp, run:");
console.log(`cd ${repoName} && npm run createComp`);
