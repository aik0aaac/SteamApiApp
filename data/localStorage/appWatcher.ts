import BaseLocalStorage from './base'
import { LocalStorageData } from './types'

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
  public getAppId(): LocalStorageData {
    const ret: LocalStorageData = {
      isExist: this.isExistLocalStorageItem(this.appIdKeyName),
      data: this.getLocalStorage(this.appIdKeyName),
    }
    return ret
  }

  /**
   * 現在登録中のお気に入りアプリIDをセットする。
   * @param value お気に入りアプリID。
   */
  public setAppId(value: string): void {
    this.setLocalStorage(this.appIdKeyName, value)
  }
}
