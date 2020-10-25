import express, { Request, Response } from 'express'

import * as HttpStatus from 'http-status-codes'

import bodyParser from 'body-parser'
import request from 'request'

import RegexpUtil from '../utils/regexpUtil'
import Settings from '../config/settings'

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
  let apiUrl = req.query.apiUrl as string

  // Steam APIでないとリクエストは送付せずエラーにする
  if (
    !RegexpUtil.test(apiUrl as string, RegexpUtil.steamApiUrl) &&
    !RegexpUtil.test(apiUrl as string, RegexpUtil.steamApiReviewUrl)
  ) {
    console.log(
      `Steam APIではないAPIが指定されました。
APIURL=${apiUrl}
処理を中断します。`
    )
    res.end()
  }

  // GETパラメータエスケープ用文字列をConvert
  const getRequestParameterReplacePattern = new RegExp(
    '\\' + Settings.getRequestParameterReplaceStr,
    'g'
  )
  apiUrl = apiUrl.replace(getRequestParameterReplacePattern, '&')

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
