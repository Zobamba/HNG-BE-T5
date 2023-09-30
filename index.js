import express from 'express';
import multer from 'multer';
import fs from 'fs';
import cors from 'cors';

const app = express();

app.use(express.static('public'));

const port = 5000;

const corsOptions = {
  origin: ['http://localhost:3000'],
  credentials: true,
};
app.use(cors(corsOptions));


// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

// const upload = multer({ storage });
const upload = multer({ storage: storage });

// Homepage route
app.get('/', (req, res) => {
  res.send('Welcome to HNG-BE-T5');
});

// Upload video route
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  res.status(201).json({ message: 'File uploaded successfully', filename: req.file.filename, fileUrl: `http://localhost:5000/uploads/${req.file.filename}` });
});

// Get video route
app.get('/:filename', (req, res) => {
  const filename = req.params.filename;

  res.status(200).json({
    fileUrl: `http://localhost:5000/uploads/${filename}`,
    message: "Here is your video"
  })
});


app.listen(port, () => console.log(`index app listening on port ${port}!`));
