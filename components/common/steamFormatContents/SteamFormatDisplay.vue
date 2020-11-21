<template>
  <div class="contents caption" v-html="htmlText"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import HtmlParseUtil from '@/utils/htmlParseUtil'
import SteamFormatUtil from '@/utils/steamFormatUtil'

/**
 * Steamテキスト書式の文字列を表示。
 */
@Component({})
export default class SteamFormatDisplay extends Vue {
  @Prop({ default: '' })
  text!: string

  /**
   * Steamテキスト書式をコンバート。
   */
  get htmlText() {
    // Steamテキスト書式をコンバート
    let htmlText = SteamFormatUtil.convertSteamFormatToHtmlTag(this.text)
    // 画像のwidthを強制的にauto、max-width100%にする
    htmlText = HtmlParseUtil.convertImgToScreenFit(htmlText)
    // scriptタグを無効化して返却
    return HtmlParseUtil.removeScriptTag(htmlText)
  }
}
</script>

<style scoped>
.contents {
  white-space: pre-line;
}
</style>
