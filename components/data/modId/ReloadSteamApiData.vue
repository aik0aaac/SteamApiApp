<template>
  <v-btn color="primary reload-button" small fab @click="onClickHandler">
    <v-icon small>fas fa-redo-alt</v-icon>
  </v-btn>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import { modIdDataModule } from '@/store/modules/dataModule/modIdDataModule'
import { IModId } from '@/interface/dataModule'

/**
 * API情報を更新するボタン。
 */
@Component({
  components: {},
})
export default class ReloadSteamApiData extends Vue {
  private onClickHandler() {
    // MOD IDを一度空にしてもう一度入れ直すことで、情報を更新
    const tmp = modIdDataModule.modIdList
    const emptyData: Array<IModId> = [
      {
        modId: '',
        modName: '',
        modPreviewUrl: '',
      },
    ]

    // 短時間でもアプリID画からの状態を作り出し、メインコンポーネントを変更検知させる
    modIdDataModule.setModIdList(emptyData)
    window.setTimeout(() => {
      modIdDataModule.setModIdList(tmp)
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
