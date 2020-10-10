"use strict";

var fs = require("fs");

var path = require("path");

var https = require("https");

var result = '';
var req = https.request("https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=1256670", function (res) {
  res.on("data", function (chunk) {
    result += chunk;
  });
  res.on("end", function () {
    var data = JSON.parse(result);
    var fileName = "../outputGetNews.json";
    fs.writeFileSync(path.resolve(__dirname, fileName), "");

    try {
      fs.appendFileSync(path.resolve(__dirname, fileName), result);
    } catch (e) {
      console.log(e);
    }

    console.log(data.appnews.newsitems);
    console.log("¥nJSONデータは以上です。");
  });
});
req.on("error", function (e) {
  console.error("\u30A8\u30E9\u30FC\u304C\u51FA\u307E\u3057\u305F\uFF1A ".concat(e.message));
});
req.end();