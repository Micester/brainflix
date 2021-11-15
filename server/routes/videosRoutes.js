const express = require('express');
const router = express.Router();
const fs = require('fs');

// get all videos
router.get('/', (req, res) => {
    fs.readFile('./data/videos', 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
            res.json({message: 'error getting video data'});
        } else {
            res.json(JSON.parse(data));
        }
    });
});


//get single video by id
router.get('/:id', (req, res) => {
    console.log(req.params.id);
    fs.readFile('./data/video-details.json', 'utf-8',(err, data) => {
        if (err) {
            console.log(err);
            res.json({message: 'error getting video id data'});
        }
        const videoData = JSON.parse(data);
        const foundVideo = videoData.find((video) => video.id == req.params.id);
        if (!foundVideo) {
            res.json({message: 'error getting video data'});
        } else {
            res.json(foundVideo);
        }
    });

// router to post 
router.post('/', (request, response) => {
    console.log('post route reached');
    const newPost = {
        id: request.body.id,
        title: request.body.title,
        channel: request.body.channel,
        image: request.body.image,
        description: request.body.description,
        views: 685,
        likes: 6523,
        timestamp: request.body.timestamp,
        comments: []
    };

        response.json(newPost); 
})
});



module.exports = router;
