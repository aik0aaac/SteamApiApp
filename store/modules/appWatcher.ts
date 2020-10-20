import { VuexModule, Module, getModule, Mutation } from 'vuex-module-decorators'
import store from '~/store/store'

// LocalStorage import
import AppWatcherLocalStorage from '~/data/localStorage/appWatcher'
const appWatcherLocalStorage = new AppWatcherLocalStorage()

export interface IAppWatcherState {
  appId: string | null
}
@Module({
  dynamic: true,
  namespaced: true,
  store,
  stateFactory: true,
  name: 'appWatcher',
})
class AppWatcherModule extends VuexModule implements IAppWatcherState {
  private _appId: string | null = appWatcherLocalStorage.getAppId()

  /**
   * 登録中のアプリID。
   * 未登録の場合は「null」を返す。
   */
  get appId(): string | null {
    return this._appId
  }

  /**
   * アプリIDが登録されているかどうか。
   */
  get isRegisteredAppId(): boolean {
    return this._appId !== null
  }

  @Mutation
  public setAppId(data: string) {
    this._appId = data

    // LocalStorage情のデータを更新
    appWatcherLocalStorage.setAppId(data)
  }
}

export const appWatcherModule = getModule(AppWatcherModule)
