import Vuex from 'vuex'
import { appIdDataModule } from '@/store/modules/dataModule/appIdDataModule'
import { createLocalVue } from '@vue/test-utils'
// import { Action, getModule } from 'vuex-module-decorators'

// ローカルVueインスタンスを使用
const localVue = createLocalVue()
localVue.use(Vuex)

describe('IAppIdDataState', () => {
  test('init', () => {
    // ステートをモック化
    const mockState = {
      count: 0,
    }

    console.log(appIdDataModule)

    appIdDataModule.mutations!.setAppId(mockState, {})
    expect(mockState.count).toBe(2)
  })
})
