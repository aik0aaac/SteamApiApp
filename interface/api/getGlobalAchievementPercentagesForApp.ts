/**
 * 指定したアプリの実績取得比率(生データ)。
 */
export interface getGlobalAchievementPercentagesForAppRaw {
  achievementpercentages: getGlobalAchievementPercentagesForApp
}

/**
 * 指定したアプリの実績取得比率。
 */
export interface getGlobalAchievementPercentagesForApp {
  achievements: Array<getGlobalAchievementPercentagesForAppItem>
}

/**
 * 指定したアプリの実績取得比率アイテム。
 */
export interface getGlobalAchievementPercentagesForAppItem {
  /**
   * 実績名。
   */
  name: string

  /**
   * 実績取得比率(実績を獲得したユーザー/そのゲームをプレイした全ユーザー)。
   */
  percent: number
}
