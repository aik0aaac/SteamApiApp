<template>
  <v-card outlined>
    <!-- MODプレビュー画像、MOD名 -->
    <v-img
      contain
      :src="data.modPreviewUrl"
      width="100%"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
    >
      <v-card-title class="body-2">{{ data.modName }}</v-card-title>
    </v-img>
    <!-- 削除ボタン -->
    <v-card-actions class="pt-0">
      <v-btn
        class="my-3"
        color="default"
        block
        outlined
        @click="onClickRemoveHandler(data)"
      >
        <v-icon x-small class="mr-2">fas fa-trash</v-icon>
        削除
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

import { modIdDataModule } from '@/store/modules/dataModule/modIdDataModule'

import { IModId } from '@/interface/dataModule'

/**
 * MOD ID情報カード。
 */
@Component({
  components: {},
})
export default class ModIdItem extends Vue {
  /**
   * アプリID情報。
   */
  @Prop({ default: {} })
  private data!: IModId

  /**
   * MOD IDのリスト。
   */
  private modIdList = modIdDataModule.modIdList

  /**
   * 削除ボタン押下時のハンドラー。
   */
  private onClickRemoveHandler(data: IModId) {
    this.modIdList = this.modIdList.filter(
      (e: IModId) => e.modId !== data.modId
    )
    modIdDataModule.setModIdList(this.modIdList)
  }
}
</script>
