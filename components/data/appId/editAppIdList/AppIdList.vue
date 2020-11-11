<template>
  <v-data-table
    :headers="headers"
    :items="appIdList"
    :items-per-page="10"
    class="elevation-1"
    :footer-props="footerProps"
  >
    <!-- 表示名 -->
    <template v-slot:item.label="{ item }">
      <v-text-field v-model="item.label" />
    </template>
    <!-- アプリID(アプリの画像) -->
    <template v-slot:item.appId="{ item }">
      <v-img
        contain
        :src="`https://cdn.cloudflare.steamstatic.com/steam/apps/${item.appId}/header.jpg`"
        width="160px"
      >
      </v-img>
      <v-btn
        class="my-3"
        color="default"
        block
        outlined
        @click="onClickRemoveHandler(item)"
      >
        <v-icon x-small class="mr-2">fas fa-trash</v-icon>
        削除
      </v-btn>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import { appIdDataModule } from '@/store/modules/dataModule/appIdDataModule'

import { IAppId } from '~/store/modules/dataModule/types'

/**
 * 登録中のアプリIDを変更。
 */
@Component({
  components: {},
})
export default class AppIdList extends Vue {
  /**
   * アプリIDのリスト。
   */
  private appIdList = appIdDataModule.appIdList

  /**
   * DataTableのヘッダー。
   */
  private headers = [
    {
      text: '表示名',
      value: 'label',
    },
    {
      text: 'アプリ',
      value: 'appId',
    },
  ]

  /**
   * DataTableのFooter設定。
   */
  private footerProps = {
    // 最終ページと先頭ページへのアンカーを表示
    showFirstLastPage: true,
    // 現在のページ数を表示
    showCurrentPage: true,
    // 表示件数の選択リスト
    itemsPerPageOptions: [5, 10, 20, 50],
    // 「表示件数」の説明欄
    itemsPerPageText: '表示件数',
    // 先頭ページへのアンカーアイコン
    firstIcon: 'fas fa-angle-double-left',
    // 最終ページへのアンカーアイコン
    lastIcon: 'fas fa-angle-double-right',
    // 前ページへのアンカーアイコン
    prevIcon: 'fas fa-angle-left',
    // 次ページへのアンカーアイコン
    nextIcon: 'fas fa-angle-right',
  }

  /**
   * アプリIDリスト保存ボタンのハンドラー。
   */
  private onClickSaveHandler() {
    // アプリIDデータをセット。
    appIdDataModule.setAppIdList(this.appIdList)
  }

  /**
   * 削除ボタン押下時のハンドラー。
   */
  private onClickRemoveHandler(data: IAppId) {
    this.appIdList = this.appIdList.filter((e) => e.appId !== data.appId)
    appIdDataModule.setAppIdList(this.appIdList)
  }
}
</script>
