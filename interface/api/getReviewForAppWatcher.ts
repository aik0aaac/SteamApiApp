/* eslint-disable camelcase */
/**
 * レビュー内容。
 * https://store.steampowered.com/appreviews/appidを入力]?json=1
 */
export interface getReviewForAppWatcher {
  /**
   * リクエストの成功フラグ。成功時=1
   */
  success: number
  /**
   * レビューサマリー。
   */
  query_summary: getReviewForAppWatcherSummary
  /**
   * レビューデータ。
   */
  reviews: Array<getReviewForAppWatcherItem>
  /**
   * 条件に合うレビューが20個より多い場合に付与, 次のリクエストのcursorにこの値をつけることで21個目以降のレビューを取得可能]
   */
  cursor: string
}

/**
 * レビューサマリー。
 */
export interface getReviewForAppWatcherSummary {
  /**
   * 取得したレビュー数
   */
  num_reviews: number
  /**
   * レビュースコア(数値)
   */
  review_score: number
  /**
   * レビュースコア説明(「非常に好評」, 「圧倒的に好評」などが入る)
   */
  review_score_desc: string
  /**
   * 肯定的なレビュー総数
   */
  total_positive: number
  /**
   * 否定的なレビュー総数
   */
  total_negative: number
  /**
   * クエリパラメータと合致するレビュー総数(全レビューの総数ではない)
   */
  total_reviews: number
}

/**
 * レビューデータ。
 */
export interface getReviewForAppWatcherItem {
  /**
   * 「おすすめ」の固有ID
   */
  recommendationid: string
  /**
   * レビュー執筆者情報。
   */
  author: getReviewForAppWatcherItemAuthor
  /**
   * 言語
   */
  language: string
  /**
   * レビュー内容
   */
  review: string
  /**
   * レビュー作成日(unixタイムスタンプ)
   */
  timestamp_created: number
  /**
   * レビュー最終更新日(unixタイムスタンプ)
   */
  timestamp_updated: number
  /**
   * true =「肯定的なおすすめ」レビューと判定されたレビュー
   */
  voted_up: boolean
  /**
   * 「参考になった」と評価したユーザー数
   */
  votes_up: number
  /**
   * 「面白い」と評価したユーザー数
   */
  votes_funny: number
  /**
   * 「参考になった」スコア(単位:%)
   */
  weighted_vote_score: number
  /**
   * このレビューに対するコメント数
   */
  comment_count: number
  /**
   * true = このレビュー作成者がSteamで対象ゲームを購入した
   */
  steam_purchase: boolean
  /**
   * true = レビュー投稿時に「アプリを無料で入手した」にチェック
   */
  received_for_free: boolean
  /**
   * true = アーリーアクセス期間中にレビューを投稿した
   */
  written_during_early_access: boolean
  /**
   * 開発元からのこのレビューへのコメント(無い場合はプロパティごと存在しない)
   */
  developer_response: string
  /**
   * 開発元からのこのレビューへのコメント投稿日時(unixタイムスタンプ)(無い場合はプロパティごと存在しない)
   */
  timestamp_dev_responded: number
}

/**
 * レビューデータ執筆者情報。
 */
export interface getReviewForAppWatcherItemAuthor {
  /**
   * ユーザーのSteamID
   */
  steamid: string
  /**
   * ユーザーが所有するゲーム数
   */
  num_games_owned: number
  /**
   * ユーザーが投稿したレビュー数
   */
  num_reviews: number
  /**
   * ユーザーの対象アプリの通算プレイ時間
   */
  playtime_forever: number
  /**
   * ユーザーの対象アプリの直近2週間のプレイ時間
   */
  playtime_last_two_weeks: number
  /**
   * ユーザーの対象アプリのレビュー記載時点のプレイ時間
   */
  playtime_at_review: number
  /**
   * ユーザーの最終プレイ時間(unixタイムスタンプ)
   */
  last_played: number
}
