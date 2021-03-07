<template>
  <modal-template
    open-button-icon="fas fa-question-circle"
    open-button-color="primary"
    :open-button-iconed="true"
  >
    <template #main>
      <!-- タブ選択欄 -->
      <v-tabs v-model="tab" color="basil">
        <v-tab v-for="(category, i) in categoryList" :key="i">
          {{ category.name }}
        </v-tab>
      </v-tabs>

      <!-- タブ内容 -->
      <v-tabs-items v-model="tab" class="pa-3">
        <!-- TOP -->
        <v-tab-item>
          <top />
        </v-tab-item>
        <!-- APP Watcher -->
        <v-tab-item>
          <app-watcher />
        </v-tab-item>
      </v-tabs-items>
    </template>
  </modal-template>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import ModalTemplate from '@/components/common/template/ModalTemplate.vue'
import { IHelpCategory } from '@/interface/help'
import Top from './Top.vue'
import AppWatcher from './AppWatcher.vue'

/**
 * ヘルプ欄。
 */
@Component({
  components: {
    ModalTemplate,
    Top,
    AppWatcher,
  },
})
export default class Help extends Vue {
  /**
   * タブ状態。
   */
  private tab = null

  /**
   * QAカテゴリ。
   */
  private categoryList: Array<IHelpCategory> = [
    {
      name: 'TOP',
    },
    {
      name: 'APP Watcher',
    },
    {
      name: 'MOD Watcher',
    },
  ]
}
</script>
