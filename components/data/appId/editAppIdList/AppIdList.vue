<template>
  <div>
    <app-id-item
      v-for="(item, i) in appIdList"
      :key="i"
      :data="item"
      class="mb-2"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import { appIdDataModule } from '@/store/modules/dataModule/appIdDataModule'

import AppIdItem from './AppIdItem.vue'

/**
 * 登録中のアプリIDを変更。
 */
@Component({
  components: {
    AppIdItem,
  },
})
export default class AppIdList extends Vue {
  /**
   * アプリIDのリスト。
   */
  private appIdList = appIdDataModule.appIdList
}
</script>
