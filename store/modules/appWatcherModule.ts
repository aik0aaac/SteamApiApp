import { VuexModule, Module, getModule, Action } from 'vuex-module-decorators'
import axios from 'axios'
import store from '~/store/store'

import Settings from '~/config/settings'

import ApiRequest from '~/data/api/apiRequest'
const apiRequest = new ApiRequest(location.protocol, location.host, 'get')

export interface IAppWatcherState { }
@Module({
  dynamic: true,
  namespaced: true,
  store,
  stateFactory: true,
  name: 'appWatcher',
})
class AppWatcherModule extends VuexModule implements IAppWatcherState {
  /**
   * 指定したアプリのプレイヤー数を取得。
   */
  @Action({})
  public async getNumberOfCurrentPlayers(appId: string) {
    const rawResponse = await axios.get(
      apiRequest.getRequestViaBff + apiRequest.getNumberOfCurrentPlayers(appId)
    )
    return rawResponse.data.response
  }

  /**
   * 指定したアプリの最新ニュースを5件取得。
   */
  @Action({})
  public async getNewsForApp(appId: string) {
    const option =
      Settings.getRequestParameterReplaceStr +
      Settings.getRequestParameterReplaceStr +
      'count=5'
    const rawResponse = await axios.get(
      apiRequest.getRequestViaBff + apiRequest.getNewsForApp(appId) + option
    )
    return rawResponse.data
  }

  /**
   * 指定したアプリのレビューヒストグラムを取得。
   */
  @Action({})
  public async getReviewHistogram(appId: string) {
    const rawResponse = await axios.get(
      apiRequest.getRequestViaBff + apiRequest.getReviewHistogram(appId)
    )
    return rawResponse.data
  }

  /**
   * 指定したアプリの実績取得比率を取得。
   */
  @Action({})
  public async getGlobalAchievementPercentagesForApp(appId: string) {
    const rawResponse = await axios.get(
      apiRequest.getRequestViaBff +
      apiRequest.getGlobalAchievementPercentagesForApp(appId)
    )
    return rawResponse.data
  }
}

export const appWatcherModule = getModule(AppWatcherModule)
