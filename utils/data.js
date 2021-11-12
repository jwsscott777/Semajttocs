const chalk = require('chalk');
const italic = chalk.italic;


const bio = `${italic(
`A developer and content creator. I prefer Javascript and Swift. 
I especially like creating apps in Node.js and Vue for cross-platform 
work and Swift for my Apple devices.` 
)}
`;

const social = `
${chalk.hex(`#6cc644`).inverse(` GITHUB `)} ${chalk.greenBright(`https://github.com/jwsscott777/Semajttocs`)}
 
${chalk.hex(`#1da1f2`).inverse(` TWITTER `)} ${chalk.greenBright(`https://twitter.com/@Semajttocs777`)}
`;

const ad = `You can also reach me at: tlmsols50@gmail.com`; 

module.exports = {
    bio,
    social,
    ad
};



