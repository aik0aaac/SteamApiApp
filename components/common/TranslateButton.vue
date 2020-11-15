<template>
  <v-btn
    :color="color"
    :outlined="outlined"
    block
    :href="googleTranslateLink"
    target="_blank"
    class="text-capitalize"
  >
    <v-icon x-small class="mr-2">fas fa-language</v-icon>
    DeepL翻訳(英→日)
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

/**
 * 翻訳ボタン。
 */
@Component({})
export default class TranslateButton extends Vue {
  @Prop({ default: '' })
  text!: string

  private get googleTranslateLink() {
    // テキスト内容をURL Encodedする
    const urlEncodedText = encodeURI(this.text)
    // Google翻訳にかける
    // return `https://translate.google.com/?tl=ja&text=${urlEncodedText}`

    // deepL翻訳にかける
    return `https://www.deepl.com/ja/translator#en/ja/${urlEncodedText}`
  }

  @Prop({ default: 'default' })
  color!: string

  @Prop({ default: false })
  outlined!: boolean
}
</script>
