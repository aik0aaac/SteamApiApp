<template>
  <div>
    <div
      v-if="data.voted_up"
      :class="`${positiveReviewBackgroundColor} pa-4 body-1 rounded-t-lg`"
    >
      <v-row>
        <v-col cols="9" class="py-0"> 肯定的レビュー </v-col>
        <v-col cols="3" class="py-0 text-right">
          <v-icon small class="mr-2">fas fa-thumbs-up</v-icon>
        </v-col>
      </v-row>
    </div>
    <div
      v-else
      :class="`${negativeReviewBackgroundColor} pa-4 body-1 rounded-t-lg`"
    >
      <v-row>
        <v-col cols="9" class="py-0"> 否定的レビュー </v-col>
        <v-col cols="3" class="py-0 text-right">
          <v-icon small class="mr-2">fas fa-thumbs-down</v-icon>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import Settings from '@/config/settings'

/**
 * レビュワー情報。
 */
@Component({
  components: {},
})
export default class ReviewPosiNega extends Vue {
  /**
   * レビューデータ。
   */
  @Prop({ default: {} })
  private data: any

  /**
   * 肯定的な評価時の背景色。
   */
  private positiveReviewBackgroundColor = Settings.positiveReviewBackgroundColor

  /**
   * 否定的な評価時の背景色。
   */
  private negativeReviewBackgroundColor = Settings.negativeReviewBackgroundColor
}
</script>
