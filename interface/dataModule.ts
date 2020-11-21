export interface IAppId {
  /**
   * アプリID。
   */
  appId: string
}

export interface IModId {
  /**
   * MOD ID。
   */
  modId: string
  /**
   * MOD名。
   * APIから取得したデータが格納される。
   * APIでのデータ未取得状態だとから文字が入る。
   */
  modName: string
  /**
   * MOD画像。
   * APIから取得したデータが格納される。
   * APIでのデータ未取得状態だとから文字が入る。
   */
  modPreviewUrl: string
}
