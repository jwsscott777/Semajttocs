const welcome = require('cli-welcome');
const pkgJSON = require('./../package.json');
module.exports = (minimal) => {
    !minimal &&
        welcome({
            title: `Semajttocs`,
            tagLine: ` Semajttocs is glad your here`,
            description: pkgJSON.description,
            bgColor: `	#6937ff`,
            color: `#000000`,
            bold: true,
            clear: true,
            version: pkgJSON.version
        });
        minimal && console.log(`Semajttocs`);
}