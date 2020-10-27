<template>
  <div v-html="htmlText"></div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import StringUtil from '@/utils/stringUtil'
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
    const htmlText = SteamFormatUtil.convertSteamFormatToHtmlTag(this.text)
    // scriptタグを無効化して返却
    return StringUtil.removeScriptTag(htmlText)
  }
}
</script>
