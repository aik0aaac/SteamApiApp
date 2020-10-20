<template>
  <v-form v-model="formValid">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="appUrl"
            :rules="appUrlRules"
            label="appUrl"
            hint="お気に入りのSteamアプリのURLを入力してください"
            persistent-hint
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <v-btn color="primary" block @click="onclickHandler"> 登録 </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import RegexpUtil from '~/utils/regexpUtil'
const regexpUtil = new RegexpUtil()

@Component({})
export default class AppIdRegistration extends Vue {
  /**
   * フォームバリデーション状態。
   */
  formValid = false

  /**
   * 入力されるAppURL。
   */
  appUrl = ''
  /**
   * 入力AppURLのバリデーションルール。
   */
  appUrlRules = [
    (v: string | undefined | null) =>
      !!v || 'お気に入りのSteamアプリのURLを入力してください',
    (v: string) =>
      regexpUtil.steamUrlToAppId.test(v) ||
      'SteamアプリのURLを入力してください',
  ]

  /**
   * アプリIDを登録する関数。
   * sampleregistrationHandler(appId)の様に、第1引数に「appId」が格納される関数を指定。
   */
  @Prop({ default: () => ({}) })
  public registrationHandler: Function = () => ({})

  /**
   * 登録ボタン押下時のハンドラー。
   */
  private onclickHandler() {
    const appId = regexpUtil.match(this.appUrl, regexpUtil.steamUrlToAppId)
    this.registrationHandler(appId)
  }
}
</script>
