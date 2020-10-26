import Vue from 'vue'
import Vuex from 'vuex'
import { IAppWatcherState } from '~/store/modules/appWatcherModule'
import { IDataState } from '~/store/modules/dataModule'

Vue.use(Vuex)

export interface State {
  appWatcher: IAppWatcherState
  data: IDataState
}
export default new Vuex.Store<State>({})
