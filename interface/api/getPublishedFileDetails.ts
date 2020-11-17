/* eslint-disable camelcase */
/**
 * 指定したSharedFileのデータ(生データ)。
 */
export interface getPublishedFileDetailsRaw {
  response: getPublishedFileDetails
}

/**
 * 指定したSharedFileのデータ。
 */
export interface getPublishedFileDetails {
  /**
   * 取得件数
   */
  result: number
  /**
   * 取得件数
   */
  resultcount: number
  /**
   * SharedFile情報。
   */
  publishedfiledetails: Array<getPublishedFileDetailsItem>
}

/**
 * SharedFile情報。
 */
export interface getPublishedFileDetailsItem {
  /**
   * 取得したコンテンツのID
   */
  publishedfileid: string
  /**
   * 謎値, 1が格納されるのを確認済み
   */
  result: number
  /**
   * 作成者のSteamId
   */
  creator: string
  /**
   * 作成対象のアプリ
   */
  creator_app_id: number
  /**
   * 謎値, ※appidと同一値
   */
  consumer_app_id: number
  /**
   * スクリーンショット、画像、ガイドであれば画像ファイル名が格納
   */
  filename: string
  /**
   * 画像ファイルのサイズ
   */
  file_size: number
  /**
   * 画像ファイルのURLリンク
   */
  file_url: string
  /**
   * 謎値
   */
  hcontent_file: number
  /**
   * プレビュー画像のURLリンク ※動画は空文字が格納
   */
  preview_url: string
  /**
   * 謎値
   */
  hcontent_preview: number
  /**
   * コンテンツのタイトル
   */
  title: string
  /**
   * コンテンツの説明欄
   */
  description: string
  /**
   * コンテンツ作成日(unixタイムスタンプ形式)
   */
  time_created: number
  /**
   * コンテンツ更新日(unixタイムスタンプ形式)
   */
  time_updated: number
  /**
   * 謎値, 0が格納されるのを確認済み
   */
  visibility: number
  /**
   * (恐らく)BANされているかどうか, 0=BANされていない?
   */
  banned: number
  /**
   * (恐らく)BANされた理由
   */
  ban_reason: string
  /**
   * 現状のサブスクライブ数, ワークショップアイテム以外には0が格納
   */
  subscriptions: number
  /**
   * 現状のお気に入り数
   */
  favorited: number
  /**
   * 累計サブスクライブ数
   */
  lifetime_subscriptions: number
  /**
   * 累計お気に入り数
   */
  lifetime_favorited: number
  /**
   * ユニーク訪問者数
   */
  views: number
  /**
   * タグ情報
   */
  tags: Array<getPublishedFileDetailsItemTag>
}

/**
 * タグ情報
 */
export interface getPublishedFileDetailsItemTag {
  /**
   * タグ内容
   */
  tag: string
}
