<template>
  <v-form v-model="formValid">
    <v-container>
      <v-row>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="modUrl"
            :rules="modUrlRules"
            label="MOD URL"
            clearable
            hint="お気に入りSteam MODのURLを入力してください"
            persistent-hint
            required
          />
          <v-text-field
            v-model="gameName"
            label="ゲーム名"
            clearable
            hint="MODのゲーム名を入力してください"
            persistent-hint
            required
          />
        </v-col>
        <v-col cols="12" md="12">
          <v-btn color="primary" block @click="onclickHandler"> 登録 </v-btn>
        </v-col>
        <v-col cols="12" md="12">
          <!-- TODO: MOD IDインポート欄 -->
          <!-- <import-app-id-list /> -->
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import { modIdDataModule } from '@/store/modules/dataModule/modIdDataModule'

// import ImportAppIdList from '@/components/common/data/modId/ImportAppIdList.vue'

import { IModId } from '~/store/modules/dataModule/types'

import RegexpUtil from '~/utils/regexpUtil'

/**
 * MOD ID初期登録。
 */
@Component({
  components: {
    // ImportAppIdList,
  },
})
export default class InitialRegisteredModId extends Vue {
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
   * 登録ボタン押下時のハンドラー。
   */
  private onclickHandler() {
    // MOD IDリストにデータを登録
    const data: IModId = {
      modId: RegexpUtil.match(this.modUrl, RegexpUtil.steamUrlToModId),
      gameName: this.gameName,
    }
    modIdDataModule.setModId(data)
  }
}
</script>
