<template>
  <div>
    <div
      v-if="data.voted_up"
      class="pa-4 body-1 rounded-t-lg positive-review-bg"
    >
      <v-row>
        <v-col cols="9" class="py-0"> 肯定的レビュー </v-col>
        <v-col cols="3" class="py-0 text-right">
          <v-icon small class="mr-2">fas fa-thumbs-up</v-icon>
        </v-col>
      </v-row>
    </div>
    <div v-else class="pa-4 body-1 rounded-t-lg negative-review-bg">
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
import { getReviewForAppWatcherItem } from '~/interface/api/getReviewForAppWatcher'

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
  private data?: getReviewForAppWatcherItem
}
</script>

<style lang="sass" scoped>
.positive-review-bg
  background-color: $positive-review-color
.negative-review-bg
  background-color: $negative-review-color
</style>
