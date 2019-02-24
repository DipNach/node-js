var fs = require("fs");
exports.readCustomFile = function(filename,callback) {
  var data = fs.readFile("test.txt", function(err, res) {
    if (err) {
      return console.log(err);
    } 
    //console.log("content", res.toString());
    return callback(res.toString());    
  });
};
// exports.readCustomFile = (filename)=> {
//   return fs.readFileAsync("test.txt").then((res)=>{
//     if(!res){
//       console.log("problem with file reading");
//     }
//     return res.toString();
//   })
//};

exports.add = function (a, b) {
  return a+b;
}; 

