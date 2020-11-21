<template>
  <v-card outlined>
    <v-card-title class="pb-0">
      <v-img
        contain
        :src="`https://cdn.cloudflare.steamstatic.com/steam/apps/${data.appId}/header.jpg`"
        width="100%"
      />
    </v-card-title>
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

import { appIdDataModule } from '@/store/modules/dataModule/appIdDataModule'

import { IAppId } from '@/interface/dataModule'

/**
 * アプリID情報カード。
 */
@Component({
  components: {},
})
export default class AppIdItem extends Vue {
  /**
   * アプリID情報。
   */
  @Prop({ default: {} })
  private data!: IAppId

  /**
   * アプリIDのリスト。
   */
  private appIdList = appIdDataModule.appIdList

  /**
   * 削除ボタン押下時のハンドラー。
   */
  private onClickRemoveHandler(data: IAppId) {
    this.appIdList = this.appIdList.filter((e) => e.appId !== data.appId)
    appIdDataModule.setAppIdList(this.appIdList)
  }
}
</script>
