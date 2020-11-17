import Vue from 'vue'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { required } from 'vee-validate/dist/rules'

import RegexpUtil from '@/utils/regexpUtil'
import Settings from '~/config/settings'
import { IAppId } from '~/interface/dataModule'

extend('required', { ...required, message: '必須項目です' })
extend('appIdList', (value: string) => {
  const errorMessages = 'アプリ情報を入力してください'

  // 何も入力されていない状況であればエラー
  if (
    typeof value !== typeof '' ||
    value === undefined ||
    value === null ||
    value === ''
  ) {
    return errorMessages
  }

  // JSON形式の値でないならエラー
  let appIdList: Array<IAppId> = []
  try {
    appIdList = JSON.parse(value)
  } catch (e) {
    console.log(
      'JSON形式でない値が入力されました!' + Settings.izimeraretaMessage
    )
    return errorMessages
  }

  // Array形式でないならエラー
  if (!Array.isArray(appIdList)) {
    console.log(
      'Array形式でない値が入力されました!' + Settings.izimeraretaMessage
    )
    return errorMessages
  }

  if (appIdList.length === 0) {
    console.log('空の配列が渡されました!' + Settings.izimeraretaMessage)
    return errorMessages
  }

  let isDeepError = false
  appIdList.forEach((e: IAppId) => {
    // IAppIdのプロパティが含まれていないならエラー
    if (e.label === undefined || e.appId === undefined) {
      console.log(
        'SteamWatcherの書式対応外の値が入力されました!' +
        Settings.izimeraretaMessage
      )
      isDeepError = true
      return errorMessages
    }
    // 入力されたappIdがSteamAppIdでなければエラー
    if (!RegexpUtil.steamAppId.test(e.appId)) {
      console.log(
        'appIdがSteamAppIdではありません!' + Settings.izimeraretaMessage
      )
      isDeepError = true
    }
  })

  if (isDeepError) {
    return errorMessages
  }
  return true
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
