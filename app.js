const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { createDir } = require('./model');
const { craetePosts, addComments } = require('./posts&comments');
const { createAlbums, addPhotos } = require('./alb&photo');

axios
  .all([
    axios.get('https://jsonplaceholder.typicode.com/users'),
    axios.get('https://jsonplaceholder.typicode.com/posts'),
    axios.get('https://jsonplaceholder.typicode.com/comments'),
    axios.get('https://jsonplaceholder.typicode.com/albums'),
    axios.get('https://jsonplaceholder.typicode.com/photos'),
  ])
  .then((responses) => {
    createDir(responses[0].data);
    craetePosts(responses[1].data);
    addComments(responses[2].data);
    createAlbums(responses[3].data);
    addPhotos(responses[4].data);
  })
  .catch((errors) => {
    console.log(errors);
  });

//axios
//  .get('https://jsonplaceholder.typicode.com/users')
//  .then( (res) => {
//    createDir(res.data);
//	 console.log(1);
//  })
//  .catch((err) => {
//    console.log(err);
//  });

//axios
//  .get('https://jsonplaceholder.typicode.com/posts')
//  .then( (res) => {
//    craetePosts(res.data);
//	 console.log(2);
//  })
//  .catch((err) => {
//    console.log(err);
//  });

//axios
//  .get('https://jsonplaceholder.typicode.com/comments')
//  .then( (res) => {
//    addComments(res.data);
//	 console.log(3);
//  })
//  .catch((err) => {
//    console.log(err);
//  });

//axios
//  .get('https://jsonplaceholder.typicode.com/albums')
//  .then( (res) => {
//    createAlbums(res.data);
//	 console.log(4);
//  })
//  .catch((err) => {
//    console.log(err);
//  });

//axios
//  .get('https://jsonplaceholder.typicode.com/photos')
//  .then( (res) => {
//    addPhotos(res.data);
//	 console.log(5);
//  })
//  .catch((err) => {
//    console.log(err);
//  });
