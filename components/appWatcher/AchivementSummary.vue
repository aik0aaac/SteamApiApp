<template>
  <v-card>
    <v-card-title class="title">実績取得比率</v-card-title>
    <v-card-text>
      <!-- データ取得中 -->
      <api-wrapper :fetch-state="$fetchState">
        <template #data>
          <!-- 実績が存在しない場合 -->
          <div v-if="isNoAchivementApp">
            <div class="body-2">このアプリには実績がありません。</div>
          </div>
          <div v-else>
            <v-data-table
              :headers="headers"
              :items="data.achievementpercentages.achievements"
              :items-per-page="10"
              :search="search"
              class="elevation-1"
              :footer-props="footerProps"
            >
              <template v-slot:top>
                <v-container>
                  <div class="caption">
                    実績IDがどの実績を指すかについては<a
                      :href="steamDbUrl"
                      target="_blank"
                      class="text-decoration-none"
                      ><v-icon x-small class="mx-1"
                        >fas fa-external-link-alt</v-icon
                      >SteamDB</a
                    >を参照してください。
                  </div>
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
          </div>
        </template>
      </api-wrapper>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import ApiWrapper from '@/components/common/api/ApiWrapper.vue'

import { appWatcherModule } from '@/store/modules/appWatcher'

/**
 * App情報の概要出力。
 */
@Component({
  components: {
    ApiWrapper,
  },
})
export default class AchivementSummary extends Vue {
  /**
   *  登録中のアプリID。
   */
  private get appId() {
    return appWatcherModule.appId
  }

  /**
   * APIデータを格納。
   */
  private data: any = null

  /**
   * 実績が存在しないアプリかどうか。
   * APIの返却値が`undefined`であれば「実績が存在しないアプリ」として判定する。
   */
  private isNoAchivementApp: boolean = true

  /**
   * DataTableのヘッダー。
   */
  private headers = [
    {
      text: '実績ID',
      value: 'name',
    },
    {
      text: '取得比率',
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
    this.steamDbUrl = `https://steamdb.info/app/${this.appId}/stats/`
  }

  async fetch() {
    const response = await appWatcherModule.getGlobalAchievementPercentagesForApp()
    if (Object.keys(response).length !== 0) {
      this.isNoAchivementApp = false
      this.data = response
      console.log(this.isNoAchivementApp)
    }
  }
}
</script>
