<template>
  <modal-template
    open-button-text="詳細"
    open-button-icon="fas fa-詳細"
    open-button-color="primary"
  >
    <template #main>
      <v-card outlined>
        <!-- ニュースタイトル -->
        <v-card-title>
          <news-title :data="data" />
        </v-card-title>

        <!-- ニュースサブ情報 -->
        <v-card-subtitle>
          <news-sub-details :data="data" />
        </v-card-subtitle>

        <v-card-text>
          <translate-button
            :text="data.contents"
            color="primary"
            class="mb-4"
          />

          <!-- 内容 -->
          <news-contents :data="data" />

          <!-- タグ情報 -->
          <news-tags class="mt-4" :data="data" />
        </v-card-text>

        <!-- アクションボタン -->
        <v-card-actions class="mt-4">
          <v-row>
            <v-col cols="12">
              <!-- サイトで見る -->
              <news-link :data="data" />
            </v-col>
          </v-row>
        </v-card-actions>
      </v-card>
    </template>
  </modal-template>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import ModalTemplate from '@/components/common/template/ModalTemplate.vue'
import TranslateButton from '@/components/common/TranslateButton.vue'
import NewsTitle from '../newsCard/NewsTitle.vue'
import NewsSubDetails from '../newsCard/NewsSubDetails.vue'
import NewsContents from '../newsCard/NewsContents.vue'
import NewsTags from '../newsCard/NewsTags.vue'
import NewsLink from '../newsCard/NewsLink.vue'

/**
 * ニュース詳細。
 */
@Component({
  components: {
    ModalTemplate,
    TranslateButton,
    NewsTitle,
    NewsSubDetails,
    NewsContents,
    NewsTags,
    NewsLink,
  },
})
export default class NewsDetails extends Vue {
  /**
   * ニュースデータ。
   */
  @Prop({ default: {} })
  private data: any
}
</script>
