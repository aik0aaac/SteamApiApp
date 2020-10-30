<template>
  <v-row>
    <v-col cols="8" class="caption pt-0">
      <div class="body-1 pb-1">レビュワー情報</div>
      <div>通算プレイ時間: {{ data.author.playtime_forever }}時間</div>
      <div>レビュー投稿時: {{ data.author.playtime_at_review }}時間</div>
      <div>
        最終プレイ: {{ convertTimestampToDateTime(data.author.last_played) }}
      </div>
      <div v-if="!summaryMode">
        ゲーム保有数: {{ data.author.num_games_owned }}個
      </div>
      <div v-if="!summaryMode"></div>
      投稿レビュー数: {{ data.author.num_reviews }}件
    </v-col>
    <v-col cols="4">
      <v-icon v-if="data.voted_up" x-large>fas fa-thumbs-up</v-icon>
      <v-icon v-else x-large>fas fa-thumbs-down</v-icon>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import DateTimeUtil from '@/utils/dateTimeUtil'

/**
 * レビュワー情報。
 */
@Component({
  components: {},
})
export default class ReviewerInfo extends Vue {
  /**
   * レビューデータ。
   */
  @Prop({ default: {} })
  private data: any

  /**
   * 概要モード。
   */
  @Prop({ default: false })
  private summaryMode?: boolean

  /**
   * 指定したTimeStampを日付&時間に変更。
   */
  private convertTimestampToDateTime(timestamp: number) {
    return DateTimeUtil.convertTimestampToDateTime(timestamp)
  }
}
</script>
