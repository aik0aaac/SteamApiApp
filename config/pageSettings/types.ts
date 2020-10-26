/**
 * 画面設定のインターフェース。
 */
export interface PageSetting {
  /**
   * 画面タイトル。
   */
  title: string
  /**
   * 画面サブタイトル。
   */
  subTitle: string
  /**
   * 画面へのURL。
   */
  link: string
  /**
   * パンくずリスト情報。
   */
  // breadcrumbs: Array<Breadcrumbs>
  /**
   * ナビゲーションverに表示されるアイコン。
   */
  icon: string
}

export interface Breadcrumbs {
  /**
   * 画面タイトル。
   */
  text: string
  /**
   * リンクを無効化するかどうか。
   * true=無効化する/false=有効化する
   */
  disabled: boolean
  /**
   * 画面へのURL
   */
  href: string
}
