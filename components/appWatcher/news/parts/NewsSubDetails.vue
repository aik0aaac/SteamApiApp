<template>
  <div class="caption">
    著者: {{ data.author }}<br />
    投稿日: {{ convertTimestampToDateTime(data.date) }}<br />
    feedLabel: {{ data.feedlabel }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import DateTimeUtil from '@/utils/dateTimeUtil'

/**
 * ニュース情報: サブ情報。
 */
@Component({
  components: {},
})
export default class NewsSubDetails extends Vue {
  /**
   * ニュースデータ。
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
