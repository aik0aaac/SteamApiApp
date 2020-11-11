<template>
  <v-data-table
    :headers="headers"
    :items="modIdList"
    :items-per-page="10"
    class="elevation-1"
    :footer-props="footerProps"
  >
    <!-- 表示名 -->
    <template v-slot:item.gameName="{ item }">
      <v-text-field v-model="item.gameName" />
    </template>
    <!-- MOD ID(MOD の画像) -->
    <template v-slot:item.modId="{ item }">
      {{ item.modId }}
      <!-- <v-img
        contain
        :src="`https://cdn.cloudflare.steamstatic.com/steam/apps/${item.modId}/header.jpg`"
        width="160px"
      >
      </v-img> -->
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

import { modIdDataModule } from '@/store/modules/dataModule/modIdDataModule'

import { IModId } from '~/store/modules/dataModule/types'

/**
 * 登録中のMOD IDを変更。
 */
@Component({
  components: {},
})
export default class ModIdList extends Vue {
  /**
   * MOD IDのリスト。
   */
  private modIdList = modIdDataModule.modIdList

  /**
   * DataTableのヘッダー。
   */
  private headers = [
    {
      text: 'ゲーム',
      value: 'gameName',
    },
    {
      text: 'MOD',
      value: 'modId',
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
   * MOD IDリスト保存ボタンのハンドラー。
   */
  private onClickSaveHandler() {
    // MOD IDデータをセット。
    modIdDataModule.setModIdList(this.modIdList)
  }

  /**
   * 削除ボタン押下時のハンドラー。
   */
  private onClickRemoveHandler(data: IModId) {
    this.modIdList = this.modIdList.filter((e) => e.modId !== data.modId)
    modIdDataModule.setModIdList(this.modIdList)
  }
}
</script>
