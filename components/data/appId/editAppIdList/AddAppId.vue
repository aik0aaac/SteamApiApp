<template>
  <div>
    <v-card>
      <v-card-title class="title"> アプリを追加 </v-card-title>
      <v-card-text>
        <app-id-text-field @appIdRegistered="appIdRegistered" />
      </v-card-text>
    </v-card>

    <!-- 追加時のToast -->
    <success-snackbar :value="addSuccess" text="追加しました!" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import SuccessSnackbar from '@/components/common/snackbar/SuccessSnackbar.vue'

import { appIdDataModule } from '@/store/modules/dataModule/appIdDataModule'

import { IAppId } from '@/interface/dataModule'
import AppIdTextField from '../AppIdTextField.vue'

import RegexpUtil from '~/utils/regexpUtil'

/**
 * 登録中のアプリIDを変更。
 */
@Component({
  components: {
    SuccessSnackbar,
    AppIdTextField,
  },
})
export default class AddAppId extends Vue {
  /**
   * アプリURL登録時のハンドラー。
   */
  private appIdRegistered(appUrl: string) {
    const data: IAppId = {
      appId: RegexpUtil.match(appUrl, RegexpUtil.steamUrlToAppId),
    }
    appIdDataModule.setAppId(data)

    // 追加時Snackbarを発火
    this.addSuccess = true
  }

  /**
   * 追加時Snackbar。
   */
  private addSuccess = false
}
</script>
