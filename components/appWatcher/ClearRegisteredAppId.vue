<template>
  <v-dialog v-model="dialog" width="80vw">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="error" block outlined v-bind="attrs" v-on="on">
        <v-icon x-small class="mr-2">fas fa-trash</v-icon>
        登録中のアプリ情報を全て削除する
      </v-btn>
    </template>

    <v-card class="error">
      <v-card-title class="headline">
        登録中のアプリ情報を全て削除します。
      </v-card-title>

      <v-card-text>
        <v-alert outlined type="warning"> この操作は取り消せません! </v-alert>
        <v-btn color="default" outlined block @click="clearAppId">
          <v-icon x-small class="mr-2">fas fa-trash</v-icon>
          削除する
        </v-btn>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import { dataModule } from '@/store/modules/dataModule'

/**
 * 登録中のアプリIDを削除。
 */
@Component({
  components: {},
})
export default class ClearRegisteredAppId extends Vue {
  /**
   * 削除ボタンのハンドラー。
   */
  private clearAppId() {
    // LocalStorageから情報をClear。
    dataModule.clearAppIdList()
  }

  /**
   * ダイアログ開閉状態。
   */
  private dialog = false
}
</script>
