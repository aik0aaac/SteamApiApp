<template>
  <v-form v-model="formValid">
    <v-container>
      <v-row>
        <!-- 登録フォーム欄 -->
        <v-col cols="12" md="12">
          <v-text-field
            v-model="appUrl"
            :rules="appUrlRules"
            label="アプリURL"
            clearable
            hint="お気に入りSteamアプリのURLを入力してください"
            persistent-hint
            required
            :error="appUrlValidationError"
            :error-messages="appUrlValidationErrorMessage"
          />
        </v-col>
        <!-- 登録ボタン -->
        <v-col cols="12" md="12">
          <v-btn color="primary" block @click="onclickHandler"> 登録 </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import { appIdDataModule } from '@/store/modules/dataModule/appIdDataModule'

import { IAppId } from '@/interface/dataModule'
import Settings from '~/config/settings'

import RegexpUtil from '~/utils/regexpUtil'

/**
 * アプリID初期登録。
 */
@Component({
  components: {},
})
export default class InitialRegisteredAppId extends Vue {
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
      !v || 'お気に入りSteamアプリのURLを入力してください',
    (v: string) =>
      RegexpUtil.steamUrlToAppId.test(v) ||
      'SteamアプリのURLを入力してください',
  ]

  /**
   * 入力AppUrlの空文字バリデーションエラー状態。
   */
  private appUrlValidationError = false
  /**
   * 入力AppUrlの空文字バリデーションエラーメッセージ。
   */
  private appUrlValidationErrorMessage =
    'お気に入りSteamアプリのURLを入力してください'

  /**
   * 登録ボタン押下時のハンドラー。
   */
  private onclickHandler() {
    // アプリIDが空文字であればAlertを表示し何もしない
    if (!this.appUrl) {
      this.appUrlValidationError = true
      return
    }

    // アプリIDを登録
    const data: IAppId = {
      appId: RegexpUtil.match(this.appUrl, RegexpUtil.steamUrlToAppId),
      label: Settings.appIdInitializeLabel,
    }
    appIdDataModule.setAppId(data)

    // 現在選択中のアプリIDにもデータを登録
    appIdDataModule.setCurrentAppId(data)
  }
}
</script>
