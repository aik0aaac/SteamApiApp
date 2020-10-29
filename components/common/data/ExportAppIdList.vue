<template>
  <v-dialog v-model="dialog" width="80vw">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" v-bind="attrs" block outlined v-on="on">
        <v-icon x-small class="mx-1">fas fa-download</v-icon>
        エクスポート
      </v-btn>
    </template>

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
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import CopyClipBoardButton from '@/components/common/CopyClipBoardButton.vue'

import { dataModule } from '@/store/modules/dataModule'

/**
 * 登録中のアプリIDをエクスポート。。
 */
@Component({
  components: {
    CopyClipBoardButton,
  },
})
export default class ExportAppIdList extends Vue {
  /**
   * ダイアログ開閉状態。
   */
  private dialog = false

  /**
   * アプリIDのリスト。
   */
  private appIdList = dataModule.appIdList
}
</script>
