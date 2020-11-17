import RegexpUtil from '@/utils/regexpUtil'
import BaseLocalStorage from './base'

import { IAppId } from '~/interface/dataModule'

/**
 * APP IDを管理するClass。
 */
export default class AppIdDataLocalStorage extends BaseLocalStorage {
  /**
   * APP IDデータがNULLの時に返却されるデータ。
   */
  public isErrorAppIdLocalStorageData: Array<IAppId> = [
    {
      appId: '',
      label: '',
    },
  ]

  /**
   * 現在登録中のアプリIDリスト。
   */
  private appIdListKeyName = 'steamWatcher_appIdList'

  /**
   * アプリIDリストがLocalStorageに登録されているかチェック。
   * 登録されている=true/登録されていない~false
   */
  public isRegisteredAppIdList(): boolean {
    const appIdList = this.getLocalStorage(this.appIdListKeyName)

    if (appIdList === null) {
      return false
    }
    return true
  }

  /**
   * 現在登録中のアプリIDリストがあるかどうか&あればデータをを返却。
   */
  public getAppIdList(): Array<IAppId> {
    // アプリIDリストが登録されていなければ空データを返却
    if (!this.isRegisteredAppIdList()) {
      return this.isErrorAppIdLocalStorageData
    }

    // LocalStorageからデータ取得
    const appIdList: Array<IAppId> = JSON.parse(
      this.getLocalStorage(this.appIdListKeyName) as string
    )

    // アプリIDの書式であるかどうかチェック
    appIdList.forEach((e: IAppId) => {
      if (!RegexpUtil.test(e.appId, RegexpUtil.steamAppId)) {
        // アプリIDでない書式であれば、エラーを吐き空文字を返す
        console.log(`SteamアプリIDではない文字列がLocalStorageにセットされています。
一度「LocalStorageをクリア」してからご利用ください。`)
        return this.isErrorAppIdLocalStorageData
      }
    })

    return appIdList
  }

  /**
   * 現在登録中のアプリIDをセットする。
   * @param data アプリIDデータ。
   */
  public setAppId(data: IAppId): void {
    // アプリIDリストがLocalStorage内部に存在しないorErrorデータであれば新規作成
    if (!this.isRegisteredAppIdList()) {
      const appIdList: Array<IAppId> = [data]
      this.setLocalStorage(this.appIdListKeyName, JSON.stringify(appIdList))
    } else {
      // アプリIDリストがLocalStorage内部に存在すれば追加処理
      const appIdList = this.getAppIdList()
      appIdList.push(data)
      this.setLocalStorage(this.appIdListKeyName, JSON.stringify(appIdList))
    }
  }

  /**
   * アプリIDリストを丸ごとセット。
   */
  public setAppIdList(appIdList: Array<IAppId>): void {
    this.setLocalStorage(this.appIdListKeyName, JSON.stringify(appIdList))
  }

  /**
   * アプリIDリスト情報を全て削除する。
   */
  public clearAppIdList(): void {
    this.clearLocalStorage(this.appIdListKeyName)
  }
}
