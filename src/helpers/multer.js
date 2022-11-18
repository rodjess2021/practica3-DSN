const multer = require('multer');
const path = require('path');

module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname);
        if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
            cb(new Error("Este archivo no es soportado por cloudinary"), false);
            return;
        }
        cb(null, true);
    }
});