<template>
  <steam-format-contents
    :text="data.review"
    :summary-mode="summaryMode"
    :max-contents-length="reviewSummaryDisplayContentsNum"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import SteamFormatContents from '@/components/common/steamFormatContents/SteamFormatContents.vue'

import Settings from '@/config/settings'
import { getReviewForAppWatcherItem } from '~/interface/api/getReviewForAppWatcher'

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
   * レビューデータ。
   */
  @Prop({ default: {} })
  private data?: getReviewForAppWatcherItem

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
