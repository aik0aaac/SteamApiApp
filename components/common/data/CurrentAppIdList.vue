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
      {{ item.label }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import { dataModule } from '@/store/modules/dataModule'
import { IAppId } from '~/store/modules/dataModule/types'

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
    return dataModule.appIdList
  }

  /**
   * 現在選択中のアプリID。
   */
  private get currentAppId() {
    return dataModule.currentAppId
  }

  private setCurrentAppId(item: IAppId) {
    dataModule.setCurrentAppId(item)
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
