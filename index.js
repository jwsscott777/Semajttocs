#!/usr/bin/env node
const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');
const chalk = require('chalk');
const log = console.log;

welcome({
title: `Semajttocs`,
tagLine: `Welcome from Semajttocs`,
description: pkgJSON.description,
bgColor: `	#6937ff`,
    color: `#000000`,
    bold: true,
    clear: true,
version: pkgJSON.version
});



log(`${chalk.italic(`A developer and creator of all things Javascript and Swift. 
I especially like creating apps in Vue for cross-platform 
work and Swift for my Apple devices.` )}

 ${chalk.hex(`#6cc644`).inverse(` GITHUB `)} ${chalk.greenBright(`https://github.com/jwsscott777/Semajttocs`)}
 ${chalk.hex(`#1da1f2`).inverse(` TWITTER `)} ${chalk.greenBright(`https://twitter.com/@Semajttocs777`)}

`);

log(`

`)