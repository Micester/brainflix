const axios = require('axios');
const fs = require('fs'); //node file-system

// const express = require('express');
// const app = express();
// const PORT = 


console.log('hello node');
console.log(process.argv);

axios
    .get("https://project-2-api.herokuapp.com/videos/?api_key=%3C41455ad6-5375-402b-85af-4e0468cc04cb%3E")
    .then((response) => {
        // console.log(response.data);

        fs.writeFile('./data/videos.json', JSON.stringify (response.data), (error) => {
            if (error) {
                console.log(error);
                return;
            }
            console.log('file written successfully');
        });
    })

    .catch((error) => {
        console.log(error);
    });