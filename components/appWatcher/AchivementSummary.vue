<template>
  <v-card>
    <v-card-title class="title">実績取得比率</v-card-title>
    <v-card-subtitle class="caption">
      このアプリの実績の全ユーザー取得比率が見れます。<br />
      実績IDがどの実績を指すかについては
      <a :href="steamDbUrl" target="_blank" class="text-decoration-none"
        ><v-icon x-small class="mx-1">fas fa-external-link-alt</v-icon>
        SteamDB
      </a>
      を参照してください。
    </v-card-subtitle>
    <v-card-text>
      <!-- データ取得中 -->
      <api-wrapper :fetch-state="$fetchState">
        <template #data>
          <v-data-table
            :headers="headers"
            :items="data"
            :items-per-page="10"
            :search="search"
            class="elevation-1"
            :footer-props="footerProps"
            no-data-text="このアプリには実績がありません。"
            no-results-text="該当する実績はありません。"
          >
            <template v-slot:top>
              <v-container>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="検索"
                  hint="実績ID、比率で計算できます"
                  persistent-hint
                />
              </v-container>
            </template>
          </v-data-table>
        </template>
      </api-wrapper>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import ApiWrapper from '@/components/common/api/ApiWrapper.vue'

import { appWatcherModule } from '@/store/modules/appWatcherModule'
import { dataModule } from '@/store/modules/dataModule'
import MathUtil from '@/utils/mathUtil'

/**
 * 実績取得比率一覧。
 */
@Component({
  components: {
    ApiWrapper,
  },
})
export default class AchivementSummary extends Vue {
  /**
   * APIデータを格納。
   */
  private data: any = []

  /**
   * DataTableのヘッダー。
   */
  private headers = [
    {
      text: '実績ID',
      value: 'name',
    },
    {
      text: '取得比率(%)',
      value: 'percent',
    },
  ]

  /**
   * DataTableの検索ボックステキスト。
   */
  private search = ''

  /**
   * DataTableのFooter設定。
   */
  private footerProps = {
    // 最終ページと先頭ページへのアンカーを表示
    showFirstLastPage: true,
    // 現在のページ数を表示
    showCurrentPage: true,
    // 表示件数の選択リスト
    itemsPerPageOptions: [5, 10, 20, 50],
    // 「表示件数」の説明欄
    itemsPerPageText: '表示件数',
    // 先頭ページへのアンカーアイコン
    firstIcon: 'fas fa-angle-double-left',
    // 最終ページへのアンカーアイコン
    lastIcon: 'fas fa-angle-double-right',
    // 前ページへのアンカーアイコン
    prevIcon: 'fas fa-angle-left',
    // 次ページへのアンカーアイコン
    nextIcon: 'fas fa-angle-right',
  }

  /**
   * 対象アプリのSteamDbへのURL。
   */
  private steamDbUrl = ''

  mounted() {
    this.steamDbUrl = `https://steamdb.info/app/${dataModule.currentAppId.appId}/stats/`
  }

  async fetch() {
    const response = await appWatcherModule.getGlobalAchievementPercentagesForApp(
      dataModule.currentAppId.appId
    )

    // データが存在=実績データが存在するゲームであすれば格納
    if (Object.keys(response).length !== 0) {
      this.data = response.achievementpercentages.achievements

      // 取得比率のデータを四捨五入しておく
      this.data = this.data.map((e: any) => {
        const tmp = {
          name: e.name,
          percent: MathUtil.orgRound(e.percent as number, 1000),
        }
        return tmp
      })
    }
  }
}
</script>
