import { VuexModule, Module, getModule, Action } from 'vuex-module-decorators'
import axios from 'axios'
import { IModId } from '../../interface/dataModule'
import store from '~/store/store'

import ApiRequest from '~/data/api/apiRequest'
import {
  getPublishedFileDetails,
  getPublishedFileDetailsRaw,
} from '~/interface/api/getPublishedFileDetails'
const apiRequest = new ApiRequest(location.protocol, location.host, 'post')

export interface IModWatcherState { }
@Module({
  dynamic: true,
  namespaced: true,
  store,
  stateFactory: true,
  name: 'modWatcher',
})
class ModWatcherModule extends VuexModule implements IModWatcherState {
  /**
   * 指定したMODリスト情報を取得。
   */
  @Action({})
  public async getModInfoForModList(
    modList: Array<IModId>
  ): Promise<getPublishedFileDetails> {
    const modIdList = modList.map((e) => e.modId)
    const rawResponse = await axios.post(apiRequest.getRequestViaBff, {
      apiUrl: apiRequest.getPublishedFileDetails(),
      requestBodyData: {
        itemcount: modList.length,
        publishedfileids: modIdList,
      },
    })
    return (rawResponse.data as getPublishedFileDetailsRaw).response
  }
}

export const modWatcherModule = getModule(ModWatcherModule)
