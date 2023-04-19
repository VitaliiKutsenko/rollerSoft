const path = require('path');
module.exports = {
    webpack: {
        alias: {
            '@src': path.resolve(__dirname, './src'),
            '@path': path.resolve(__dirname, './public'),

        },
    },
};