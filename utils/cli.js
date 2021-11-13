const meow = require('meow');
const meowHelper = require('cli-meow-help');
const { green, yellow, cyan, dim } = require('chalk');

const commands = {
    help: {
        desc: `Print the help info`
    },
}
const flags = {
    ad: {
        type: `boolean`,
        default: true,
        desc: `Prints the ad`,
    },
    bio: {
        type: `boolean`,
        default: true,
        desc: `Prints the bio`,
    },
    clear: {
        type: `boolean`,
        default: true,
        desc: `Clears above the data`
    },
    debug: {
        type: `boolean`,
        default: false,
        alias: `d`,
        desc: `Prints debug info`
    },
    minimal: {
        type: `boolean`,
        default: false,
        alias: `m`,
        desc: `Prints minimal info`,
    },
    social: {
        type: `boolean`,
        default: true,
        desc: `Prints social media links`,
    },
    version: {
        type: `boolean`,
        default: false,
        alias: `v`,
        desc: `Prints the version of the cli`
    }
};
const helpText = meowHelper({
    name: `npx semajttocs`,
    flags,
    commands
});


const options = {
    flags,
       
};
module.exports = meow(helpText, options);



