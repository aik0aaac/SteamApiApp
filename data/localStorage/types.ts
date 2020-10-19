export interface LocalStorageData {
  /**
   * 対象のLocalStorageアイテムが存在するかどうか。
   */
  isExist: boolean
  /**
   * 対象のLocalStorageアイテム。
   * 存在しなければNULLが入る。
   */
  data: any | null
}
