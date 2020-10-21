<template>
  <div>
    <div class="title">現在プレイしている人数</div>
    <div class="caption">
      Steamに接続されている人しか取得不可(オフラインでやってる人は取得できない)
    </div>

    {{ data }}
    <!-- データ取得中 -->
    <api-loading
      v-if="$fetchState.pending"
      :skelton-loader-row-num="1"
      :skelton-loader-col-num="1"
      skelton-type="card-action"
    />
    <!-- データ取得失敗 -->
    <api-error v-else-if="$fetchState.error" />
    <!-- データ表示 -->
    <div v-else>aaa</div>
    <!-- TODO: アクティブユーザー数のUIは人のアイコンをたくさん並べて視覚的に分かりやすくしよう
 -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import axios from 'axios'

import { appWatcherModule } from '@/store/modules/appWatcher'

import ApiLoading from '@/components/common/api/ApiLoading.vue'
import ApiError from '@/components/common/api/ApiError.vue'
/**
 * App情報の概要出力。
 */
@Component({
  components: {
    ApiLoading,
    ApiError,
  },
})
export default class NowPlayerNum extends Vue {
  /**
   *  登録中のアプリID。
   */
  get appId() {
    return appWatcherModule.appId
  }

  data = {}

  async fetch() {
    this.data = await axios.get(
      `https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appId=${this.appId}`
    )
  }
}
</script>
