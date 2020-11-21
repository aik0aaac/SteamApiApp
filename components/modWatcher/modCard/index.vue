<template>
  <v-card outlined class="mb-8">
    <v-img :src="data.preview_url"> </v-img>

    <v-card-title>
      {{ data.title }}
    </v-card-title>

    <v-card-subtitle>
      <mod-date :data="data" />
    </v-card-subtitle>

    <v-card-text>
      <mod-external-reactions class="mb-4" :data="data" />
      <v-divider class="mt-3 mb-6"></v-divider>
      <mod-description class="mb-4" :data="data" :summary-mode="true" />
      <mod-tags :data="data" />
    </v-card-text>

    <!-- アクションボタン -->
    <v-card-actions>
      <v-row>
        <!-- 詳細ボタン -->
        <v-col cols="12" class="pt-0 pb-2">
          <mod-details :data="data" />
        </v-col>
        <!--Steamリンク -->
        <v-col cols="12" class="py-0">
          <v-btn
            :href="`https://steamcommunity.com/sharedfiles/filedetails/?id=${data.publishedfileid}`"
            target="_blank"
            block
            outlined
          >
            <v-icon x-small class="mr-2">fas fa-external-link-alt</v-icon>
            Steamで見る
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>

    <mod-ban-info :data="data" />

    <mod-unknown-data :data="data" />
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import ModDetails from '../modDetails/index.vue'
import ModDate from './ModDate.vue'
import ModDescription from './ModDescription.vue'
import ModExternalReactions from './ModExternalReactions.vue'
import ModTags from './ModTags.vue'
import ModBanInfo from './ModBanInfo.vue'
import ModUnknownData from './ModUnknownData.vue'
import { getPublishedFileDetailsItem } from '~/interface/api/getPublishedFileDetails'

/**
 * MODカード。
 */
@Component({
  components: {
    ModDate,
    ModDescription,
    ModExternalReactions,
    ModBanInfo,
    ModTags,
    ModDetails,
    ModUnknownData,
  },
})
export default class ModCard extends Vue {
  /**
   * MODデータ。
   */
  @Prop({ default: {} })
  private data?: getPublishedFileDetailsItem
}
</script>
