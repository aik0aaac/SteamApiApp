<template>
  <v-row>
    <!-- レビュースコア説明 -->
    <v-col cols="12" class="pt-0 pb-1">
      <span class="headline mr-2">
        {{ localeReviewScoreDescJapanese }}
      </span>
    </v-col>

    <!-- レビュースコア数を★で表示 -->
    <v-col cols="12" class="py-0">
      <span class="caption">
        <v-icon
          v-for="(reviewScore, $index) in data.review_score"
          :key="$index"
          x-small
        >
          fas fa-star
        </v-icon>
        {{ data.review_score }}
      </span>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

/**
 * ニュースサマリ概要。
 */
@Component({
  components: {},
})
export default class ReviewEvaluationSummary extends Vue {
  /**
   * ニュース概要データ。
   */
  @Prop({ default: {} })
  private data: any

  /**
   * レビュースコア説明を日本語に翻訳。
   */
  private get localeReviewScoreDescJapanese() {
    switch (this.data.review_score_desc) {
      case 'Very Positive':
        return '非常に好評'
      default:
        return this.data.review_score_desc
    }
  }
}
</script>
