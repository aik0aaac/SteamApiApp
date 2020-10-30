<template>
  <div class="body-1" :class="summaryMode ? 'summary-mode' : ''">
    <steam-format-display
      :text="summaryMode ? summaryModeContents : contents"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import SteamFormatDisplay from './SteamFormatDisplay.vue'

/**
 * Steamテキスト書式の文字列を表示。
 * サマリーモード時は本文を省略して表示
 */
@Component({
  components: {
    SteamFormatDisplay,
  },
})
export default class SteamFormatContents extends Vue {
  @Prop({ default: '' })
  text!: string

  /**
   * 概要モード。
   */
  @Prop({ default: false })
  private summaryMode?: boolean

  /**
   * 概要モード時に画面に表示する文字数。
   */
  @Prop({ default: 100 })
  private maxContentsLength!: number

  // Avoid props mutation対策
  contents: string = ''
  maxLength: number = 0
  created() {
    this.contents = this.text
    this.maxLength = this.maxContentsLength
  }

  /**
   * 概要モード時に表示するコンテンツ量。
   */
  private get summaryModeContents() {
    // もしコンテンツ量が規定文字数より少なければ、省略文字は表示せずそのまま返却
    if (this.contents.length <= this.maxLength) {
      return this.contents
    }
    return this.contents.slice(0, this.maxLength - 1) + '…'
  }
}
</script>

<style scoped>
.summary-mode {
  position: relative;
  height: 8em;
  overflow: hidden;
}
.summary-mode::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: 6em;
  background: linear-gradient(rgba(0, 0, 0, 0) 0, #1e1e1e 100px);
}
</style>
