const welcome = require('cli-welcome');
const pkgJSON = require('./../package.json');
const box = require('boxen');
module.exports = (minimal, clear) => {
    !minimal &&
        welcome({
            title: `Semajttocs`,
            tagLine: ` Semajttocs is glad your here`,
            description: pkgJSON.description,
            bgColor: `	#6937ff`,
            color: `#000000`,
            bold: true,
            clear,
            version: pkgJSON.version
        });
        minimal && console.log(box(`Semajttocs`, {padding: 1, float: `center`, dimBorder: true}));
}