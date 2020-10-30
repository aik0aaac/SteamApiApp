<template>
  <v-card outlined class="mb-8">
    <v-card-title>
      <!-- レビュワー情報 -->
      <reviewer-info class="mb-2" :data="data" :summary-mode="true" />

      <!-- レビュー概要メイン情報 -->
      <review-summary-main :data="data" />

      <!-- レビュー概要サブ情報 -->
      <review-summary-sub class="mb-2" :data="data" />
    </v-card-title>

    <v-card-text>
      <!-- レビュー内容 -->
      <review-contents class="mb-2" :data="data" :summary-mode="true" />

      <!-- レビュー内容 -->
      <developer-response
        v-if="data.developer_response !== undefined"
        :data="data"
        :summary-mode="true"
      />
    </v-card-text>

    <!-- アクションボタン -->
    <v-card-actions class="mt-2">
      <v-row>
        <v-col cols="12" class="pb-0">
          <!-- レビュー詳細 -->
          <review-details :data="data" />
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import ReviewerInfo from '@/components/appWatcher/review/parts/ReviewerInfo.vue'
import ReviewSummaryMain from '@/components/appWatcher/review/parts/ReviewSummaryMain.vue'
import ReviewSummarySub from '@/components/appWatcher/review/parts/ReviewSummarySub.vue'
import ReviewContents from '@/components/appWatcher/review/parts/ReviewContents.vue'
import DeveloperResponse from '@/components/appWatcher/review/parts/DeveloperResponse.vue'
import ReviewDetails from '@/components/appWatcher/review/ReviewDetails.vue'

/**
 * ニュース概要。
 */
@Component({
  components: {
    ReviewerInfo,
    ReviewSummaryMain,
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
  private data: any
}
</script>
