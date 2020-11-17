/**
 * Steam APIリクエスト用の情報を詰め込んだClass。
 */
export default class ApiRequest {
  /**
   * コンストラクタ。BFF APIURLを生成する。
   * @param protocol HTTPプロトコル名。
   * @param domain ドメイン名。
   * @param type GETリクエストであれば'get', POSTリクエストであれば'post'を指定。
   */
  constructor(protocol: string, domain: string, type: 'get' | 'post') {
    // BFF APIURLを作成
    this.getRequestViaBff = `${protocol}//${domain}/api/${type}?apiUrl=`
  }

  /**
   * BFF APIURL。
   * Nuxt.jsのServerMiddlewareのパスを生成。
   */
  public getRequestViaBff = ''

  /**
   * SteamAPIのベースとなるURL。
   */
  private steamApiBaseUrl = 'https://api.steampowered.com'

  /**
   * SteamAPIのベースとなるURL。
   */
  private steamApiReviewUrl = 'https://store.steampowered.com'

  /**
   * 指定したアプリのプレイヤー数を取得するAPIURL。
   * @param appId アプリID。
   */
  public getNumberOfCurrentPlayers(appId: string): string {
    return `${this.steamApiBaseUrl}/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appId=${appId}`
  }

  /**
   * 指定したアプリのニュースリリースを取得するAPIURL。
   * @param appId アプリID。
   */
  public getNews(appId: string): string {
    return `${this.steamApiBaseUrl}/ISteamNews/GetNewsForApp/v2/?appid=${appId}`
  }

  /**
   * 指定したアプリのレビューを取得するAPIURL。
   * @param appId アプリID。
   */
  public getReview(appId: string): string {
    return `${this.steamApiReviewUrl}/appreviews/${appId}?json=1`
  }

  /**
   * 指定したアプリのレビューヒストグラムを取得するAPIURL。
   * @param appId アプリID。
   */
  public getReviewHistogram(appId: string): string {
    return `${this.steamApiReviewUrl}/appreviewhistogram/${appId}`
  }

  /**
   * 指定したアプリの実績取得比率を取得するAPIURL。
   * @param appId アプリID。
   */
  public getGlobalAchievementPercentagesForApp(appId: string): string {
    return `${this.steamApiBaseUrl}/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v2/?gameid=${appId}`
  }

  /**
   * 指定したSharedFileデータを取得するAPIURL。
   */
  public getPublishedFileDetails(): string {
    return `${this.steamApiBaseUrl}/ISteamRemoteStorage/GetPublishedFileDetails/v1/`
  }
}
