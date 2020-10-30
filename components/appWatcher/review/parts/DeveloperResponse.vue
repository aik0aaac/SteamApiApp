<template>
  <div>
    <div class="title mb-2">開発元からのコメント</div>
    <steam-format-contents
      :text="data.developer_response"
      :summary-mode="summaryMode"
      :max-contents-length="reviewSummaryDisplayContentsNum"
    />
    <div>
      投稿日時: {{ convertTimestampToDateTime(data.timestamp_dev_responded) }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import SteamFormatContents from '@/components/common/steamFormatContents/SteamFormatContents.vue'

import DateTimeUtil from '@/utils/dateTimeUtil'

import Settings from '@/config/settings'

/**
 * レビュー内容。
 */
@Component({
  components: {
    SteamFormatContents,
  },
})
export default class DeveloperResponse extends Vue {
  /**
   * ニュースデータ。
   */
  @Prop({ default: {} })
  private data: any

  /**
   * 概要モード。
   */
  @Prop({ default: false })
  private summaryMode?: boolean

  /**
   * ニュース概要欄にて画面に表示させる文字数。
   */
  private reviewSummaryDisplayContentsNum =
    Settings.reviewSummaryDisplayContentsNum

  /**
   * 指定したTimeStampを日付&時間に変更。
   */
  private convertTimestampToDateTime(timestamp: number) {
    return DateTimeUtil.convertTimestampToDateTime(timestamp)
  }
}
</script>
