<template>
  <v-row>
    <v-col
      v-for="(item, i) in appIdList"
      :key="i"
      cols="12"
      sm="6"
      md="4"
      class="pt-0"
    >
      <app-id-item :data="item" />
    </v-col>
  </v-row>
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
