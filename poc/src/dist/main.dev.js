"use strict";

var https = require("https");

var fs = require("fs");

var path = require("path");

var fileName = "../output.json";
fs.writeFileSync(path.resolve(__dirname, fileName), "");
var req = https.request("https://api.steampowered.com/ISteamApps/GetAppList/v2/", function (res) {
  res.on("data", function (chunk) {
    try {
      fs.appendFileSync(path.resolve(__dirname, fileName), chunk);
    } catch (e) {
      console.log(e);
    }
  });
  res.on("end", function () {
    console.log("¥nJSONデータは以上です。");
  });
});
req.on("error", function (e) {
  console.error("\u30A8\u30E9\u30FC\u304C\u51FA\u307E\u3057\u305F\uFF1A ".concat(e.message));
});
req.end();