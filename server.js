var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
//var scanner = require('chromecast-scanner');
var test = require('./testFIle');
var scanDevice = require('./scanner');
var fs = require("fs");
var scanner = require('cast-scanner');

var port = process.env.PORT || 4000;
app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const server = http.createServer();
// test.readCustomFile(function(response){
//     console.log("content>>>",response);
// })
// scanDevice.getChromecastDevices('demo', function(response){
//     console.log("content>>>",response);
// })
console.log("file reading started");
//var result = fs.readFileSync("test.txt");
// fs.readFile("test.txt", (err, res)=> {
//     if (err) {
//       return console.log(err);
//     }     
//     console.log("file content",res.toString());
//    // app.get('/getdata',res);
//    //reciveTestFileData(res);
//   });

reciveTestFileData((res)=>{
    console.log("file data",res);
});

function reciveTestFileData(callback){
    fs.readFile("test.txt", (err, res)=> {
        if (err) {
          return console.log(err);
        }  
        callback(res.toString());   
       //console.log("file content",res.toString());
       // app.get('/getdata',res);
      });
}

app.get('/data', function (req, res, err) {
    res.json({ message: "This is success message" });
})
app.use((req, res, next) => {
    res.status(200).json({
        successMessage: "your server is working..!!"
    })
})
app.listen(port, () => {
    console.log('server running on localhost:' + port);
});




