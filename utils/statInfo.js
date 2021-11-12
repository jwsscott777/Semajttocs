// Fetch api
const axios = require('axios');
const ora = require('ora');

const { yellow } = require('chalk');
const spinner = ora({ text: ''})
const apiURL =`https://api.github.com/users/jwsscott777`;
module.exports = async () => {
   spinner.start(`Getting Info`);

    const res = await axios.get(apiURL);

    const ghRepo = res.data.public_repos;

    spinner.succeed(`Got it`);
    console.log(`
 ${yellow(`GITHUB REPOSITORIES:`)} ${ghRepo}
    `);
}