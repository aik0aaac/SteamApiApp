import { VuexModule, Module, getModule, Action } from 'vuex-module-decorators'
import axios from 'axios'
import { IModId } from './dataModule/types'
import store from '~/store/store'

import Settings from '~/config/settings'

import ApiRequest from '~/data/api/apiRequest'
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
  public async getModInfoForModList(modList: Array<IModId>) {
    const modIdList = modList.map((e) => e.modId)
    const rawResponse = await axios.post(apiRequest.getRequestViaBff, {
      apiUrl: apiRequest.getaSharedFileData(),
      requestBodyData: {
        itemcount: modList.length,
        publishedfileids: modIdList,
      },
    })
    return rawResponse.data.response
  }
}

export const modWatcherModule = getModule(ModWatcherModule)
