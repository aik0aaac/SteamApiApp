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
  private steamApiBaseUrl = 'https://api.steampowered.com/'
  /**
   * 指定したアプリのプレイヤー数を返却するAPIURL。
   * @param appId アプリID。
   */
  public getNumberOfCurrentPlayers(appId: string): string {
    return `${this.steamApiBaseUrl}/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appId=${appId}`
  }
}
