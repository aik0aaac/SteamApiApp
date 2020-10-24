import express, { Request, Response } from 'express'

import * as HttpStatus from 'http-status-codes'

import bodyParser from 'body-parser'
import request from 'request'

import RegexpUtil from '../utils/regexpUtil'
const regexpUtil = new RegexpUtil()

const app = express()

// setup body-parser
// ※BFFへのリクエストにはPOSTリクエストは使用しない想定なのでコメントアウト
// app.use(bodyParser.urlencoded({ extended: true }))
// app.use(bodyParser.json())

/**
 * サーバー上でAPIリクエストを送付するエンドポイント。
 * GETパラメータ「api」のリクエストをそのまま送付してくれる。
 */
app.use('/api/get', async (req: Request, res: Response) => {
  // API URLを取得
  const apiUrl = req.query.apiUrl

  // Steam APIでないとリクエストは送付せずエラーにする
  if (
    !regexpUtil.test(apiUrl as string, regexpUtil.steamApiUrl) &&
    !regexpUtil.test(apiUrl as string, regexpUtil.steamApiReviewUrl)
  ) {
    console.log(
      `Steam APIではないAPIが指定されました。
APIURL=${apiUrl}
処理を中断します。`
    )
    res.end()
  }

  const options = {
    method: 'GET',
    url: apiUrl,
    json: true,
  }

  // eslint-disable-next-line handle-callback-err
  request(options, (error, response, body) => {
    res.send(body)
  })
})

export default app
