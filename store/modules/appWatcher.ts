import {
  VuexModule,
  Module,
  getModule,
  Mutation,
  Action,
} from 'vuex-module-decorators'
import axios from 'axios'
import store from '~/store/store'

import ApiRequest from '~/data/api/apiRequest'

import AppWatcherLocalStorage from '~/data/localStorage/appWatcher'
import Settings from '~/config/settings'

const apiRequest = new ApiRequest(location.protocol, location.host, 'get')
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

  /**
   * アプリIDをセット。
   * @param appId アプリID。
   */
  @Mutation
  public setAppId(appId: string) {
    this._appId = appId

    // LocalStorage上のデータを更新
    appWatcherLocalStorage.setAppId(appId)
  }

  /**
   * アプリIDを消去。
   */
  @Mutation
  public clearAppId() {
    this._appId = null
    // LocalStorage上のデータを更新
    appWatcherLocalStorage.clearAppId()
  }

  /**
   * 指定したアプリのプレイヤー数を取得。
   */
  @Action({})
  public async getNumberOfCurrentPlayers() {
    const rawResponse = await axios.get(
      apiRequest.getRequestViaBff +
      apiRequest.getNumberOfCurrentPlayers(this._appId as string)
    )
    return rawResponse.data.response
  }

  /**
   * 指定したアプリの最新ニュースを5件取得。
   */
  @Action({})
  public async getNewsForApp() {
    const option =
      Settings.getRequestParameterReplaceStr +
      'maxlength=100' +
      Settings.getRequestParameterReplaceStr +
      'count=5'
    const rawResponse = await axios.get(
      apiRequest.getRequestViaBff +
      apiRequest.getNewsForApp(this._appId as string) +
      option
    )
    return rawResponse.data
  }

  /**
   * 指定したアプリのレビューヒストグラムを取得。
   */
  @Action({})
  public async getReviewHistogram() {
    const rawResponse = await axios.get(
      apiRequest.getRequestViaBff +
      apiRequest.getReviewHistogram(this._appId as string)
    )
    return rawResponse.data
  }

  /**
   * 指定したアプリの実績取得比率を取得。
   */
  @Action({})
  public async getGlobalAchievementPercentagesForApp() {
    const rawResponse = await axios.get(
      apiRequest.getRequestViaBff +
      apiRequest.getGlobalAchievementPercentagesForApp(this._appId as string)
    )
    return rawResponse.data
  }
}

export const appWatcherModule = getModule(AppWatcherModule)
