<template>
  <page-template :page-setting="pageSetting">
    <template #main>
      <div class="mt-6">Comming Soon...</div>
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
export default class ReviewWatcher extends Vue {
  /**
   * 画面設定。
   */
  private pageSetting = pageSettings.reviewWatcher
}
</script>
