<template>
  <v-card>
    <v-card-title class="title">レビューサマリ</v-card-title>
    <v-card-subtitle class="caption">
      レビューグラフ、最近の最も参考になったレビュー10件を見れます。<br />
      <!-- TODO: ReviewWatcherへのリンク -->
      もっと多くのレビューを見たい場合は
      <a href="/" class="text-decoration-none"> こちら </a>
      からご覧ください。
    </v-card-subtitle>

    <v-card-text>
      <api-wrapper :fetch-state="$fetchState">
        <template #data>
          <!-- レビュー一覧 -->
          <review-summary-details :data="reviewData.query_summary" />

          <!-- レビューヒストグラム -->
          <review-histogram :data="reviewHistogramData" class="mb-2" />

          <v-row>
            <v-col
              v-for="(item, $index) in reviewData.reviews"
              :key="$index"
              cols="12"
              sm="6"
            >
              <review-card :data="item" />
            </v-col>
          </v-row>
        </template>
      </api-wrapper>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ApiWrapper from '@/components/common/api/ApiWrapper.vue'
import ReviewHistogram from '@/components/appWatcher/review/ReviewHistogram.vue'
import ReviewCard from '@/components/appWatcher/review/ReviewCard.vue'

import { appWatcherModule } from '@/store/modules/appWatcherModule'
import { dataModule } from '@/store/modules/dataModule'

/**
 * レビュー概要。
 */
@Component({
  components: {
    ApiWrapper,
    ReviewHistogram,
    ReviewCard,
  },
})
export default class ReviewSummary extends Vue {
  /**
   * レビューヒストグラムAPIデータを格納。
   */
  private reviewHistogramData: any = null

  /**
   * レビューAPIデータを格納。
   */
  private reviewData: any = null

  async fetch() {
    this.reviewHistogramData = await appWatcherModule.getReviewHistogram(
      dataModule.currentAppId.appId
    )
    this.reviewData = await appWatcherModule.getReviewForAppWatcher(
      dataModule.currentAppId.appId
    )
  }
}
</script>
