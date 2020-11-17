<template>
  <v-card outlined class="mb-8">
    <!-- ニュースタイトル -->
    <v-card-title>
      <news-title :data="data" />
    </v-card-title>

    <!-- ニュースサブ情報 -->
    <v-card-subtitle>
      <news-sub-details :data="data" />
    </v-card-subtitle>

    <v-card-text>
      <!-- 内容 -->
      <news-contents :data="data" :summary-mode="true" />
      <!-- タグ情報 -->
      <news-tags class="mt-3" :data="data" />
    </v-card-text>

    <!-- アクションボタン -->
    <v-card-actions class="mt-0">
      <v-row>
        <!-- ニュース詳細 -->
        <v-col cols="12" class="pb-0">
          <news-details :data="data" />
        </v-col>
        <!-- Google翻訳ボタン -->
        <v-col cols="12" class="pb-0">
          <translate-button :text="data.contents" :outlined="true" />
        </v-col>
        <!-- サイトで見る -->
        <v-col cols="12" class="pb-0">
          <news-link :data="data" />
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import NewsDetails from '@/components/news/newsDetails/index.vue'
import TranslateButton from '@/components/common/TranslateButton.vue'
import NewsTitle from './NewsTitle.vue'
import NewsSubDetails from './NewsSubDetails.vue'
import NewsContents from './NewsContents.vue'
import NewsTags from './NewsTags.vue'
import NewsLink from './NewsLink.vue'
import { getNewsForAppItem } from '~/interface/api/getNewsForApp'

/**
 * ニュース概要。
 */
@Component({
  components: {
    NewsTitle,
    NewsSubDetails,
    NewsContents,
    NewsTags,
    NewsLink,
    NewsDetails,
    TranslateButton,
  },
})
export default class NewsCard extends Vue {
  /**
   * ニュースデータ。
   */
  @Prop({ default: {} })
  private data?: getNewsForAppItem
}
</script>
