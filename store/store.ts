import Vue from 'vue'
import Vuex from 'vuex'
import { IAppWatcherState } from '@/store/modules/appWatcher'
Vue.use(Vuex)

export interface State {
  appWatcher: IAppWatcherState
}
export default new Vuex.Store<State>({})
