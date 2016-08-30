const express = require('express');
const fs = require('fs');
const multer = require('multer');
const path = require('path');

const Image = require('../models/image');

// const upload = multer({ dest: 'uploads' });
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

//  /api/images

router.get('/', (req, res) => {
  Image.find({}, (err, images) => {
    res.status(err ? 400 : 200).send(err || images);
  });
});

router.post('/', upload.single('image'), (req, res) => {
  Image.upload(req.file, (err, image) => {
    // 1. Upload data to S3
    // 2. Determine the url of the image on S3
    // 3. Save image doc in db, with url (and original name)
    // 4. Callback with saved image doc

    res.status(err ? 400 : 200).send(err || image);
  });
});

module.exports = router;
