/**
 * 文字列関連のUtilクラス。
 */
export default class StringUtil {
  /**
   * HTMLテキストからscriptタグを除去する。
   * @param text HTMLテキスト
   */
  public static removeScriptTag(text: string) {
    return text.replace(/<script/g, '&lt;script')
  }
}
