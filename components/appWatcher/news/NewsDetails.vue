<template>
  <v-dialog v-model="dialog" width="80vw">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" v-bind="attrs" block v-on="on">
        <v-icon x-small class="mx-1">fas fa-eye</v-icon>
        詳細
      </v-btn>
    </template>

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
  </v-dialog>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

import NewsTitle from '@/components/appWatcher/news/parts/NewsTitle.vue'
import NewsSubDetails from '@/components/appWatcher/news/parts/NewsSubDetails.vue'
import NewsContents from '@/components/appWatcher/news/parts/NewsContents.vue'
import NewsTags from '@/components/appWatcher/news/parts/NewsTags.vue'
import NewsLink from '@/components/appWatcher/news/parts/NewsLink.vue'

/**
 * ニュース詳細。
 */
@Component({
  components: {
    NewsTitle,
    NewsSubDetails,
    NewsContents,
    NewsTags,
    NewsLink,
  },
})
export default class NewsDetails extends Vue {
  /**
   * ダイアログ開閉状態。
   */
  private dialog = false

  /**
   * ニュースデータ。
   */
  @Prop({ default: {} })
  private data: any
}
</script>
