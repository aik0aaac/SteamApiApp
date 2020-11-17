/* eslint-disable camelcase */
/**
 * レビューヒストグラム情報(生データ)。
 */
export interface getReviewHistogramRaw {
  /**
   * リクエストの成功フラグ。成功時 = 1
   */
  success: number
  /**
   * レビューヒストグラム情報。
   */
  results: getReviewHistogram
  /**
   * 謎値, true か falseが入る
   */
  count_all_reviews: boolean
  /**
   * 謎値, true か falseが入る
   */
  expand_graph: boolean
}

/**
 * レビューヒストグラム情報。
 * https://store.steampowered.com/appreviewhistogram/appidを入力]
 */
export interface getReviewHistogram {
  /**
   * 集計開始日(unixタイムスタンプ)
   */
  start_date: number
  /**
   * 集計終了日(unixタイムスタンプ)
   */
  end_date: number
  /**
   * 謎値。判明次第仕様を考慮…。
   */
  weeks: Array<any>
  /**
   * ヒストグラムデータ
   */
  rollups: Array<getReviewHistogramData>
  /**
   * 上記`rollups`の対象期間がどんな区切りで示されているかを示す, weekやmonthなどが入る
   */
  rollup_type: string
  /**
   * 直近のレビューヒストグラムデータ。
   */
  recent: Array<getReviewHistogramData>
}

export interface getReviewHistogramData {
  /**
   * 対象期間(unixタイムスタンプ)
   */
  date: number
  /**
   * 対象期間中の肯定的なレビューの投稿数
   */
  recommendations_up: number
  /**
   * 対象期間中の否定的なレビューの投稿数
   */
  recommendations_down: number
}
