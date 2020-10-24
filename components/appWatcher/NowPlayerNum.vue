<template>
  <v-card>
    <v-card-text class="title pb-0">現在プレイ中の人数</v-card-text>
    <v-card-text>
      <!-- データ取得中 -->
      <api-wrapper :fetch-state="$fetchState">
        <template #data>
          <div class="headline">{{ data.player_count }}人</div>
          <!-- TODO: アクティブユーザー数のUIは人のアイコンをたくさん並べて視覚的に分かりやすくしよう
        -->
          <div class="caption">
            ※上記はオンラインかつSteamに接続中のプレイ人口です。<br />
            オフラインもしくはSteam未接続のプレイ人口は含まれません。
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
export default class NowPlayerNum extends Vue {
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

  async fetch() {
    this.data = await appWatcherModule.getNumberOfCurrentPlayers()
  }
}
</script>
