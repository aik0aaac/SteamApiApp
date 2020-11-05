<template>
  <div class="caption">
    <div>MOD公開: {{ convertTimestampToDateTime(data.time_created) }}</div>
    <div>最終更新: {{ convertTimestampToDateTime(data.time_updated) }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import DateTimeUtil from '@/utils/dateTimeUtil'

/**
 * レビュワー情報。
 */
@Component({
  components: {},
})
export default class ModDate extends Vue {
  /**
   * レビューデータ。
   */
  @Prop({ default: {} })
  private data: any

  /**
   * 指定したTimeStampを日付&時間に変更。
   */
  private convertTimestampToDateTime(timestamp: number) {
    return DateTimeUtil.convertTimestampToDateTime(timestamp)
  }
}
</script>
