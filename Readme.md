# HNG-Backend-Task-Five

A simple REST API capable of video file uploads and retrieval with Node Express.js.

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

### POST /upload  ------> To send video
### GET /:filename ------> To fetch and play video

# Standard formats for requests and responses for each endpoint

### POST /upload

Use this to post a video

Request Body (form data)
```
{
  "key": "file",
  "value": "video"
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
"filename": "1696111992391-movie.mp4",
"fileUrl": "http://localhost:5000/uploads/1696111992391-movie.mp4"
}
```

### GET /:filename

Use this to fetch a video
Response Code
```
200
```

Response Body
```
{
  "fileUrl": "http://localhost:5000/uploads/1696111899504-movie.mp4",
  "message": "Here is your video"
}
```