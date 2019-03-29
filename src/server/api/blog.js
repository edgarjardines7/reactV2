//Dependencies 
const  express = require('express');

//Data 
const posts = require('../../data/posts.json');
const post = require('../../data/post.json');

//Express Router 
const Router = express.Router();

Router.get('/posts', (req,res,next)=>{
    res.json(posts);
});

Router.get('/post',(req,res,next) => {
    res.json(post);
});

module.exports = Router;
