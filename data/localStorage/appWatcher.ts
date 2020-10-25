import RegexpUtil from '@/utils/regexpUtil'
import BaseLocalStorage from './base'

/**
 * APP Watcher画面にて使用するデータを管理するClass。
 */
export default class AppWatcherLocalStorage extends BaseLocalStorage {
  /**
   * 現在登録中のお気に入りアプリID。
   */
  private appIdKeyName = 'appWatcher_appId'

  /**
   * 現在登録中のお気に入りアプリIDが存在するか&存在していればアプリIDを返却。
   */
  public getAppId(): string | null {
    const appId = this.getLocalStorage(this.appIdKeyName)

    // アプリIDの書式であるかどうかチェック
    if (RegexpUtil.test(appId as string, RegexpUtil.steamAppId)) {
      return appId
    } else {
      // アプリIDでない書式であれば、エラーを吐き空文字を返す
      console.log(`SteamアプリIDではない文字列がLocalStorageにセットされています。
一度「LocalStorageをクリア」してからご利用ください。`)
      return ''
    }
  }

  /**
   * 現在登録中のお気に入りアプリIDをセットする。
   * @param value お気に入りアプリID。
   */
  public setAppId(value: string): void {
    this.setLocalStorage(this.appIdKeyName, value)
  }

  /**
   * お気に入りアプリID情報を全て削除する。
   */
  public clearAppId(): void {
    this.clearLocalStorage(this.appIdKeyName)
  }
}
