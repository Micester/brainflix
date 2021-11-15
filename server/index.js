// const axios = require('axios');
// const fs = require('fs'); //node file-system
const { response } = require('express');
const express = require('express');
const videosRoutes = require('./routes/videosRoutes');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(cors());
app.use(express.static('public'));

app.use('/videos', videosRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
  });

app.listen(PORT, function() {
    console.log(`My server is running on port ${PORT}!`)
});
