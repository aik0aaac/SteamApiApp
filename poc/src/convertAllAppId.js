"use strict";
//ファイル操作モジュールの追加
var fs = require('fs');
const path = require("path");

const fileName = "../outputAllAppId.json";

const fileRawData = fs.readFileSync(path.resolve(__dirname, fileName));
const data = JSON.parse(fileRawData);

const writeFileName = '../outputAppName.txt'
fs.writeFileSync(path.resolve(__dirname, writeFileName), "");
data.applist.apps.forEach(e => {
  try {
    fs.appendFileSync(path.resolve(__dirname, writeFileName), `${e.name}, ${e.appid}\n`);
  } catch (e) {
    console.log(e);
  }
});
