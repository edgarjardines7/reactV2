var htmlminify = require('html-minifier');

function compress(content){
    console.log(content)
    return htmlminify.minify(content.fn(this),{
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true
    });
}

module.exports = {compress};