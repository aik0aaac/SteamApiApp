<template>
  <v-container>
    <mod-id-text-field @modIdRegistered="modIdRegistered" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

import { modIdDataModule } from '@/store/modules/dataModule/modIdDataModule'

import { IModId } from '@/interface/dataModule'
import ModIdTextField from './ModIdTextField.vue'
import RegexpUtil from '~/utils/regexpUtil'

/**
 * MOD ID初期登録。
 */
@Component({
  components: {
    ModIdTextField,
  },
})
export default class InitialRegisteredModId extends Vue {
  /**
   * 登録ボタン押下時のハンドラー。
   */
  private modIdRegistered(modUrl: string) {
    // MOD IDリストにデータを登録
    const data: IModId = {
      modId: RegexpUtil.match(modUrl, RegexpUtil.steamUrlToModId),
      modName: '',
      modPreviewUrl: '',
    }
    modIdDataModule.setModId(data)
  }
}
</script>
