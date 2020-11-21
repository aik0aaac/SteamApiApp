<template>
  <v-container>
    <app-id-text-field @appIdRegistered="appIdRegistered" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import { appIdDataModule } from '@/store/modules/dataModule/appIdDataModule'

import { IAppId } from '@/interface/dataModule'
import AppIdTextField from './AppIdTextField.vue'
import RegexpUtil from '~/utils/regexpUtil'

/**
 * アプリID初期登録。
 */
@Component({
  components: {
    AppIdTextField,
  },
})
export default class InitialRegisteredAppId extends Vue {
  /**
   * アプリURL登録時のハンドラー。
   */
  private appIdRegistered(appUrl: string) {
    // アプリIDを登録
    const data: IAppId = {
      appId: RegexpUtil.match(appUrl, RegexpUtil.steamUrlToAppId),
    }
    appIdDataModule.setAppId(data)

    // 現在選択中のアプリIDにもデータを登録
    appIdDataModule.setCurrentAppId(data)
  }
}
</script>
