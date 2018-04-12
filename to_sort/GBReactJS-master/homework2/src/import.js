const path = require('path');
const logo = require('./app/components/logoModule');
const logoPath = path.join(__dirname, './homework2/src/app/img', 'logo.gif');
logo(logoPath);
exports.logo = logo;