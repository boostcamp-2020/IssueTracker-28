const AWS = require('aws-sdk');
const fs = require('fs');
const multer = require('multer');
const path = require('path');

const endpoint = new AWS.Endpoint('https://kr.object.ncloudstorage.com');
const region = 'kr-standard';
const access_key = process.env.ACCESS_KEY;
const secret_key = process.env.SECRET_KEY;

const S3 = new AWS.S3({
  endpoint,
  region,
  credentials: {
    accessKeyId: access_key,
    secretAccessKey: secret_key,
  },
});

exports.upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './routes/upload/images/');
    },
    filename: (req, file, cb) => {
      cb(null, new Date().valueOf() + path.extname(file.originalname));
    },
  }),
});

exports.uploadImage = (req, res) => {
  const file = req.file;
  const bucket_name = 'issue';
  const local_file_name = file.path;
  const object_name = file.filename;
  let options = {
    partSize: 5 * 1024 * 1024,
  };

  (async () => {
    await S3.upload(
      {
        Bucket: bucket_name,
        Key: object_name,
        Body: fs.createReadStream(local_file_name),
        ACL: 'public-read',
        ContentType: 'image/png',
      },
      options
    ).promise();
  })();
  res.send(req.file.filename);
};
