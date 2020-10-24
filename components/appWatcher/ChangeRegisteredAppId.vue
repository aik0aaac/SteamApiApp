<template>
  <v-dialog v-model="dialog" width="500">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" dark v-bind="attrs" v-on="on">
        登録中のアプリを変更
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline"> 登録中のアプリを変更 </v-card-title>

      <v-card-text>
        <app-id-registration :registration-handler="appIdRegistrationHandler" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import { appWatcherModule } from '@/store/modules/appWatcher'
import AppIdRegistration from '~/components/common/AppIdRegistration.vue'

/**
 * 登録中のアプリIDを変更。
 */
@Component({
  components: {
    AppIdRegistration,
  },
})
export default class ChangeRegisteredAppId extends Vue {
  /**
   * アプリID登録or更新ボタンのハンドラー。
   */
  private appIdRegistrationHandler(appId: string) {
    // アプリIDをセット。
    appWatcherModule.setAppId(appId)
  }

  /**
   * ダイアログ開閉状態。
   */
  dialog = false
}
</script>
