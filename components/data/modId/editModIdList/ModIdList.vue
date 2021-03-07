<template>
  <v-row>
    <v-col
      v-for="(item, i) in modIdList"
      :key="i"
      cols="12"
      sm="6"
      md="4"
      class="pt-0"
    >
      <mod-id-item :data="item" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import { modIdDataModule } from '@/store/modules/dataModule/modIdDataModule'

import ModIdItem from './ModIdItem.vue'

/**
 * 登録中のMOD IDを変更。
 */
@Component({
  components: {
    ModIdItem,
  },
})
export default class ModIdList extends Vue {
  /**
   * MOD IDのリスト。
   */
  private modIdList = modIdDataModule.modIdList
}
</script>
