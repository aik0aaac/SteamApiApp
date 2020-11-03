<template>
  <modal-template
    open-button-text="登録中のアプリ情報を全て削除する"
    open-button-icon="fas fa-trash"
    open-button-color="error"
    :open-button-outlined="true"
  >
    <template #main>
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
    </template>
  </modal-template>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import ModalTemplate from '@/components/common/template/ModalTemplate.vue'

import { appIdDataModule } from '@/store/modules/dataModule/appIdDataModule'

/**
 * 登録中のアプリIDを削除。
 */
@Component({
  components: {
    ModalTemplate,
  },
})
export default class ClearRegisteredAppId extends Vue {
  /**
   * 削除ボタンのハンドラー。
   */
  private clearAppId() {
    // LocalStorageから情報をClear。
    appIdDataModule.clearAppIdList()
  }
}
</script>
