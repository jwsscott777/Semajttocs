const meow = require('meow');
const { green, yellow, cyan } = require('chalk');

const helpText = `
    Usage
	  ${green(`npx semajttocs`)} ${yellow(`[--option]`)} ${cyan(`<command>`)}

	Options
    ${yellow(`--bio`)}          Show bio info
    ${yellow(` --no-bio`)}      Don't show bio
	${yellow(`--social`)}       Show social info
    ${yellow(` --no-social`)}   Don't show social
    ${yellow(`--ad`)}           Show ad info
    ${yellow(`--no-ad`)}        Don't show ad info
    ${yellow(`-d, --debug`)}    Print debug info
    ${yellow(`--version, -v`)}  Show version
    Commands
    ${cyan(` help `)}           Show help
      
    
	Examples
	${green(` npx semajttocs`)} --no-social

`;

const options = {
    flags: {
        minimal: {
            type: `boolean`,
            default: false,
            alias: `m`,
        },
        bio: {
            type: `boolean`,
            default: true
        },
        social: {
            type: `boolean`,
            default: true
        },
        ad: {
            type: `boolean`,
            default: true
        },
        debug: {
            type: `boolean`,
            default: false,
            alias: `d`
        },
        version: {
            type: `boolean`,
            default: false,
            alias: `v`
        },
        
    }
};
module.exports = meow(helpText, options);



