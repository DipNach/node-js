var scanner = require("chromecast-scanner");
exports.getChromecastDevices = callback => {
  scanner((err, service) => {
    if (err) return console.log(err.message);
    return callback({ message: "success callback" });
  });
};
