'use strict'
const fs = require('fs')
const path = require('path')
const https = require('https')

let result = ''

const req = https.request(
  'https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=1256670',
  (res) => {
    res.on('data', (chunk) => {
      result += chunk
    })
    res.on('end', () => {
      const data = JSON.parse(result)

      const fileName = '../outputGetNews.json'
      fs.writeFileSync(path.resolve(__dirname, fileName), '')
      try {
        fs.appendFileSync(path.resolve(__dirname, fileName), result)
      } catch (e) {
        console.log(e)
      }

      console.log(data.appnews.newsitems)
      console.log('¥nJSONデータは以上です。')
    })
  }
)

req.on('error', (e) => {
  console.error(`エラーが出ました： ${e.message}`)
})

req.end()
