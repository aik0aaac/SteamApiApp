import Vue from 'vue'
import Vuex from 'vuex'
import { IAppWatcherState } from '~/store/modules/appWatcherModule'
import { IAppIdDataState } from '~/store/modules/dataModule/appIdDataModule'
import { IModIdDataState } from '~/store/modules/dataModule/modIdDataModule'

Vue.use(Vuex)

export interface State {
  appWatcher: IAppWatcherState
  appIdData: IAppIdDataState
  modIdData: IModIdDataState
}
export default new Vuex.Store<State>({})
