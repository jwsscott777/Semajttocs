const alert = require('reuse-alerts');
module.exports = (isDebug, cli) => {
    if (!isDebug) {
        return;
    }
        alert({type: 'warning', msg: `DEBUG INFO ⬇️`});
        console.log(`input`, cli.input);
        console.log(`flags`, cli.flags);
};