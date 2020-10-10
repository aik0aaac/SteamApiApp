"use strict";

const https = require("https");
const fs = require("fs");
const path = require("path");

const fileName = "../outputAllAppId.json";
fs.writeFileSync(path.resolve(__dirname, fileName), "");

const req = https.request(
  "https://api.steampowered.com/ISteamApps/GetAppList/v2/",
  (res) => {
    res.on("data", (chunk) => {
      try {
        fs.appendFileSync(path.resolve(__dirname, fileName), chunk);
      } catch (e) {
        console.log(e);
      }
    });
    res.on("end", () => {
      console.log("¥nJSONデータは以上です。");
    });
  }
);

req.on("error", (e) => {
  console.error(`エラーが出ました： ${e.message}`);
});

req.end();
