const { config } = require('dotenv');

module.exports = {
    entry: './pages/index.tsx',
    ouput: {
        path: config.build.assetsRoot
    },
    externals: {
        mongodb: 'mongodb'
    }
}