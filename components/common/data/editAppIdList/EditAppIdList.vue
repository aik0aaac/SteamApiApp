<template>
  <v-dialog v-model="dialog" width="80vw">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" block outlined v-on="on">
        お気に入りアプリを編集
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline"> 登録中のアプリを変更 </v-card-title>

      <v-card-text>
        <!-- 登録済みのアプリIDリスト -->
        <app-id-list />

        <!-- 注意文言 -->
        <v-alert outlined type="warning" class="body-2">
          お気に入りアプリの情報は<span class="font-weight-bold"
            >ブラウザ内</span
          >に保持されています。<br />
          別の端末やブラウザから閲覧した場合、お気に入りアプリの情報が削除されてしまうので注意を。
        </v-alert>

        <!-- アプリIDの追加欄 -->
        <add-app-id-list />

        <v-row>
          <!-- エクスポート欄 -->
          <v-col cols="12" sm="6">
            <export-app-id-list />
          </v-col>
          <!-- インポート欄 -->
          <v-col cols="12" sm="6">
            <import-app-id-list />
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import ExportAppIdList from '@/components/common/data/ExportAppIdList.vue'
import ImportAppIdList from '@/components/common/data/ImportAppIdList.vue'
import AppIdList from './AppIdList.vue'
import AddAppIdList from './AddAppIdList.vue'

/**
 * 登録中のアプリIDを変更。
 */
@Component({
  components: {
    AppIdList,
    AddAppIdList,
    ExportAppIdList,
    ImportAppIdList,
  },
})
export default class EditAppIdList extends Vue {
  /**
   * ダイアログ開閉状態。
   */
  private dialog = false
}
</script>
