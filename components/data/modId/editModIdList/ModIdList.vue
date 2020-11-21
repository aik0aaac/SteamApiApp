<template>
  <div>
    <mod-id-item
      v-for="(item, i) in modIdList"
      :key="i"
      :data="item"
      class="mb-2"
    />
  </div>
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
