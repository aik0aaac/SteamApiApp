<template>
  <div class="list">
    <v-btn
      v-for="(item, $index) in appIdList"
      :key="$index"
      color="primary"
      class="mr-2 text-capitalize d-inline-block"
      :outlined="currentAppId.appId !== item.appId"
      @click="setCurrentAppId(item)"
    >
      <v-img
        contain
        :src="`https://cdn.cloudflare.steamstatic.com/steam/apps/${item.appId}/header.jpg`"
        width="100px"
        height="32px"
      />
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import { appIdDataModule } from '@/store/modules/dataModule/appIdDataModule'
import { IAppId } from '@/interface/dataModule'

/**
 * アプリID表示/選択中のアプリIDを変更。
 */
@Component({
  components: {},
})
export default class CurrentAppIdList extends Vue {
  /**
   * アプリIDのリスト。
   */
  private get appIdList() {
    return appIdDataModule.appIdList
  }

  /**
   * 現在選択中のアプリID。
   */
  private get currentAppId() {
    return appIdDataModule.currentAppId
  }

  private setCurrentAppId(item: IAppId) {
    appIdDataModule.setCurrentAppId(item)
  }
}
</script>

<style scoped>
.list {
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>
