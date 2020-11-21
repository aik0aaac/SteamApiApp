<template>
  <modal-template
    open-button-text="お気に入りアプリを編集"
    open-button-color="primary"
    :open-button-outlined="true"
  >
    <template #main>
      <v-card>
        <v-card-title class="headline"> 登録中のアプリを変更 </v-card-title>
        <v-card-text>
          <!-- 登録済みのアプリIDリスト -->
          <app-id-list />

          <!-- アプリIDの追加欄 -->
          <add-app-id />

          <!-- 注意文言 -->
          <v-alert outlined type="warning" class="body-2 mt-6">
            アプリの情報は
            <span class="font-weight-bold">ブラウザ内</span>
            に保持されます。<br />
            別端末や別ブラウザから閲覧すると登録しなおしになるのでご注意を。
          </v-alert>
        </v-card-text>
      </v-card>
    </template>
  </modal-template>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import ModalTemplate from '@/components/common/template/ModalTemplate.vue'
import ExportAppIdList from '@/components/data/appId/ExportAppIdList.vue'
import ImportAppIdList from '@/components/data/appId/ImportAppIdList.vue'
import AppIdList from './AppIdList.vue'
import AddAppId from './AddAppId.vue'

/**
 * 登録中のアプリIDを変更。
 */
@Component({
  components: {
    ModalTemplate,
    AppIdList,
    AddAppId,
    ExportAppIdList,
    ImportAppIdList,
  },
})
export default class EditAppIdList extends Vue {}
</script>
