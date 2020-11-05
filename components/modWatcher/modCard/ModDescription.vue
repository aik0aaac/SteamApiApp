<template>
  <steam-format-contents
    :text="data.description"
    :summary-mode="summaryMode"
    :max-contents-length="modSummaryDisplayContentsNum"
  />
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import SteamFormatContents from '@/components/common/steamFormatContents/SteamFormatContents.vue'

import Settings from '@/config/settings'

/**
 * MOD説明内容。
 */
@Component({
  components: {
    SteamFormatContents,
  },
})
export default class ModDescription extends Vue {
  /**
   * MODデータ。
   */
  @Prop({ default: {} })
  private data: any

  /**
   * 概要モード。
   */
  @Prop({ default: false })
  private summaryMode?: boolean

  /**
   * MOD概要欄にて画面に表示させる文字数。
   */
  private modSummaryDisplayContentsNum = Settings.modSummaryDisplayContentsNum
}
</script>
