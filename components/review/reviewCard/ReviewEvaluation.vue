<template>
  <div>
    <!-- コメント数 -->
    <div>コメント数: {{ data.comment_count }}件</div>

    <!-- 参考になった数、面白い数 -->
    <v-row>
      <v-col cols="12" sm="6" class="py-0">
        <v-icon x-small>fas fa-thumbs-up</v-icon>
        参考になった: {{ data.votes_up }}
        <!-- ({{
        orgRound(data.weighted_vote_score * 100)
      }}%) -->
      </v-col>
      <v-col cols="12" sm="6" class="py-0">
        <v-icon x-small>fas fa-laugh-squint</v-icon>
        面白い!: {{ data.votes_funny }}
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import MathUtil from '@/utils/mathUtil'
import { getReviewForAppWatcherItem } from '~/interface/api/getReviewForAppWatcher'

/**
 * レビュワー情報。
 */
@Component({
  components: {},
})
export default class ReviewEvaluation extends Vue {
  /**
   * レビューデータ。
   */
  @Prop({ default: {} })
  private data?: getReviewForAppWatcherItem

  /**
   * 指定した数値を%に変換(小数点第2位以降を切り上げ)。
   */
  private orgRound(num: string) {
    return MathUtil.orgRound(parseFloat(num) as number, 100)
  }
}
</script>
