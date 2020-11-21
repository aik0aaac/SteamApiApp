<template>
  <v-card>
    <v-card-text class="title pb-0">登録中MOD一覧</v-card-text>
    <v-card-text>
      <api-wrapper :fetch-state="$fetchState">
        <template #data>
          <v-row>
            <v-col
              v-for="(item, $index) in data"
              :key="$index"
              cols="12"
              sm="6"
            >
              <mod-card :data="item" />
            </v-col>
          </v-row>
        </template>
      </api-wrapper>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ApiWrapper from '@/components/common/api/ApiWrapper.vue'

import ModCard from '@/components/modWatcher/modCard/index.vue'

import { modIdDataModule } from '@/store/modules/dataModule/modIdDataModule'
import { modWatcherModule } from '@/store/modules/modWatcherModule'
import { IModId } from '@/interface/dataModule'
import { getPublishedFileDetailsItem } from '~/interface/api/getPublishedFileDetails'

/**
 * 現在プレイ中の人数。
 */
@Component({
  components: {
    ApiWrapper,
    ModCard,
  },
})
export default class ModCardList extends Vue {
  /**
   * MOD IDリスト。
   */
  private get modIdList() {
    return modIdDataModule.modIdList
  }

  /**
   * APIデータを格納。
   */
  private data: Array<getPublishedFileDetailsItem> = []

  async fetch() {
    // APIデータを取得
    const rawResponse = await modWatcherModule.getModInfoForModList(
      modIdDataModule.modIdList
    )

    // APIデータを格納
    this.data = rawResponse.publishedfiledetails

    // MODデータをVuex上に登録
    const updateModIdList: Array<IModId> = []
    this.data.forEach((e: getPublishedFileDetailsItem) => {
      const tmp: IModId = modIdDataModule.modIdList.filter(
        (i: IModId) => i.modId === e.publishedfileid
      )[0]
      tmp.modName = e.title
      tmp.modPreviewUrl = e.preview_url
      updateModIdList.push(tmp)
    })
    modIdDataModule.setModIdList(updateModIdList)
  }
}
</script>
