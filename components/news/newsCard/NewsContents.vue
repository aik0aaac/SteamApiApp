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
import { getNewsForAppItem } from '~/interface/api/getNewsForApp'

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
  private data?: getNewsForAppItem

  /**
   * ニュース概要モード。
   */
  @Prop({ default: false })
  private summaryMode?: boolean

  /**
   * ニュース概要欄にて画面に表示させる文字数。
   */
  private newsSummaryDisplayContentsNum = Settings.newsSummaryDisplayContentsNum
}
</script>
