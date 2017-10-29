const jimp = require('jimp');
const express = require('express');
const bodyParser = require('body-parser');
const vision = require('@google-cloud/vision')({
    projectId: 'vision-api-test-arch-hacks',
    keyFilename: './keyfile.json'
  });
const app = express();

const testImg = './imgs/testimg.jpg'



app.set('port', (process.env.PORT || 5000));

app.get('/', function (request, response) {

});


app.use(express.static(__dirname + '/client'));
app.use('/imgs', express.static(__dirname + '/imgs'));



// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


app.listen(5000, () => console.log("Now live on http://localhost:5000"));

app.post("/img", function (req, res) {
    console.log('Got an API img color correction call!');
    let imgName = new Date().getMilliseconds() + ".png";
    if (req.body != null) {
        let imgUrl = req.body.imgUrl;
        if(imgUrl.charAt(0) == '/' && imgUrl.charAt(1) == '/'){
            imgUrl = imgUrl.slice(2,imgUrl.length);
        }
        if(!imgUrl.includes("https://")) {
            let https = "https://";
            imgUrl = https.concat(imgUrl);
        }
        jimp.read(imgUrl, function (err, image) {
            let newRed = 0, newGrn = 0, newBlue = 0, alpha = 0;
            if (err) throw err;
            image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
                const C = 125;
                let factor = (259 * (C + 255)) / (255 * (259 - C))

                let red = this.bitmap.data[idx + 0];
                let green = this.bitmap.data[idx + 1];
                let blue = this.bitmap.data[idx + 2];
                alpha = this.bitmap.data[idx + 3];

                if (red > 200 && green < 100 && blue < 100) {
                    /* newRed = truncate(factor * (red - 128) + 128);
                    newGreen = truncate(factor * (green - 128) + 128);
                    newBlue = truncate(factor * (blue - 128) + 128); */

                    /* newRed = (factor * (red - 128) + 128);
                    newGreen = (factor * (green - 128) + 128);
                    newBlue = (factor * (blue - 128) + 128); */

                    this.bitmap.data[idx] = truncate(factor * (red - 128) + 128);
                    this.bitmap.data[idx + 1] = truncate(factor * (green - 128) + 128);
                    this.bitmap.data[idx + 2] = truncate(factor * (blue - 128) + 128);
                }
                console.log('COLORS:');
                console.log(newRed);
                console.log(newGrn);
                console.log(newBlue);
                console.log(alpha);
                //image.setPixelColor(jimp.rgbaToInt(newRed, newGrn, newBlue, alpha), x, y);
            });
            image.write("./imgs/" + imgName, function (err) {
                if (err) throw err;
                console.log('Done converting image, named ' + imgName);
            });
        });
        res.json('/imgs/' + imgName)
    }
    else {
        res.json("You must send an image to be modified!");
        console.log('I didn\'t get an image in the API call!');
    }
});

app.post('/imgLabel', (req, resp) => {
    let url = req.body.imgUrl;
    let imgLabel;
    console.log('Got API call to call the Google Vision API');
    if(url.charAt(0) == '/' && url.charAt(1) == '/'){
        url = url.slice(2,url.length);
    }
    if(!url.includes("https://")) {
        let https = "https://";
        url = https.concat(url);
    }
    var image = {
        source: {imageUri: url}
      };
      vision.labelDetection(image).then(response => {
        resp.json(response[0].labelAnnotations[0]);
      }).catch(err => {
        console.error(err);
      });
});




function truncate(color) {
    if (color < 0) {
        return 0;
    }
    else if (color > 255) {
        return 255;
    }
    else return color;

}