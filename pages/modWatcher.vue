<template>
  <page-template :page-setting="pageSetting">
    <template #main>
      <!-- 登録中のMOD IDが存在しない: MOD ID入力欄を提供 -->
      <div v-if="!isRegisteredModIdList">
        <initial-registered-mod-id />
      </div>

      <!-- 登録中のMOD一覧 -->
      <v-container v-if="isRegisteredModIdList">
        <v-row>
          <!-- 登録中のMOD ID編集欄 -->
          <v-col cols="12" class="pt-0">
            <edit-mod-id-list />
          </v-col>
          <!-- 登録中のMODリストカード一覧 -->
          <v-col cols="12" class="pt-0">
            <mod-card-list />
          </v-col>
        </v-row>

        <!-- TODO: 登録中のMOD ID削除ボタン -->
        <v-row>
          <v-col cols="12" class="pt-0"> </v-col>
        </v-row>

        <!-- API情報更新ボタン -->
        <reload-steam-api-data />
      </v-container>
    </template>
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import { modIdDataModule } from '@/store/modules/dataModule/modIdDataModule'

import ReloadSteamApiData from '@/components/data/modId/ReloadSteamApiData.vue'
import PageTemplate from '~/components/common/template/PageTemplate.vue'
import InitialRegisteredModId from '~/components/data/modId/InitialRegisteredModId.vue'
import EditModIdList from '~/components/data/modId/editModIdList/index.vue'
import ModCardList from '~/components/modWatcher/ModCardList.vue'

// settings import
import { pageSettings } from '~/config/pageSettings'

@Component({
  components: {
    PageTemplate,
    InitialRegisteredModId,
    EditModIdList,
    ModCardList,
    ReloadSteamApiData,
  },
})
export default class ModWatcher extends Vue {
  /**
   * 画面設定。
   */
  private pageSetting = pageSettings.modWatcher

  /**
   * MOD IDリストが登録されているかどうか。
   */
  private get isRegisteredModIdList() {
    return modIdDataModule.isRegisteredModIdList
  }

  /**
   * MOD IDリスト。
   */
  private get modIdList() {
    return modIdDataModule.modIdList
  }
}
</script>
