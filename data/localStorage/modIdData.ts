import RegexpUtil from '@/utils/regexpUtil'
import BaseLocalStorage from './base'

import { IModId } from '~/store/modules/dataModule/types'

/**
 * MOD IDを管理するClass。
 */
export default class ModIdDataLocalStorage extends BaseLocalStorage {
  /**
   * MOD IDデータがNULLの時に返却されるデータ。
   */
  public isErrorModIdLocalStorageData: Array<IModId> = [
    {
      modId: '',
      gameName: '',
    },
  ]

  /**
   * 現在登録中のMOD IDリスト。
   */
  private modIdListKeyName = 'steamWatcher_modIdList'

  /**
   * MOD IDリストがLocalStorageに登録されているかチェック。
   * 登録されている=true/登録されていない~false
   */
  public isRegisteredModIdList(): boolean {
    const modIdList = this.getLocalStorage(this.modIdListKeyName)
    if (modIdList === null) {
      return false
    }
    return true
  }

  /**
   * 現在登録中のMOD IDリストがあるかどうか&あればデータをを返却。
   */
  public getModIdList(): Array<IModId> {
    // MOD IDリストが登録されていなければ空データを返却
    if (!this.isRegisteredModIdList()) {
      return this.isErrorModIdLocalStorageData
    }

    // LocalStorageからデータ取得
    const modIdList: Array<IModId> = JSON.parse(
      this.getLocalStorage(this.modIdListKeyName) as string
    )

    // MOD IDの書式であるかどうかチェック
    modIdList.forEach((e: IModId) => {
      if (!RegexpUtil.test(e.modId, RegexpUtil.steamModId)) {
        // MOD IDでない書式であれば、エラーを吐き空文字を返す
        console.log(`Steam MOD IDではない文字列がLocalStorageにセットされています。
一度「LocalStorageをクリア」してからご利用ください。`)
        return this.isErrorModIdLocalStorageData
      }
    })

    return modIdList
  }

  /**
   * 現在登録中のMOD IDをセットする。
   * @param data アプリIDデータ。
   */
  public setModId(data: IModId): void {
    // MOD IDリストがLocalStorage内部に存在しないorErrorデータであれば新規作成
    if (!this.isRegisteredModIdList()) {
      const modIdList: Array<IModId> = [data]
      this.setLocalStorage(this.modIdListKeyName, JSON.stringify(modIdList))
    } else {
      // MOD IDリストがLocalStorage内部に存在すれば追加処理
      const modIdList = this.getModIdList()
      modIdList.push(data)
      this.setLocalStorage(this.modIdListKeyName, JSON.stringify(modIdList))
    }
  }

  /**
   * MOD IDリストを丸ごとセット。
   */
  public setModIdList(modIdList: Array<IModId>): void {
    this.setLocalStorage(this.modIdListKeyName, JSON.stringify(modIdList))
  }

  /**
   * MOD IDリスト情報を全て削除する。
   */
  public clearModIdList(): void {
    this.clearLocalStorage(this.modIdListKeyName)
  }
}
