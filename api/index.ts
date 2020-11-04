import express, { Request, Response } from 'express'

import * as HttpStatus from 'http-status-codes'

import bodyParser from 'body-parser'
import request from 'request'

import RegexpUtil from '../utils/regexpUtil'
import Settings from '../config/settings'

// expressインスタンス作成
const app = express()

// setup body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/**
 * サーバー上でAPIリクエストを送付するエンドポイント。
 * GETパラメータ「api」のリクエストをそのまま送付してくれる。
 */
app.get('/api/get', async (req: Request, res: Response) => {
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

/**
 * サーバー上でAPIリクエストを送付するエンドポイント。
 */
app.post('/api/post', async (req: Request, res: Response) => {
  // API URLを取得
  const apiUrl = req.body.apiUrl as string
  // BODYリクエスト情報を取得
  const bodyRequest = req.body.requestBodyData

  // Steam APIでないとリクエストは送付せずエラーにする
  if (!RegexpUtil.test(apiUrl as string, RegexpUtil.steamApiUrl)) {
    console.log(
      `Steam APIではないAPIが指定されました。
  APIURL=${apiUrl}
  処理を中断します。`
    )
    res.end()
  }

  const options = {
    url: apiUrl,
    method: 'POST',
    form: bodyRequest,
    headers: {
      'Content-Type': 'application/json',
    },
  }

  // eslint-disable-next-line handle-callback-err
  request.post(options, (error, response, body) => {
    res.send(body)
  })
})

export default app
