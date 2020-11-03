/**
 * 正規表現関連のUtilクラス。
 */
export default class RegexpUtil {
  /**
   * 指定した文字列内から指定した正規表現パターンの文字列を抽出する。
   * 複数個該当する文字列がある場合は、1つ目に該当する文字列を返却する。
   * @param str 指定文字列。
   * @param regexp 指定正規表現パターン。
   */
  public static match(str: string, regexp: RegExp): string {
    return (str.match(regexp) as Array<string>)[1]
  }

  /**
   * 指定した文字列が、指定した正規表現パターンとマッチするかを判定する。
   * @param str 指定文字列。
   * @param regexp 指定正規表現パターン。
   */
  public static test(str: string, regexp: RegExp): boolean {
    return regexp.test(str)
  }

  /**
   * SteamURLからAppIdを抽出する正規表現パターン。
   */
  public static steamUrlToAppId: RegExp = /https:\/\/store.steampowered.com\/app\/([0-9]+)\//
  /**
   * SteamURLからModIdを抽出する正規表現パターン。
   * https://steamcommunity.com/sharedfiles/filedetails/?id=2224118463
   */
  public static steamUrlToModId: RegExp = /https:\/\/steamcommunity.com\/sharedfiles\/filedetails\/\?id=([0-9]+)/

  /**
   * SteamAppIdの正規表現パターン。
   */
  public static steamAppId: RegExp = /^[0-9]+$/
  /**
   * SteamModIdの正規表現パターン。
   */
  public static steamModId: RegExp = /^[0-9]+$/

  /**
   * SteamApiの正規表現パターン。
   */
  public static steamApiUrl: RegExp = /^https:\/\/api.steampowered.com.*/

  /**
   * SteamApi(Review)の正規表現パターン。
   */
  public static steamApiReviewUrl: RegExp = /^https:\/\/store.steampowered.com.*/
}
