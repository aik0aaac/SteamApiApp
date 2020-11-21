import { VuexModule, Module, getModule, Mutation } from 'vuex-module-decorators'
import store from '~/store/store'

import { IAppId } from '~/interface/dataModule'
import AppIdDataLocalStorage from '~/data/localStorage/appIdData'

const appIdDataLocalStorage = new AppIdDataLocalStorage()

export interface IAppIdDataState {
  appIdList: Array<IAppId>
  currentAppId: IAppId
}
@Module({
  dynamic: true,
  namespaced: true,
  store,
  stateFactory: true,
  name: 'appIdData',
})
class AppIdDataModule extends VuexModule implements IAppIdDataState {
  /**
   * アプリIDリストのprivate変数。
   */
  private _appIdList: Array<IAppId> = appIdDataLocalStorage.getAppIdList()
  /**
   * 現在選択中のアプリIDのprivate変数。
   */
  private _currentAppId: IAppId = this._appIdList[0]

  /**
   * 登録中のアプリIDリスト。
   * 未登録の場合は「`dataLocalStorage.isNoLocalStorageData(['']`)」を返す。
   */
  get appIdList(): Array<IAppId> {
    return this._appIdList
  }

  /**
   * アプリIDが登録されているかどうか。
   */
  get isRegisteredAppIdList(): boolean {
    if (this._appIdList.length <= 0) {
      return false
    } else if (
      JSON.stringify(this._appIdList) ===
      JSON.stringify(appIdDataLocalStorage.isErrorAppIdLocalStorageData)
    ) {
      return false
    }
    return true
  }

  /**
   * アプリIDリストを新規作成&セット。
   * @param data アプリIDデータ。
   */
  @Mutation
  public setAppId(data: IAppId): void {
    // アプリIDリストが存在しなければ新規作成
    if (
      JSON.stringify(this._appIdList) ===
      JSON.stringify(appIdDataLocalStorage.isErrorAppIdLocalStorageData)
    ) {
      this._appIdList = [data]
    } else {
      // アプリIDリストが存在すれば追加処理
      this._appIdList.push(data)
    }

    // LocalStorage上のデータを更新
    appIdDataLocalStorage.setAppId(data)
  }

  /**
   * アプリIDリストを丸ごとセット。
   */
  @Mutation
  public setAppIdList(rawAppIdList: Array<IAppId>): void {
    // 不正な値が混入することを防ぐため、一度値を取り出し格納し直す。
    const appIdList: Array<IAppId> = []
    rawAppIdList.forEach((e) => {
      const tmp: IAppId = {
        appId: e.appId,
      }
      appIdList.push(tmp)
    })

    // 格納し直した値をセット
    this._appIdList = appIdList
    // LocalStorage上のデータを更新
    appIdDataLocalStorage.setAppIdList(appIdList)
  }

  /**
   * 現在選択中のアプリID。
   */
  get currentAppId(): IAppId {
    return this._currentAppId
  }

  /**
   * アプリIDが登録されているかどうか。
   */
  get isRegisteredCurrentAppId(): boolean {
    return this._currentAppId.appId !== ''
  }

  /**
   * 現在選択中のアプリIDをセット。
   */
  @Mutation
  public setCurrentAppId(data: IAppId): void {
    this._currentAppId = data
  }

  /**
   * アプリIDを消去。
   */
  @Mutation
  public clearAppIdList(): void {
    // LocalStorage上のデータを更新
    appIdDataLocalStorage.clearAppIdList()
    this._appIdList = appIdDataLocalStorage.getAppIdList()
  }
}

export const appIdDataModule = getModule(AppIdDataModule)
