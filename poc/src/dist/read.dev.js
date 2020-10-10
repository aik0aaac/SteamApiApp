"use strict"; //ファイル操作モジュールの追加

var fs = require('fs');

var path = require("path");

var fileName = "../output.json";
var fileRawData = fs.readFileSync(path.resolve(__dirname, fileName));
var data = JSON.parse(fileRawData);
var writeFileName = '../appName.txt';
fs.writeFileSync(path.resolve(__dirname, writeFileName), "");
data.applist.apps.forEach(function (e) {
  try {
    fs.appendFileSync(path.resolve(__dirname, writeFileName), "".concat(e.name, ", ").concat(e.appid, "\n"));
  } catch (e) {
    console.log(e);
  }
});