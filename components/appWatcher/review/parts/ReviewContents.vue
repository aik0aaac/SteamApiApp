<template>
  <div>
    <steam-format-contents
      :text="data.review"
      :summary-mode="summaryMode"
      :max-contents-length="reviewSummaryDisplayContentsNum"
    />
    <div>コメント数: {{ data.comment_count }}件</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import SteamFormatContents from '@/components/common/steamFormatContents/SteamFormatContents.vue'

import Settings from '@/config/settings'

/**
 * レビュー内容。
 */
@Component({
  components: {
    SteamFormatContents,
  },
})
export default class ReviewContents extends Vue {
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
}
</script>
