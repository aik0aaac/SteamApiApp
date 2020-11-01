<template>
  <!-- Steam/外部サイトへのリンクボタン -->
  <div>
    <!-- Steamリンクであればそのままリンクボタン表示 -->
    <div v-if="!data.is_external_url">
      <v-btn :href="data.url" target="_blank" block outlined>
        <v-icon x-small class="mr-2">fas fa-external-link-alt</v-icon>
        Steamで見る
      </v-btn>
    </div>

    <!-- 外部リンクであればダイアログを挟み遷移 -->
    <div v-else>
      <modal-template
        open-button-text="外部サイトで見る"
        open-button-icon="fas fa-external-link-alt"
        open-button-color="default"
        :open-button-outlined="true"
      >
        <template #main>
          <v-card>
            <v-card-title class="title mb-1">
              外部サイトに遷移しますか?
            </v-card-title>
            <v-card-subtitle> URL: {{ data.url }} </v-card-subtitle>
            <v-card-text class="caption">
              <v-btn :href="data.url" target="_blank" block outlined>
                <v-icon x-small class="mr-2">fas fa-external-link-alt</v-icon>
                外部サイトで見る
              </v-btn>
            </v-card-text>
          </v-card>
        </template>
      </modal-template>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import ModalTemplate from '@/components/common/template/ModalTemplate.vue'

/**
 * ニュース情報: リンク。
 */
@Component({
  components: {
    ModalTemplate,
  },
})
export default class NewsLink extends Vue {
  /**
   * ニュースデータ。
   */
  @Prop({ default: {} })
  private data: any
}
</script>
