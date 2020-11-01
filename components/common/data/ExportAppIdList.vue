<template>
  <modal-template
    open-button-text="エクスポート"
    open-button-icon="fas fa-download"
    open-button-color="primary"
    :open-button-outlined="true"
  >
    <template #main>
      <v-card>
        <v-card-title class="headline"> アプリ情報エクスポート </v-card-title>
        <v-card-subtitle class="mt-1">
          下記の文言を移行先のSteam Watcherインポート画面に貼り付けてください。
        </v-card-subtitle>
        <v-card-text>
          <v-alert outlined color="primary">{{ appIdList }}</v-alert>
          <copy-clip-board-button :text="appIdList" />
        </v-card-text>
      </v-card>
    </template>
  </modal-template>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import ModalTemplate from '@/components/common/template/ModalTemplate.vue'
import CopyClipBoardButton from '@/components/common/CopyClipBoardButton.vue'

import { dataModule } from '@/store/modules/dataModule'

/**
 * 登録中のアプリIDをエクスポート。。
 */
@Component({
  components: {
    ModalTemplate,
    CopyClipBoardButton,
  },
})
export default class ExportAppIdList extends Vue {
  /**
   * アプリIDのリスト。
   */
  private appIdList = dataModule.appIdList
}
</script>
