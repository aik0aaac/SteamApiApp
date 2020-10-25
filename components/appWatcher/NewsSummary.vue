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
      <!-- データ取得中 -->
      <api-wrapper :fetch-state="$fetchState">
        <template #data>
          <div class="title mb-2">全{{ newsCount }}件中5件表示</div>
          <v-card
            v-for="(item, $index) in data"
            :key="$index"
            outlined
            class="mb-8"
          >
            <!-- ニュースタイトル -->
            <v-card-title class="headline">{{ item.title }}</v-card-title>

            <!-- ニュースサブ情報 -->
            <v-card-subtitle class="caption">
              著者: {{ item.author }}<br />
              投稿日: {{ convertTimestampToDateTime(item.date) }}<br />
              feedLabel: {{ item.feedlabel }}
            </v-card-subtitle>

            <v-card-text class="body-1">
              {{ item.contents }}

              <!-- タグ情報 -->
              <div v-if="item.tags !== undefined" class="mt-4">
                タグ:
                <v-btn
                  v-for="(tag, $index) in item.tags"
                  :key="$index"
                  color="secondary"
                  rounded
                  small
                >
                  {{ tag }}
                </v-btn>
              </div>

              <!-- アクションボタン -->
              <div class="mt-4">
                <!-- 詳細ボタン -->
                <v-btn class="primary" block>詳細</v-btn>

                <!-- Steam/外部サイトへのリンクボタン -->
                <!-- Steamリンクであればそのままリンクボタン表示 -->
                <div v-if="!item.is_external_url" class="mt-4">
                  <v-btn :href="item.url" target="_blank" block outlined>
                    <v-icon x-small class="mr-2"
                      >fas fa-external-link-alt</v-icon
                    >
                    Steamで見る
                  </v-btn>
                </div>
                <!-- 外部リンクであればダイアログを挟み遷移 -->
                <div v-else class="mt-4">
                  <v-dialog v-model="externalLinkDialog" width="80vw">
                    <template v-slot:activator="{ on, attrs }">
                      <v-btn v-bind="attrs" block outlined v-on="on">
                        外部サイトで見る
                      </v-btn>
                    </template>

                    <v-card>
                      <v-card-title class="title mb-1">
                        外部サイトに遷移しますか?
                      </v-card-title>
                      <v-card-subtitle> URL: {{ item.url }} </v-card-subtitle>
                      <v-card-text class="caption">
                        <v-btn :href="item.url" target="_blank" block outlined>
                          <v-icon x-small class="mr-2"
                            >fas fa-external-link-alt</v-icon
                          >
                          外部サイトで見る
                        </v-btn>
                      </v-card-text>
                    </v-card>
                  </v-dialog>
                </div>
              </div>
            </v-card-text>
          </v-card>
        </template>
      </api-wrapper>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import ApiWrapper from '@/components/common/api/ApiWrapper.vue'

import { appWatcherModule } from '@/store/modules/appWatcher'
import MathUtil from '@/utils/mathUtil'

/**
 * App情報の概要出力。
 */
@Component({
  components: {
    ApiWrapper,
  },
})
export default class NewsSummary extends Vue {
  /**
   *  登録中のアプリID。
   */
  private get appId() {
    return appWatcherModule.appId
  }

  /**
   * APIデータを格納。
   */
  private data: any = null

  /**
   * ニュース数。
   */
  private newsCount = null

  /**
   * 外部サイト遷移時の確認ダイアログ表示状態。
   */
  private externalLinkDialog = false

  async fetch() {
    const response = await appWatcherModule.getNewsForApp()

    this.data = response.appnews.newsitems
    this.newsCount = response.appnews.count
  }

  /**
   * 指定したTimeStampを日付&時間に変更。
   */
  private convertTimestampToDateTime(timestamp: number) {
    const dateTime = new Date(timestamp * 1000)
    return `${dateTime.toLocaleDateString(
      'ja-JP'
    )} ${dateTime.toLocaleTimeString('ja-JP')}`
  }
}
</script>
