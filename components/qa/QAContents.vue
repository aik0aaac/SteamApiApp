<template>
  <v-card outlined>
    <!-- 質問内容 -->
    <!-- eslint-disable-next-line vue/no-v-html -->
    <v-card-title class="body-1" v-html="data.question"> </v-card-title>

    <!-- 質問回答 -->
    <!-- eslint-disable-next-line vue/no-v-html -->
    <v-card-text class="caption" v-html="data.answer"> </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import { IQAContent } from '@/interface/qa'

@Component({
  components: {},
})
export default class QAContents extends Vue {
  /**
   * QAデータ。
   */
  @Prop({ default: {} })
  private data?: IQAContent
}
</script>
