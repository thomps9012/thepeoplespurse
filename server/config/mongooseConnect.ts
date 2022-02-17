const mongoose = require('mongoose');

export default mongoose.connect(
    process.env.ATLAS_URL as string || 'mongodb://localhost/peoples_purse',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

module.exports = mongoose.connection;