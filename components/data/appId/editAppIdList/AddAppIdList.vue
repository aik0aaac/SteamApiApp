<template>
  <v-form v-model="formValid">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="headline">アプリを追加</div>
        </v-col>
        <!-- 表示名 -->
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="label"
            label="表示名"
            clearable
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
            clearable
            hint="お気に入りSteamアプリのURLを入力してください"
            persistent-hint
            required
          />
        </v-col>
        <!-- 追加ボタン -->
        <v-col cols="12" md="12">
          <v-btn color="primary" block @click="onClickAddHandler">
            <v-icon x-small class="mr-2">fas fa-plus</v-icon>
            追加
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- 追加時のToast -->
    <success-snackbar :value="addSuccess" text="追加しました!" />
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import SuccessSnackbar from '@/components/common/snackbar/SuccessSnackbar.vue'

import { appIdDataModule } from '@/store/modules/dataModule/appIdDataModule'

import { IAppId } from '@/interface/dataModule'

import RegexpUtil from '~/utils/regexpUtil'

/**
 * 登録中のアプリIDを変更。
 */
@Component({
  components: {
    SuccessSnackbar,
  },
})
export default class AddAppIdList extends Vue {
  /**
   * フォームバリデーション状態。
   */
  private formValid = false
  /**
   * 入力されるAppURL。
   */
  private appUrl = ''
  /**
   * 入力されるラベル。
   */
  private label = ''
  /**
   * 入力AppURLのバリデーションルール。
   */
  private appUrlRules = [
    (v: string | undefined | null) =>
      !!v || 'お気に入りSteamアプリのURLを入力してください',
    (v: string) =>
      RegexpUtil.steamUrlToAppId.test(v) ||
      'SteamアプリのURLを入力してください',
  ]

  /**
   * フォーム内容をClearする。
   */
  private clearForm() {
    this.appUrl = ''
    this.label = ''
  }

  /**
   * 追加ボタン押下時のハンドラー。
   */
  private onClickAddHandler() {
    const data: IAppId = {
      appId: RegexpUtil.match(this.appUrl, RegexpUtil.steamUrlToAppId),
      label: this.label,
    }
    appIdDataModule.setAppId(data)

    // フォーム内容をClean
    this.clearForm()

    // 追加時Snackbarを発火
    this.addSuccess = true
  }

  /**
   * 追加時Snackbar。
   */
  private addSuccess = false
}
</script>
