/**
 * 文字列関連のUtilクラス。
 */
export default class HtmlParseUtil {
  /**
   * HTMLテキストからscriptタグを除去する。
   * @param text HTMLテキスト
   */
  public static removeScriptTag(text: string) {
    return text.replace(/<script/g, '&lt;script')
  }

  /**
   * Imageタグのwidthを強制的にauto、max-width100%, height: autoにする。
   * @param text HTMLテキスト
   */
  public static convertImgToScreenFit(text: string) {
    return text.replace(
      /<img/g,
      '<img style="' +
      'width: auto !important;' +
      'max-width: 100% !important;' +
      'height: auto !important;"'
    )
  }
}
