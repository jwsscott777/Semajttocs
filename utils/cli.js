const meow = require('meow');
const { green, yellow, cyan, dim } = require('chalk');

const helpText = `
    Usage
	  ${green(`npx semajttocs`)} ${yellow(`[--option]`)} ${cyan(`<command>`)}

	Options
    ${yellow(`--bio`)}          Show bio info ${dim(`(Default: true)`)}
    ${yellow(`--no-bio`)}       Don't show bio
	${yellow(`--social`)}       Show social info ${dim(`(Default: true)`)}
    ${yellow(`--no-social`)}    Don't show social
    ${yellow(`--ad`)}           Show ad info ${dim(`(Default: true)`)}
    ${yellow(`--no-ad`)}        Don't show ad info
    ${yellow(`--clear`)}        Clear console ${dim(`(Default: true)`)}
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
        clear: {
            type: `boolean`,
            default: true,
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



