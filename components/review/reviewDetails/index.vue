<template>
  <modal-template
    open-button-text="詳細"
    open-button-icon="fas fa-eye"
    open-button-color="primary"
  >
    <template #main>
      <v-card outlined class="mb-8">
        <review-posi-nega :data="data" />

        <v-card-title>
          <v-row>
            <v-col cols="12" sm="6" class="py-0">
              <!-- レビュワー情報 -->
              <reviewer-info class="mb-2" :data="data" />
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <!-- レビュー概要メイン情報 -->
              <review-date :data="data" />
            </v-col>
            <v-col cols="12" sm="6" class="py-0">
              <!-- レビュー概要サブ情報 -->
              <review-summary-sub class="mb-2" :data="data" />
            </v-col>
          </v-row>
        </v-card-title>

        <v-card-text>
          <!-- レビュー内容 -->
          <review-contents class="mb-2" :data="data" />

          <!-- レビュー内容 -->
          <developer-response
            v-if="data.developer_response !== undefined"
            :data="data"
          />

          <review-evaluation class="mt-6" :data="data" />
        </v-card-text>
      </v-card>
    </template>
  </modal-template>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import ModalTemplate from '@/components/common/template/ModalTemplate.vue'
import ReviewPosiNega from '../reviewCard/ReviewPosiNega.vue'
import ReviewDate from '../reviewCard/ReviewDate.vue'
import ReviewEvaluation from '../reviewCard/ReviewEvaluation.vue'
import ReviewSummarySub from '../reviewCard/ReviewSummarySub.vue'
import ReviewContents from '../reviewCard/ReviewContents.vue'
import DeveloperResponse from '../reviewCard/DeveloperResponse.vue'
import ReviewerInfo from '../reviewCard/ReviewerInfo.vue'

/**
 * レビュー詳細。
 */
@Component({
  components: {
    ModalTemplate,
    ReviewPosiNega,
    ReviewerInfo,
    ReviewDate,
    ReviewEvaluation,
    ReviewSummarySub,
    ReviewContents,
    DeveloperResponse,
  },
})
export default class ReviewDetails extends Vue {
  /**
   * レビューデータ。
   */
  @Prop({ default: {} })
  private data: any
}
</script>
