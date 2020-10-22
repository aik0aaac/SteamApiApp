<template>
  <div>
    <div class="title">現在プレイしている人数</div>
    <div class="caption">
      Steamに接続されている人しか取得不可(オフラインでやってる人は取得できない)
    </div>

    <!-- データ取得中 -->
    <api-wrapper :fetch-state="$fetchState">
      <template #data>
        {{ data.player_count }}人
        <!-- TODO: アクティブユーザー数のUIは人のアイコンをたくさん並べて視覚的に分かりやすくしよう
        -->
      </template>
    </api-wrapper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import axios from 'axios'

import ApiWrapper from '@/components/common/api/ApiWrapper.vue'

import { appWatcherModule } from '@/store/modules/appWatcher'
import { IGetNumberOfCurrentPlayers } from '@/data/api/IResponse'

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
  get appId() {
    return appWatcherModule.appId
  }

  /**
   * APIデータを格納。
   */
  data: IGetNumberOfCurrentPlayers | null = null

  async fetch() {
    const rawResponse = await axios.get(
      `https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appId=${this.appId}`
    )
    this.data = rawResponse.data.response as IGetNumberOfCurrentPlayers
  }
}
</script>
