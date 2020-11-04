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
              <mod-card :data="item.apiData" :game-name="item.gameName" />
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
import { IModId } from '~/store/modules/dataModule/types'

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
  private data: Array<any> = []

  async fetch() {
    // APIデータを取得
    const rawResponse = await modWatcherModule.getModInfoForModList(
      modIdDataModule.modIdList
    )

    // APIデータを加工
    rawResponse.publishedfiledetails.forEach((e: any) => {
      const modId = modIdDataModule.modIdList.find(
        (i: IModId) => i.modId === e.publishedfileid
      )
      // ゲーム名も一緒にデータとして格納
      const data = {
        gameName: modId?.gameName,
        apiData: e,
      }
      this.data.push(data)
    })
  }
}
</script>
