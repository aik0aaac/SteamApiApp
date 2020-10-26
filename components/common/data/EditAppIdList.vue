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
        <!-- TODO: D&Dで並び替えできる様にする -->
        <v-data-table
          :headers="headers"
          :items="appIdList"
          :items-per-page="10"
          class="elevation-1"
          :footer-props="footerProps"
        >
          <!-- DataTableのHeader -->
          <template v-slot:top>
            <div class="text-right">
              <v-btn color="primary" outlined @click="onClickSaveHandler">
                <v-icon x-small class="mr-2">fas fa-save</v-icon>
                保存
              </v-btn>
            </div>
          </template>

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
            />
          </template>
        </v-data-table>

        <!-- アプリIDの追加欄 -->
        <v-form v-model="formValid">
          <v-container>
            <v-row>
              <!-- 表示名 -->
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="label"
                  label="表示名"
                  persistent-hint
                  required
                />
              </v-col>
              <!-- アプリURL -->
              <v-col cols="12" sm="6">
                <v-text-field
                  v-model="appUrl"
                  :rules="appUrlRules"
                  label="appUrl"
                  hint="お気に入りのSteamアプリのURLを入力してください"
                  persistent-hint
                  required
                />
              </v-col>
              <!-- 追加ボタン -->
              <v-col cols="12" md="12">
                <v-btn
                  color="primary"
                  block
                  outlined
                  @click="onClickAddHandler"
                >
                  <v-icon x-small class="mr-2">fas fa-plus</v-icon>
                  追加
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import { dataModule } from '@/store/modules/dataModule'
import { IAppId } from '~/store/modules/dataModule/types'

import RegexpUtil from '~/utils/regexpUtil'

/**
 * 登録中のアプリIDを変更。
 */
@Component({
  components: {},
})
export default class EditAppIdList extends Vue {
  /**
   * アプリIDのリスト。
   */
  private appIdList = dataModule.appIdList

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
    dataModule.setAppIdList(this.appIdList)
  }

  /**
   * ダイアログ開閉状態。
   */
  private dialog = false

  /**
   * フォームバリデーション状態。
   */
  private formValid = false
  /**
   * 入力されるAppURL。
   */
  private appUrl = ''
  /**
   * 入力AppURLのバリデーションルール。
   */
  private appUrlRules = [
    (v: string | undefined | null) =>
      !!v || 'お気に入りのSteamアプリのURLを入力してください',
    (v: string) =>
      RegexpUtil.steamUrlToAppId.test(v) ||
      'SteamアプリのURLを入力してください',
  ]

  /**
   * 入力されるラベル。
   */
  private label = ''
  /**
   * 追加ボタン押下時のハンドラー。
   */
  private onClickAddHandler() {
    const data: IAppId = {
      appId: RegexpUtil.match(this.appUrl, RegexpUtil.steamUrlToAppId),
      label: this.label,
    }
    this.appIdList.push(data)
    dataModule.setAppId(data)
  }
}
</script>
