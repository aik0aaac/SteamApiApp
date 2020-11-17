<template>
  <div class="mb-4 pa-2">
    <review-evaluation-summary :data="data" class="mb-4" />
    <review-count-summary :data="data" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import ReviewEvaluationSummary from './ReviewEvaluationSummary.vue'
import ReviewCountSummary from './ReviewCountSummary.vue'
import { getReviewForAppWatcherSummary } from '~/interface/api/getReviewForAppWatcher'

/**
 * レビューサマリ概要。
 */
@Component({
  components: {
    ReviewEvaluationSummary,
    ReviewCountSummary,
  },
})
export default class ReviewSummaryDetails extends Vue {
  /**
   * レビュー概要データ。
   */
  @Prop({ default: {} })
  private data?: getReviewForAppWatcherSummary
}
</script>
