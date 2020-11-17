import { getPublishedFileDetailsItem } from './api/getPublishedFileDetails'

export interface IModWatcherData {
  /**
   * ゲーム名
   */
  gameName: string
  /**
   * MOD情報
   */
  apiData: getPublishedFileDetailsItem
}
