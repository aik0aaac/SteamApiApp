<template>
  <v-card>
    <v-card-title class="title">実績取得比率</v-card-title>
    <v-card-subtitle class="caption">
      このアプリの実績の全ユーザー取得比率が見れます。<br />
      実績IDがどの実績を指すかについては
      <a :href="steamDbUrl" target="_blank" class="text-decoration-none">
        <v-icon x-small class="mx-1">fas fa-external-link-alt</v-icon>
        SteamDB
      </a>
      を参照してください。
    </v-card-subtitle>
    <v-card-text>
      <!-- データ取得中 -->
      <api-wrapper :fetch-state="$fetchState">
        <template #data>
          <achivement-list :data="data" />
        </template>
      </api-wrapper>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ApiWrapper from '@/components/common/api/ApiWrapper.vue'
import AchivementList from '@/components/appWatcher/achivement/AchivementList.vue'

import { appWatcherModule } from '@/store/modules/appWatcherModule'
import { appIdDataModule } from '@/store/modules/dataModule/appIdDataModule'
import MathUtil from '@/utils/mathUtil'
import {
  getGlobalAchievementPercentagesForApp,
  getGlobalAchievementPercentagesForAppItem,
} from '~/interface/api/getGlobalAchievementPercentagesForApp'

/**
 * 実績取得比率一覧概要。
 */
@Component({
  components: {
    ApiWrapper,
    AchivementList,
  },
})
export default class AchivementSummary extends Vue {
  /**
   * APIデータを格納。
   */
  private data: Array<getGlobalAchievementPercentagesForAppItem> = []

  /**
   * 対象アプリのSteamDbへのURL。
   */
  private steamDbUrl = ''

  mounted() {
    this.steamDbUrl = `https://steamdb.info/app/${appIdDataModule.currentAppId.appId}/stats/`
  }

  async fetch() {
    const response: getGlobalAchievementPercentagesForApp = await appWatcherModule.getGlobalAchievementPercentagesForApp(
      appIdDataModule.currentAppId.appId
    )

    // データが存在=実績データが存在するゲームであすれば格納
    if (response) {
      this.data = response.achievements

      // 取得比率のデータを四捨五入しておく
      this.data = this.data.map(
        (e: getGlobalAchievementPercentagesForAppItem) => {
          const tmp = {
            name: e.name,
            percent: MathUtil.orgRound(e.percent, 1000),
          }
          return tmp
        }
      )
    }
  }
}
</script>
