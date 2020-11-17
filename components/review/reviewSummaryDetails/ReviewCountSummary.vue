<template>
  <v-row>
    <v-col cols="12" class="body-1 py-0">
      <!-- レビュー総数 -->
      <div class="d-inline mr-4">全{{ data.total_reviews }}件のレビュー:</div>
      <!-- 肯定的レビュー数 -->
      <div class="d-inline caption mr-2 positive-review-font-color">
        <v-icon class="positive-review-font-color" x-small
          >fas fa-thumbs-up</v-icon
        >
        {{ data.total_positive }}件 ({{ positiveReviewPercentage }}%)
      </div>
      <!-- 否定的レビュー数 -->
      <div class="d-inline caption mr-2 negative-review-font-color">
        <v-icon class="negative-review-font-color" x-small
          >fas fa-thumbs-down</v-icon
        >
        {{ data.total_negative }}件 ({{ negativeReviewPercentage }}%)
      </div>
    </v-col>

    <!-- レビュー比率図 -->
    <v-col :cols="positiveReviewRatio" class="pr-0 py-1">
      <div class="body-2 pa-2 positive-review-bg"></div>
    </v-col>
    <v-col :cols="negativeReviewRatio" class="pl-0 py-1">
      <div class="body-2 pa-2 negative-review-bg"></div>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import MathUtil from '@/utils/mathUtil'
import { getReviewForAppWatcherSummary } from '~/interface/api/getReviewForAppWatcher'

/**
 * ニュースサマリ概要。
 */
@Component({
  components: {},
})
export default class ReviewCountSummary extends Vue {
  /**
   * ニュース概要データ。
   */
  @Prop({ default: {} })
  private data?: getReviewForAppWatcherSummary

  /**
   * 肯定的な評価のパーセンテージ。
   */
  private get positiveReviewPercentage() {
    if (this.data === undefined) return 0
    return MathUtil.orgRound(
      (this.data.total_positive / this.data.total_reviews) * 100,
      100
    )
  }

  /**
   * 肯定的な評価のパーセンテージ。
   */
  private get negativeReviewPercentage() {
    if (this.data === undefined) return 0
    return MathUtil.orgRound(
      (this.data.total_negative / this.data.total_reviews) * 100,
      100
    )
  }

  /**
   * 肯定的な評価の12分割比率。
   */
  private get positiveReviewRatio() {
    if (this.data === undefined) return 6
    const totalReviewOneRatio = this.data.total_reviews / 12
    return MathUtil.orgRound(this.data.total_positive / totalReviewOneRatio, 1)
  }

  /**
   * 否定的な評価の12分割比率。
   * 四捨五入した時に、肯定的な評価比率+否定的な評価比率=12を超えない様、肯定的な評価比率から算出する。
   */
  private get negativeReviewRatio() {
    return 12 - this.positiveReviewRatio
  }
}
</script>

<style lang="sass" scoped>
.positive-review-bg
  background-color: $positive-review-color
.negative-review-bg
  background-color: $negative-review-color
.positive-review-font-color
  color: $positive-review-color
.negative-review-font-color
  color: $negative-review-color
</style>
