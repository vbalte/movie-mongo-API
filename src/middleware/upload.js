const multer = require("multer");
const upload = multer({
  dest: "profilePics",
  limits: {
    filesize: 2000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error("Please Upload a jpg, jpeg, or png only"));
    }
    cb(undefined, true);
  }
});

module.exports = upload;
