#!/usr/bin/env node
const alert = require('reuse-alerts');
const init = require('./utils/init');
const data = require('./utils/data');
const cli = require('./utils/cli');
const debug = require('./utils/debug');
const statInfo = require('./utils/statInfo');

const flags = cli.flags;
const input = cli.input;

(async () => {
    init(flags.minimal, flags.clear);
    input.includes('help') && cli.showHelp(0);

    flags.bio && console.log(data.bio);
    flags.social && console.log(data.social);
    flags.ad && alert({type: 'info', msg: data.ad});

    // Stats
    await statInfo();
    debug(flags.debug, cli);
})();
