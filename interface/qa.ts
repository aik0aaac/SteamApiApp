/**
 * QAカテゴリのインターフェース。
 */
export interface IQACategory {
  /**
   * カテゴリ名。
   */
  name: string
}

/**
 * QAデータのインターフェース。
 */
export interface IQAContent {
  /**
   * 質問内容。
   */
  question: string
  /**
   * 回答内容。
   * HTMLタグも使用可能。
   */
  answer: string
}
