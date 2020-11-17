<template>
  <modal-template
    open-button-text="詳細"
    open-button-icon="fas fa-eye"
    open-button-color="primary"
  >
    <template #main>
      <v-card outlined class="mb-8">
        <mod-game-name :game-name="gameName" />
        <v-img :src="data.preview_url"> </v-img>

        <v-card-title>
          {{ data.title }}
        </v-card-title>

        <v-card-subtitle>
          <mod-date :data="data" />
        </v-card-subtitle>

        <v-card-text>
          <mod-external-reactions :data="data" />
          <v-divider></v-divider>
          <v-divider class="mt-3 mb-6"></v-divider>
          <mod-description class="mb-4" :data="data" />
          <mod-tags :data="data" />
        </v-card-text>

        <!-- アクションボタン -->
        <v-card-actions>
          <v-row>
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
  </modal-template>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import ModalTemplate from '@/components/common/template/ModalTemplate.vue'
import ModGameName from '../modCard/ModGameName.vue'
import ModDate from '../modCard/ModDate.vue'
import ModDescription from '../modCard/ModDescription.vue'
import ModExternalReactions from '../modCard/ModExternalReactions.vue'
import ModTags from '../modCard/ModTags.vue'
import ModBanInfo from '../modCard/ModBanInfo.vue'
import ModUnknownData from '../modCard/ModUnknownData.vue'
import { getPublishedFileDetailsItem } from '~/interface/api/getPublishedFileDetails'

/**
 * MODカード。
 */
@Component({
  components: {
    ModalTemplate,
    ModGameName,
    ModDate,
    ModDescription,
    ModExternalReactions,
    ModTags,
    ModBanInfo,
    ModUnknownData,
  },
})
export default class ModDetails extends Vue {
  /**
   * MODデータ。
   */
  @Prop({ default: {} })
  private data?: getPublishedFileDetailsItem

  /**
   * ゲーム名。
   */
  @Prop({ default: '' })
  private gameName?: string
}
</script>
