<template>
  <v-card class="mb-8">
    <v-card-title>
      {{ data.review_score }}
      {{ localeReviewScoreDescJapanese }}
      /総合{{ data.total_reviews }}件
    </v-card-title>
    <v-card-text>
      <v-row>
        <v-col cols="6">
          <v-icon large>fas fa-thumbs-up</v-icon>
          {{ data.total_positive }}件
        </v-col>
        <v-col cols="6">
          <v-icon large>fas fa-thumbs-down</v-icon>
          {{ data.total_negative }}件
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

/**
 * ニュースサマリ概要。
 */
@Component({
  components: {},
})
export default class ReviewSummaryDetails extends Vue {
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
