import express from 'express';
import multer from 'multer';
import cors from 'cors';
import fs from 'fs';

const app = express();

app.use(express.static('public'));

app.use(cors());

const port = 5000;

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
  res.status(201).json({
    message: 'File uploaded successfully',
    filename: req.file.filename,
    localFileUrl: `http://localhost:5000/uploads/${req.file.filename}`,
    hostFileUrl: `https://hng-be-t5.onrender.com/uploads/${req.file.filename}`
  });
});

// Get video route
app.get('/:filename', (req, res) => {
  const filename = req.params.filename;

  res.status(200).json({
    localFileUrl: `http://localhost:5000/uploads/${filename}`,
    hostFileUrl: `https://hng-be-t5.onrender.com/uploads/${filename}`,
    message: "Here is your video"
  })
});

// Get all video filenames
app.get('/videos/uploads', async (req, res) => {
  const files = await fs.promises.readdir('./public/uploads');

  const videos = files.map((file) => ({
    localFileUrl: `http://localhost:5000/uploads/${file}`,
    hostFileUrl: `https://hng-be-t5.onrender.com/uploads/${file}`,
    filename: file
  }));

  res.json(videos);
});

app.listen(port, () => console.log(`index app listening on port ${port}!`));
