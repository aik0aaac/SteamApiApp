<template>
  <v-card>
    <v-card-text class="title pb-0">現在プレイ中の人数</v-card-text>
    <v-card-text>
      <api-wrapper :fetch-state="$fetchState">
        <template #data>
          <!-- プレイ人数 -->
          <div class="headline">{{ data.player_count }}人</div>
          <!-- 注意文 -->
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

import { appIdDataModule } from '@/store/modules/dataModule/appIdDataModule'
import { appWatcherModule } from '@/store/modules/appWatcherModule'

/**
 * 現在プレイ中の人数。
 */
@Component({
  components: {
    ApiWrapper,
  },
})
export default class NowPlayerNum extends Vue {
  /**
   * APIデータを格納。
   */
  private data: any = null

  async fetch() {
    this.data = await appWatcherModule.getNumberOfCurrentPlayers(
      appIdDataModule.currentAppId.appId
    )
  }
}
</script>
