const express = require('express');
const path = require('path');


module.exports = function (app) {
    app.post('/', (req, res) => {
        console.log('Got an API call on root!');
        console.log(req.body);
    });
    app.post('/img', (req, res) => {
        console.log('Got an API call!');
        console.log(req.body);
        if (req.body != null) {
            console.log(req.body);
            let imgBase64 = req.body.img;
            console.log('Base64: ${imgBase64}');
            modImg(imgBase64);
        }
        else {
            res.json("You must send an image to be modified!");
            console.log('I didn\'t get an image in the API call!');
        }
    });
}

function modImg(image) {
    jimp.read(image).then(mod => {
        if (err) throw err;
        mod.quality(60)
            .greyscale()
            .write("./imgs/modded3233" + image.getExtension());
    }).catch(function (err) {
        console.error(err);
    });
}