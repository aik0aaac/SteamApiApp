<template>
  <page-template :page-setting="pageSetting">
    <template #main>
      <v-container> TOPページ </v-container>
    </template>
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import PageTemplate from '~/components/common/template/PageTemplate.vue'

// settings import
import { pageSettings } from '~/config/pageSettings'

@Component({
  components: {
    PageTemplate,
  },
})
export default class Top extends Vue {
  /**
   * 画面設定。
   */
  private pageSetting = pageSettings.top
}
</script>
