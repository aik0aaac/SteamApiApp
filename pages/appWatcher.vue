<template>
  <page-template :page-setting="pageSetting">
    <template #main>
      <!-- 登録中のアプリIDが存在しなければ、アプリID入力欄を提供 -->
      <div v-if="!isRegisteredAppId">
        <app-id-registration :registration-handler="appIdRegistrationHandler" />
      </div>
      <v-container v-if="isRegisteredAppId">
        <!-- お気に入りアプリの変更入力欄 -->
        <div>
          (目立たない様に折りたたんでおこう)& お気に入りアプリの削除機能も提供
        </div>

        <!-- お気に入りアプリ情報 -->
        <div>
          <div class="title">現在登録中のアプリ</div>
          <v-card width="460px">
            <v-img
              contain
              :src="`https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/header.jpg`"
            />
            <v-card-text>
              <v-btn
                block
                color="primary"
                :href="`https://store.steampowered.com/app/${appId}/`"
                target="_blank"
                ><v-icon x-small class="mr-2">fas fa-external-link-alt</v-icon
                >ストアページへ</v-btn
              >
            </v-card-text>
          </v-card>
        </div>

        <!-- 現在プレイしている人数 -->
        <div>
          現在プレイしている人数 -
          Steamに接続されている人しか取得不可(オフラインでやってる人は取得できない)という注意文を乗っける
          -
          アクティブユーザー数のUIは人のアイコンをたくさん並べて視覚的に分かりやすくしよう
        </div>

        <!-- 最新ニュースリリース5件 -->
        <div>
          - ニュースリリース: - 表示内容@一覧: - ニュースタイトル -
          ニュースの本文(500文字程度) - ニュースへのリンク -
          指定されたURLが外部サイトであればアイコン表示 -
          ニュース本文(先頭30文字程度でトリミング) - ニュース投稿日 -
          「最新のニュース5件」カード型で表示 -
          もっと見たい場合→NewsWatcherへ誘導リンクをつける
        </div>

        <!-- 実績取得比率 -->
        <div>
          - 実績取得比率 - SteamDBへのアクセスURLも一緒に表示 - 実績名、%を表示
        </div>

        <!-- レビューヒストグラム -->
        <div>- レビューヒストグラム - グラフ化して表示</div>
      </v-container>
    </template>
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

// components import
import PageTemplate from '~/components/common/template/PageTemplate.vue'
import AppIdRegistration from '~/components/common/AppIdRegistration'

import { pageSettings } from '~/config/pageSettings'

import { LocalStorageData } from '~/data/localStorage/types'
import AppWatcherLocalStorage from '~/data/localStorage/appWatcher'
const appWatcherLocalStorage = new AppWatcherLocalStorage()

@Component({
  components: {
    PageTemplate,
    AppIdRegistration,
  },
})
export default class AppWatcher extends Vue {
  // 画面設定
  pageSetting = pageSettings.appWatcher

  /**
   * アプリIDが登録状態かどうか。
   */
  isRegisteredAppId = false

  /**
   * 登録中のアプリID。
   */
  appId: string | null = null

  mounted() {
    // 登録中のアプリID状態&データを取得
    const { isExist, data } = appWatcherLocalStorage.getAppId()
    if (isExist) {
      this.isRegisteredAppId = isExist
      this.appId = data
    }
  }

  private appIdRegistrationHandler(appId: string) {
    // LocalStorageにセット
    appWatcherLocalStorage.setAppId(appId)

    // アプリIDにセット。
    this.isRegisteredAppId = true
    this.appId = appId
  }
}
</script>
