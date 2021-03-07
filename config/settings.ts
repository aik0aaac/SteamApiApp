/**
 * アプリ全般の設定。
 */
export default class Settings {
  /**
   * アプリタイトル。
   */
  public static appTitle = 'Steam Watcher'

  /**
   * BFF経由でSteamAPIへGETパラメータを送付する際、第二引数以降に「&」の代わりに付与する文字。
   * ※「&」だとBFF側のRequestParameterとして解釈されてしまうので、これを防ぐため。
   */
  public static getRequestParameterReplaceStr = '*'

  /**
   * ニュース概要欄にて画面に表示させる文字数。
   */
  public static newsSummaryDisplayContentsNum = 200

  /**
   * appWatcher > レビューサマリー欄にて「最近」と指定する日数。
   */
  public static reviewRecentDays = 30
  /**
   * レビュー概要欄にて画面に表示させる文字数。
   */
  public static reviewSummaryDisplayContentsNum = 200

  /**
   * 開発者から故意かもしれない攻撃を受けた時に、Consoleにこっそり表示させるメッセージ。
   */
  public static izimeraretaMessage = `…もし偶発的なものでなく故意的なものであれば、あまり本アプリをいじめないであげてください。`

  /**
   * MOD概要欄にて画面に表示させる文字数。
   */
  public static modSummaryDisplayContentsNum = 200

  /**
   * 「質問箱」へのGoogleフォームURL。
   */
  public static questionForm = 'https://forms.gle/xppufQtGZtiSNcow5'

  /**
   * 「ご意見、ご感想箱」へのGoogleフォームURL。
   */
  public static ideaForm = 'https://forms.gle/C83D9vBuMTsNrgAK9'
}
