<template>
  <v-card>
    <v-card-title class="title">最新ニュースリリース</v-card-title>
    <v-card-subtitle class="caption">
      最新のニュースリリースを見れます。<br />
      <!-- TODO: NewsWatcherへのリンク -->
      もっと多くのニュースリリースを見たい場合は
      <a href="/" class="text-decoration-none"> こちら </a>
      からご覧ください。
    </v-card-subtitle>

    <v-card-text>
      <api-wrapper :fetch-state="$fetchState">
        <!-- ニュース一覧 -->
        <template #data>
          <div class="title mb-2">全{{ newsCount }}件中5件表示</div>
          <v-row>
            <v-col
              v-for="(item, $index) in data"
              :key="$index"
              cols="12"
              sm="6"
            >
              <news-card :data="item" />
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
import NewsCard from '@/components/news/newsCard/index.vue'

import { appWatcherModule } from '@/store/modules/appWatcherModule'
import { dataModule } from '@/store/modules/dataModule'

/**
 * ニュース一覧。
 */
@Component({
  components: {
    ApiWrapper,
    NewsCard,
  },
})
export default class NewsSummary extends Vue {
  /**
   * APIデータを格納。
   */
  private data: any = null

  /**
   * ニュース数。
   */
  private newsCount = null

  async fetch() {
    const response = await appWatcherModule.getNewsForApp(
      dataModule.currentAppId.appId
    )

    this.data = response.appnews.newsitems
    this.newsCount = response.appnews.count
  }
}
</script>

<style scoped>
.news-contents {
  white-space: pre-line;
}
</style>
