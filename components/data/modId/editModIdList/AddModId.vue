<template>
  <div>
    <v-card>
      <v-card-title class="title"> MODを追加 </v-card-title>
      <v-card-text>
        <mod-id-text-field @modIdRegistered="modIdRegistered" />
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

import { modIdDataModule } from '@/store/modules/dataModule/modIdDataModule'

import { IModId } from '@/interface/dataModule'
import ModIdTextField from '../ModIdTextField.vue'

import RegexpUtil from '~/utils/regexpUtil'

/**
 * 登録中のMOD IDを変更。
 */
@Component({
  components: {
    SuccessSnackbar,
    ModIdTextField,
  },
})
export default class AddModId extends Vue {
  /**
   * 追加ボタン押下時のハンドラー。
   */
  private modIdRegistered(modUrl: string) {
    const data: IModId = {
      modId: RegexpUtil.match(modUrl, RegexpUtil.steamUrlToModId),
      modName: '',
      modPreviewUrl: '',
    }
    modIdDataModule.setModId(data)

    // 追加時Snackbarを発火
    this.addSuccess = true
  }

  /**
   * 追加時Snackbar。
   */
  private addSuccess = false
}
</script>
