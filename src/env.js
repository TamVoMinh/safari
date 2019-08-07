require('dotenv').config();

module.exports = {
    targetSite: process.env.CODECEPT_URL,
    supperAccount: process.env.SUPPER_ACCOUNT,
    supperPwd: process.env.SUPPER_PWD
};