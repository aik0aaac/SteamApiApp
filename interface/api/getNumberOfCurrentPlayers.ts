/* eslint-disable camelcase */
/**
 * 指定したアプリのアクティブプレイヤー数(生データ)。
 * https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/
 */
export interface getNumberOfCurrentPlayersRaw {
  response: getNumberOfCurrentPlayers
}

/**
 * 指定したアプリのアクティブプレイヤー数。
 * https://aik0aaat.hatenadiary.jp/entry/2020/10/10/202049#GetNumberOfCurrentPlayers-%E3%82%A2%E3%82%AF%E3%83%86%E3%82%A3%E3%83%96%E3%83%97%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC%E6%95%B0%E3%82%92%E8%A1%A8%E7%A4%BA
 */
export interface getNumberOfCurrentPlayers {
  /**
   * 現時点でのプレイ人数。
   */
  player_count: number

  /**
   * 謎値。
   */
  result: true
}
