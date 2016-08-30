const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const Image = require('../models/image')
const upload = multer({ storage: multer.memoryStorage() });
const router = express.Router();
router.get('/', (req,res)=>{
  Image.find({}, (err, images) =>{
    res.status(err ? 400 : 200).send(err || images)
  })
})
router.post('/', upload.single('image'), (req, res) =>{
  let filename = req.file.originalname
  let buffer = req.file.buffer
  
  // res.send({ filename, buffer })
  // let filename = 'myprofile_pic.png'
  // let filepath = path.join(__dirname, '../../', filename);
  //
  // fs.readFile(filepath, (err, buffer)=>{
  //   if(err) return res.status(400).send(err)
  //
    Image.upload( { filename, buffer } , (err, image) => {

      // 1. upload data to S3
      // 2. Determine the url of the image on S3
      // 3. Save image document in the db, with url (and orig filename)
      // 4. CB with saved image doc

      res.status(err ? 400: 200).send(err || image)
    });
  // });
});
module.exports = router;
