<template>
  <page-template :page-setting="pageSetting">
    <template #main> </template>
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import PageTemplate from '~/components/common/template/PageTemplate.vue'

import { pageSettings } from '~/config/pageSettings'

@Component({
  components: {
    PageTemplate,
  },
})
export default class AppWatcher extends Vue {
  // 画面設定
  pageSetting = pageSettings.home
}
</script>
