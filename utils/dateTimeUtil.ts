/**
 * 日付関連のUtilクラス。
 */
export default class DateTimeUtil {
  /**
   * 指定したTimeStampを日付&時間に変更。
   * @param timestamp 指定するTimestamp
   * @param base timestampをDateTime型に直す過程で掛けられる数値。デフォルト1000。
   */
  public static convertTimestampToDateTime(
    timestamp: number,
    base?: number
  ): string {
    const dateTime = new Date(timestamp * (base !== undefined ? base : 1000))
    return `${dateTime.toLocaleDateString(
      'ja-JP'
    )} ${dateTime.toLocaleTimeString('ja-JP')}`
  }

  /**
   * 指定したTimeStampを日付に変更。
   * @param timestamp 指定するTimestamp
   * @param base timestampをDateTime型に直す過程で掛けられる数値。デフォルト1000。
   */
  public static convertTimestampToDate(
    timestamp: number,
    base?: number
  ): string {
    const dateTime = new Date(timestamp * (base !== undefined ? base : 1000))
    return `${dateTime.toLocaleDateString('ja-JP')}`
  }
}
