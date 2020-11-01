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
    const option = Settings.getRequestParameterReplaceStr + 'count=5'
    const rawResponse = await axios.get(
      apiRequest.getRequestViaBff + apiRequest.getNews(appId) + option
    )
    return rawResponse.data
  }

  /**
   * 指定したアプリの日本語の最近の最も参考になったレビュー10件取得。
   * https://store.steampowered.com/appreviews/1256670?json=1&day_range=30&start_date=-1&end_date=-1&filter=summary&language=japanese&review_type=all&purchase_type=all&playtime_filter_min=0&playtime_filter_max=0
   */
  @Action({})
  public async getReviewForAppWatcher(appId: string) {
    const option =
      Settings.getRequestParameterReplaceStr +
      'day_range=' +
      Settings.reviewRecentDays +
      Settings.getRequestParameterReplaceStr +
      'filter=summary' +
      Settings.getRequestParameterReplaceStr +
      'language=japanese' +
      Settings.getRequestParameterReplaceStr +
      'review_type=all' +
      Settings.getRequestParameterReplaceStr +
      'purchase_type=all' +
      Settings.getRequestParameterReplaceStr +
      'num_per_page=10' +
      Settings.getRequestParameterReplaceStr +
      'start_date=-1' +
      Settings.getRequestParameterReplaceStr +
      'end_date=-1'
    const rawResponse = await axios.get(
      apiRequest.getRequestViaBff + apiRequest.getReview(appId) + option
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
