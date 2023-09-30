# HNG-BE-T5

A REST API capable of uploading and getting videos with Node.js, Express.

# Requirements

Node
Express

# Installation

Requirements
You need node installed and running on your computer.

# Usage

1. git clone git@github.com:Zobamba/HNG-BE-T5.git
2. cd HNG-BE-T5
3. npm install
4. npm start

# Endpoints

### POST /upload  ------> To post a video
### GET /:filename  ------> To fetch a video


# To Do

 1. Create
 2. Read
 5. Deploy on Render


 # Standard formats for requests and responses for each endpoint

### POST /upload

Use this to post a video

Request Body (form data)
```
{
  "key": "file",
  "value": Select Files (video)
}
```

Response Code
```
201
```

Response Body
```
{
 "message": "File uploaded successfully",
  "filename": "1696117532721-movie.mp4",
  "fileUrl": "http://localhost:5000/uploads/1696117532721-movie.mp4"
}
```

### GET /:filename

Use this to fetch details of a user

Response Code
```
200
```

Response Body
```
{
    "fileUrl": "http://localhost:5000/uploads/1696117532721-movie.mp4",
    "message": "Here is your video"
}
```
