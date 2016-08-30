const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

imageSchema.statics.upload = function(fileObj, cb) {

};

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
