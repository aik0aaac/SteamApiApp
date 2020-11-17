import { VuexModule, Module, getModule, Mutation } from 'vuex-module-decorators'
import store from '~/store/store'

import { IModId } from '~/interface/dataModule'
import ModIdDataLocalStorage from '~/data/localStorage/modIdData'

const modIdDataLocalStorage = new ModIdDataLocalStorage()

export interface IModIdDataState {
  modIdList: Array<IModId>
}
@Module({
  dynamic: true,
  namespaced: true,
  store,
  stateFactory: true,
  name: 'modIdData',
})
class ModIdDataModule extends VuexModule implements IModIdDataState {
  /**
   * MOD IDリストのprivate変数。
   */
  private _modIdList: Array<IModId> = modIdDataLocalStorage.getModIdList()

  /**
   * 登録中のMOD IDリスト。
   * 未登録の場合は「`dataLocalStorage.isNoLocalStorageData(['']`)」を返す。
   */
  get modIdList(): Array<IModId> {
    return this._modIdList
  }

  /**
   * MOD IDが登録されているかどうか。
   */
  get isRegisteredModIdList(): boolean {
    if (this._modIdList.length <= 0) {
      return false
    } else if (
      JSON.stringify(this._modIdList) ===
      JSON.stringify(modIdDataLocalStorage.isErrorModIdLocalStorageData)
    ) {
      return false
    }
    return true
  }

  /**
   * MOD IDリストを新規作成&セット。
   * @param data MOD IDデータ。
   */
  @Mutation
  public setModId(data: IModId): void {
    // MOD IDリストが存在しなければ新規作成
    if (
      JSON.stringify(this._modIdList) ===
      JSON.stringify(modIdDataLocalStorage.isErrorModIdLocalStorageData)
    ) {
      this._modIdList = [data]
    } else {
      // MOD IDリストが存在すれば追加処理
      this._modIdList.push(data)
    }

    // LocalStorage上のデータを更新
    modIdDataLocalStorage.setModId(data)
  }

  /**
   * MOD IDリストを丸ごとセット。
   */
  @Mutation
  public setModIdList(rawModIdList: Array<IModId>): void {
    // 不正な値が混入することを防ぐため、一度値を取り出し格納し直す。
    const modIdList: Array<IModId> = []
    rawModIdList.forEach((e) => {
      const tmp: IModId = {
        modId: e.modId,
        gameName: e.gameName,
      }
      modIdList.push(tmp)
    })

    // 格納し直した値をセット
    this._modIdList = modIdList
    // LocalStorage上のデータを更新
    modIdDataLocalStorage.setModIdList(modIdList)
  }

  // /**
  //  * 現在選択中のMOD ID。
  //  */
  // get currentModId(): IModId {
  //   return this._currentModId
  // }

  // /**
  //  * MOD IDが登録されているかどうか。
  //  */
  // get isRegisteredCurrentModId(): boolean {
  //   return this._currentModId.modId !== ''
  // }

  // /**
  //  * 現在選択中のMOD IDをセット。
  //  */
  // @Mutation
  // public setCurrentModId(data: IModId): void {
  //   this._currentModId = data
  // }

  /**
   * MOD IDを消去。
   */
  @Mutation
  public clearModIdList(): void {
    // LocalStorage上のデータを更新
    modIdDataLocalStorage.clearModIdList()
    this._modIdList = modIdDataLocalStorage.getModIdList()
  }
}

export const modIdDataModule = getModule(ModIdDataModule)
