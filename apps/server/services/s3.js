const axios = require("axios");
const AWS = require("aws-sdk");

const s3 = new AWS.S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_KEY,
});

exports.uploadFile = async (url) => {
  const file = await axios.get(url, {
    responseType: "arraybuffer",
  });

  const params = {
    Bucket: process.env.S3_BUCKET_NAME,
    Key: `${Date.now()}.jpg`,
    Body: file.data,
    ACL: "public-read",
  };

  const result = await s3.upload(params).promise();
  return result.Location;
};
