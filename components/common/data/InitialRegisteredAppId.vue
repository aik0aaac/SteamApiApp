<template>
  <v-form v-model="formValid">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="appUrl"
            :rules="appUrlRules"
            label="appUrl"
            clearable
            hint="お気に入りのSteamアプリのURLを入力してください"
            persistent-hint
            required
          />
        </v-col>
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

import { dataModule } from '@/store/modules/dataModule'

import { IAppId } from '~/store/modules/dataModule/types'
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
      !!v || 'お気に入りのSteamアプリのURLを入力してください',
    (v: string) =>
      RegexpUtil.steamUrlToAppId.test(v) ||
      'SteamアプリのURLを入力してください',
  ]

  /**
   * 登録ボタン押下時のハンドラー。
   */
  private onclickHandler() {
    const data: IAppId = {
      appId: RegexpUtil.match(this.appUrl, RegexpUtil.steamUrlToAppId),
      label: Settings.appIdInitializeLabel,
    }
    dataModule.setAppId(data)
  }
}
</script>
