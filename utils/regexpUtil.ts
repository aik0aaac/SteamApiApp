export default class RegexpUtil {
  /**
   * 指定した文字列内から指定した正規表現パターンの文字列を抽出する。
   * 複数個該当する文字列がある場合は、1つ目に該当する文字列を返却する。
   * @param str 指定文字列。
   * @param regexp 指定正規表現パターン。
   */
  public match(str: string, regexp: RegExp): string {
    return (str.match(regexp) as Array<string>)[1]
  }

  /**
   * 指定した文字列が、指定した正規表現パターンとマッチするかを判定する。
   * @param str 指定文字列。
   * @param regexp 指定正規表現パターン。
   */
  public test(str: string, regexp: RegExp): boolean {
    return regexp.test(str)
  }

  /**
   * SteamURLからAppIdを抽出する正規表現パターン。
   */
  public steamUrlToAppId: RegExp = /https:\/\/store.steampowered.com\/app\/([0-9]+)\//

  /**
   * SteamApiの正規表現パターン。
   */
  public steamApiUrl: RegExp = /^https:\/\/api.steampowered.com.*/

  /**
   * SteamApi(Review)の正規表現パターン。
   */
  public steamApiReviewUrl: RegExp = /^https:\/\/store.steampowered.com.*/
}
