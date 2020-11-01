<template>
  <div>
    <div class="body-1 pb-1">レビュワー情報</div>
    <div class="caption">
      <div>
        通算プレイ時間:
        {{ convertTimeToHour(data.author.playtime_forever) }}時間
      </div>
      <div>
        レビュー投稿時プレイ時間:
        {{ convertTimeToHour(data.author.playtime_at_review) }}時間
      </div>
      <div>
        最終プレイ: {{ convertTimestampToDateTime(data.author.last_played) }}
      </div>
      <div v-if="!summaryMode">
        ゲーム保有数: {{ data.author.num_games_owned }}個
      </div>
      <div v-if="!summaryMode">
        投稿レビュー数: {{ data.author.num_reviews }}件
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import DateTimeUtil from '@/utils/dateTimeUtil'
import MathUtil from '@/utils/mathUtil'

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

  /**
   * 指定した分数を時間単位に変更。
   */
  private convertTimeToHour(time: number) {
    return MathUtil.orgRound(DateTimeUtil.convertTimeToHour(time), 100)
  }
}
</script>
