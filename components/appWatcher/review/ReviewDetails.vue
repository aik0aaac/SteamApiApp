<template>
  <v-dialog v-model="dialog" width="80vw">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" v-bind="attrs" block v-on="on">
        <v-icon x-small class="mx-1">fas fa-eye</v-icon>
        詳細
      </v-btn>
    </template>

    <v-card outlined class="mb-8">
      <v-card-title>
        <!-- レビュワー情報 -->
        <reviewer-info class="mb-2" :data="data" />

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
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import ReviewerInfo from '@/components/appWatcher/review/parts/ReviewerInfo.vue'
import ReviewSummaryMain from '@/components/appWatcher/review/parts/ReviewSummaryMain.vue'
import ReviewSummarySub from '@/components/appWatcher/review/parts/ReviewSummarySub.vue'
import ReviewContents from '@/components/appWatcher/review/parts/ReviewContents.vue'
import DeveloperResponse from '@/components/appWatcher/review/parts/DeveloperResponse.vue'

/**
 * レビュー詳細。
 */
@Component({
  components: {
    ReviewerInfo,
    ReviewSummaryMain,
    ReviewSummarySub,
    ReviewContents,
    DeveloperResponse,
  },
})
export default class ReviewDetails extends Vue {
  /**
   * ダイアログ開閉状態。
   */
  private dialog = false

  /**
   * レビューデータ。
   */
  @Prop({ default: {} })
  private data: any
}
</script>
