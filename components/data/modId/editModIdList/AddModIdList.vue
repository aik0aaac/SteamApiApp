<template>
  <v-form v-model="formValid">
    <v-container>
      <v-row>
        <v-col cols="12">
          <div class="headline">MODを追加</div>
        </v-col>
        <!-- 表示名 -->
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="gameName"
            label="ゲーム名"
            clearable
            persistent-hint
            required
          />
        </v-col>
        <!-- MODURL -->
        <v-col cols="12" sm="6">
          <v-text-field
            v-model="modUrl"
            :rules="modUrlRules"
            label="MOD URL"
            clearable
            hint="お気に入りSteam MODのURLを入力してください"
            persistent-hint
            required
          />
        </v-col>
        <!-- 追加ボタン -->
        <v-col cols="12" md="12">
          <v-btn color="primary" block @click="onClickAddHandler">
            <v-icon x-small class="mr-2">fas fa-plus</v-icon>
            追加
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- 追加時のToast -->
    <success-snackbar :value="addSuccess" text="追加しました!" />
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import SuccessSnackbar from '@/components/common/snackbar/SuccessSnackbar.vue'

import { modIdDataModule } from '@/store/modules/dataModule/modIdDataModule'

import { IModId } from '@/interface/dataModule'

import RegexpUtil from '~/utils/regexpUtil'

/**
 * 登録中のMODIDを変更。
 */
@Component({
  components: {
    SuccessSnackbar,
  },
})
export default class AddModIdList extends Vue {
  /**
   * フォームバリデーション状態。
   */
  private formValid = false
  /**
   * 入力されるMOD URL。
   */
  private modUrl = ''
  /**
   * 入力されるゲーム名。
   */
  private gameName = ''
  /**
   * 入力AppURLのバリデーションルール。
   */
  private modUrlRules = [
    (v: string | undefined | null) =>
      !!v || 'お気に入りSteam MODのURLを入力してください',
    (v: string) =>
      RegexpUtil.steamUrlToModId.test(v) || 'Steam MODのURLを入力してください',
  ]

  /**
   * フォーム内容をClearする。
   */
  private clearForm() {
    this.modUrl = ''
    this.gameName = ''
  }

  /**
   * 追加ボタン押下時のハンドラー。
   */
  private onClickAddHandler() {
    const data: IModId = {
      modId: RegexpUtil.match(this.modUrl, RegexpUtil.steamUrlToModId),
      gameName: this.gameName,
    }
    modIdDataModule.setModId(data)

    // フォーム内容をClean
    this.clearForm()

    // 追加時Snackbarを発火
    this.addSuccess = true
  }

  /**
   * 追加時Snackbar。
   */
  private addSuccess = false
}
</script>
