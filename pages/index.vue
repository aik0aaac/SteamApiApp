<template>
  <page-template :page-setting="pageSetting">
    <template #main>
      <v-container>
        <!-- 各コンテンツへのリンク -->
        <category-list />

        <!-- ヘルプ欄 -->
        <help />
      </v-container>
    </template>
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import PageTemplate from '~/components/common/template/PageTemplate.vue'
import CategoryList from '~/components/top/CategoryList.vue'
import Help from '~/components/help/index.vue'

// settings import
import { pageSettings } from '~/config/pageSettings'

@Component({
  components: {
    PageTemplate,
    CategoryList,
    Help,
  },
})
export default class Top extends Vue {
  /**
   * 画面設定。
   */
  private pageSetting = pageSettings.top
}
</script>
