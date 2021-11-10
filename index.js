#!/usr/bin/env node
const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');

welcome({
title: pkgJSON.name,
tagLine: `Welcome from Semajttocs`,
description: pkgJSON.description,
bgColor: `	#AAFF00`,
    color: `#000000`,
    bold: true,
    clear: true,
version: pkgJSON.version
});



console.log(`
Semajttocs

A developer and creator of all things Javascript and Swift. 
I especially like creating apps in Vue for cross-platform 
work and Swift for my Apple devices. 

📔 GITHUB: https://github.com/jwsscott777/Semajttocs

`);