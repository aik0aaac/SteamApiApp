<template>
  <div class="caption">
    <div>
      レビュー投稿: {{ convertTimestampToDateTime(data.timestamp_created) }}
    </div>
    <div>
      最終更新: {{ convertTimestampToDateTime(data.timestamp_updated) }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import DateTimeUtil from '@/utils/dateTimeUtil'
import { getReviewForAppWatcherItem } from '~/interface/api/getReviewForAppWatcher'

/**
 * レビュワー情報。
 */
@Component({
  components: {},
})
export default class ReviewDate extends Vue {
  /**
   * レビューデータ。
   */
  @Prop({ default: {} })
  private data?: getReviewForAppWatcherItem

  /**
   * 指定したTimeStampを日付&時間に変更。
   */
  private convertTimestampToDateTime(timestamp: number) {
    return DateTimeUtil.convertTimestampToDateTime(timestamp)
  }
}
</script>
