<template>
  <v-btn color="primary reload-button" small fab @click="onClickHandler">
    <font-awesome-icon size="lg" icon="redo" />
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import { appIdDataModule } from '@/store/modules/dataModule/appIdDataModule'
import { IAppId } from '@/interface/dataModule'

/**
 * API情報を更新するボタン。
 */
@Component({
  components: {},
})
export default class ReloadSteamApiData extends Vue {
  private onClickHandler() {
    // 現在選択中のアプリIDを一度空にしてもう一度入れ直すことで、情報を更新
    const tmp = appIdDataModule.currentAppId
    const emptyData: IAppId = {
      appId: '',
    }

    // 短時間でもアプリID画からの状態を作り出し、メインコンポーネントの;key="currentId"を変更検知させる
    appIdDataModule.setCurrentAppId(emptyData)
    window.setTimeout(() => {
      appIdDataModule.setCurrentAppId(tmp)
    }, 100)
  }
}
</script>

<style scoped>
.reload-button {
  position: fixed;
  bottom: 60px;
  right: 30px;
  z-index: 9999;
}
</style>
