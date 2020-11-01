<template>
  <steam-format-contents
    :text="data.contents"
    :summary-mode="summaryMode"
    :max-contents-length="newsSummaryDisplayContentsNum"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import SteamFormatContents from '@/components/common/steamFormatContents/SteamFormatContents.vue'

import Settings from '@/config/settings'

/**
 * ニュース情報: 内容。
 */
@Component({
  components: {
    SteamFormatContents,
  },
})
export default class NewsContents extends Vue {
  /**
   * ニュースデータ。
   */
  @Prop({ default: {} })
  private data: any

  /**
   * ニュース概要。
   */
  @Prop({ default: false })
  private summaryMode?: boolean

  /**
   * ニュース概要欄にて画面に表示させる文字数。
   */
  private newsSummaryDisplayContentsNum = Settings.newsSummaryDisplayContentsNum
}
</script>
