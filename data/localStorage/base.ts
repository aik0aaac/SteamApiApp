/**
 * LocalStorageクラスの基本Class。
 */
export default class BaseLocalStorage {
  /**
   * LocalStorageにアイテムをセットします。
   * @param key セットするアイテムのキー名。
   */
  protected getLocalStorage(key: string): string | null {
    return localStorage.getItem(key)
  }

  /**
   * LocalStorageにアイテムをセットします。
   * @param key セットするアイテムのキー名。
   * @param value セットするアイテムの値。
   */
  protected setLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value)
  }

  /**
   * 指定したKeyのLocalStorageアイテムを消去します。
   * @param key 指定アイテムのキー名。
   */
  protected clearLocalStorage(key: string): void {
    localStorage.removeItem(key)
  }

  /**
   * 指定したキー名のLocalStorageアイテムが存在するかをチェックします。
   * @param key アイテムのキー名。
   */
  protected isExistLocalStorageItem(key: string): boolean {
    const target = localStorage.getItem(key)
    return target !== null
  }
}
