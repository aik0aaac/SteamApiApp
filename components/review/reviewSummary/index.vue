<template>
  <v-card>
    <v-card-title class="title">レビューサマリ</v-card-title>
    <v-card-subtitle class="caption">
      レビューグラフ、直近{{
        reviewRecentDays
      }}日間で最も参考になった日本語レビュー最大10件を見れます。<br />
      <!-- TODO: ReviewWatcherへのリンク -->
      もっと多くのレビュー、日本語以外のレビューを見たい場合は
      <a href="/" class="text-decoration-none"> こちら </a>
      からご覧ください。
    </v-card-subtitle>

    <v-card-text>
      <api-wrapper :fetch-state="$fetchState">
        <template #data>
          <!-- レビュー一覧 -->
          <review-summary-details :data="reviewData.query_summary" />

          <v-divider />
          <v-divider />

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

import ReviewSummaryDetails from '@/components/review/reviewSummaryDetails/index.vue'
import ReviewHistogram from '@/components/review/reviewHistogram/index.vue'
import ReviewCard from '@/components/review/reviewCard/index.vue'

import { appWatcherModule } from '@/store/modules/appWatcherModule'
import { appIdDataModule } from '@/store/modules/dataModule/appIdDataModule'

import Settings from '~/config/settings'

/**
 * レビュー概要。
 */
@Component({
  components: {
    ApiWrapper,
    ReviewSummaryDetails,
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
      appIdDataModule.currentAppId.appId
    )
    this.reviewData = await appWatcherModule.getReviewForAppWatcher(
      appIdDataModule.currentAppId.appId
    )
  }

  /**
   * appWatcher > レビューサマリー欄にて「最近」と指定する日数。
   */
  private reviewRecentDays = Settings.reviewRecentDays
}
</script>
