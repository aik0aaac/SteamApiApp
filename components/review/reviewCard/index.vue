<template>
  <v-card outlined class="mb-8 rounded-t-lg">
    <review-posi-nega :data="data" />

    <v-card-title>
      <!-- レビュー概要メイン情報 -->
      <review-date :data="data" />

      <!-- レビュー概要サブ情報 -->
      <review-summary-sub class="mb-2" :data="data" />

      <!-- レビュワー情報 -->
      <!-- <reviewer-info class="mb-2" :data="data" :summary-mode="true" /> -->
    </v-card-title>

    <v-card-text>
      <!-- レビュー内容 -->
      <review-contents class="mb-2" :data="data" :summary-mode="true" />

      <!-- 開発元からのメッセージ -->
      <developer-response
        v-if="data.developer_response !== undefined"
        :data="data"
        :summary-mode="true"
      />
      <!-- レビューに対する反応 -->
      <review-evaluation :data="data" />

      <!-- アクションボタン -->
      <v-card-actions class="mt-2">
        <v-row>
          <v-col cols="12" class="pb-0">
            <!-- レビュー詳細 -->
            <review-details :data="data" />
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import ReviewDetails from '@/components/review/reviewDetails/index.vue'
import ReviewPosiNega from './ReviewPosiNega.vue'
import ReviewerInfo from './ReviewerInfo.vue'
import ReviewDate from './ReviewDate.vue'
import ReviewEvaluation from './ReviewEvaluation.vue'
import ReviewSummarySub from './ReviewSummarySub.vue'
import ReviewContents from './ReviewContents.vue'
import DeveloperResponse from './DeveloperResponse.vue'
import { getReviewForAppWatcherItem } from '~/interface/api/getReviewForAppWatcher'

/**
 * ニュース概要。
 */
@Component({
  components: {
    ReviewPosiNega,
    ReviewerInfo,
    ReviewDate,
    ReviewEvaluation,
    ReviewSummarySub,
    ReviewContents,
    DeveloperResponse,
    ReviewDetails,
  },
})
export default class NewsCard extends Vue {
  /**
   * レビューデータ。
   */
  @Prop({ default: {} })
  private data?: getReviewForAppWatcherItem
}
</script>
