<template>
  <v-row class="body-1">
    <v-col cols="6">
      <div>
        レビュー投稿: {{ convertTimestampToDateTime(data.timestamp_created) }}
      </div>
      <div>
        最終更新: {{ convertTimestampToDateTime(data.timestamp_updated) }}
      </div>
    </v-col>
    <v-col cols="6">
      <div>
        <v-icon>fas fa-thumbs-up</v-icon>
        参考になった: {{ data.votes_up }} ({{
          orgRound(data.weighted_vote_score * 100)
        }}%)
      </div>
      <div>
        <v-icon>fas fa-laugh-squint</v-icon>
        面白い!: {{ data.votes_funny }}
      </div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import MathUtil from '@/utils/mathUtil'

import DateTimeUtil from '@/utils/dateTimeUtil'

/**
 * レビュワー情報。
 */
@Component({
  components: {},
})
export default class ReviewSummaryMain extends Vue {
  /**
   * レビューデータ。
   */
  @Prop({ default: {} })
  private data: any

  /**
   * 指定したTimeStampを日付&時間に変更。
   */
  private convertTimestampToDateTime(timestamp: number) {
    return DateTimeUtil.convertTimestampToDateTime(timestamp)
  }

  /**
   * 指定した数値を%に変換(小数点第2位以降を切り上げ)。
   */
  private orgRound(num: string) {
    return MathUtil.orgRound(parseFloat(num) as number, 100)
  }
}
</script>
