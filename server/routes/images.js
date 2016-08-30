const express = require('express');
const fs = require('fs')
const path = require('path')

const Image = require('../models/image');

const router = express.Router();

router.post('/', (req, res) => {

  let filename = 'francis.jpeg';
  let filepath = path.join(__dirname, '../../', filename);

  fs.readFile(filepath, (err, buffer) => {
    if(err) return res.status(400).send(err);

    console.log('buffer:', buffer);
    Image.upload({filename, buffer}, (err, image) => {

      // 1. Upload data to S3
      // 2. Determine the url of the image on S3
      // 3. Save image doc in db, with url (and original name)
      // 4. Callback with saved image doc

    });
  });
});

module.exports = router;
