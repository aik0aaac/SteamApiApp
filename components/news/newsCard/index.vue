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
    <v-card-actions class="mt-2">
      <v-row>
        <v-col cols="12" class="pb-0">
          <!-- ニュース詳細 -->
          <news-details :data="data" />
        </v-col>
        <v-col cols="12">
          <!-- サイトで見る -->
          <news-link :data="data" />
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import NewsDetails from '@/components/news/newsDetails/index.vue'
import NewsTitle from './NewsTitle.vue'
import NewsSubDetails from './NewsSubDetails.vue'
import NewsContents from './NewsContents.vue'
import NewsTags from './NewsTags.vue'
import NewsLink from './NewsLink.vue'

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
  },
})
export default class NewsCard extends Vue {
  /**
   * ニュースデータ。
   */
  @Prop({ default: {} })
  private data: any
}
</script>
