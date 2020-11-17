/* eslint-disable camelcase */
/**
 * 指定アプリのニュース情報(生データ)。
 */
export interface getNewsForAppRaw {
  appnews: getNewsForApp
}

/**
 * 指定アプリのニュース情報。
 * https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/
 */
export interface getNewsForApp {
  /**
   * アプリID。
   */
  appId: number

  /**
   * ニュース情報。
   */
  newsitems: Array<getNewsForAppItem>

  /**
   * 記事数。
   */
  count: number
}

/**
 * ニュース情報。
 */
export interface getNewsForAppItem {
  /**
   * そのニュースの固有ID
   */
  gid: string
  /**
   * ニュースタイトル
   */
  title: string
  /**
   * そのニュースへのリンク
   */
  url: string
  /**
   * 指定されたURLが外部Webサイトへのリンクかどうか
   * Steamストアにリンクしている場合はfalse
   */
  is_external_url: boolean
  /**
   * ニュース執筆者
   */
  author: string
  /**
   * ニュース本文
   */
  contents: string
  /**
   * ニュースのカテゴリラベル(Community AnnouncementsだったりThe Loadoutだったり…多分投稿者が任意で決めれる)
   */
  feedlabel: string
  /**
   * 投稿日(unixタイムスタンプ形式)
   */
  date: number
  /**
   * ニュースアイテムのソースを説明する内部タグ
   */
  feedname: string
  /**
   * フィードの種類(数値), 各数値が何を示すかは謎
   */
  feed_type: number
  /**
   * アプリID
   */
  appid: number
  /**
   * タグ(patchnotes, mod_reviewed…多分投稿者が任意で決めれる)
   */
  tags: Array<string>
}
