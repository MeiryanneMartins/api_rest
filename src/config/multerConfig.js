import multer from 'multer';
import { extname, resolve } from 'path';

const roundTime = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.minetype !== 'image/png' && file.minetype !== 'image/jpeg') {
      return cb(new multer.MulterError('Arquivo precisa ser PNG ou JPG'));
    }

    return cb(null, true);
  },

  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, resolve(__dirname, '..', '..', 'uploads'));
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}_${roundTime()}${extname(file.originalname)}`);
    },
  }),
};
