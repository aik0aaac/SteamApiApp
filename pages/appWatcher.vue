<template>
  <page-template :page-setting="pageSetting">
    <template #main>
      <!-- 登録中のアプリIDが存在しない: アプリID入力欄を提供 -->
      <div v-if="!isRegisteredAppId">
        <app-id-registration :registration-handler="appIdRegistrationHandler" />
      </div>

      <!-- 登録中のアプリID情報 -->
      <v-container v-if="isRegisteredAppId">
        <!-- お気に入りアプリの変更入力欄 -->
        <div>
          (目立たない様に折りたたんでおこう)& お気に入りアプリの削除機能も提供
        </div>

        <!-- お気に入りアプリ情報 -->
        <app-details :app-id="appId" />

        <!-- 現在プレイしている人数 -->
        <now-player-num />

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
import { Vue, Component, Watch } from 'vue-property-decorator'

import { appWatcherModule } from '@/store/modules/appWatcher'

import PageTemplate from '~/components/common/template/PageTemplate.vue'
import AppIdRegistration from '~/components/common/AppIdRegistration.vue'
import AppDetails from '~/components/common/AppDetails.vue'
import NowPlayerNum from '~/components/appWatcher/NowPlayerNum.vue'

// settings import
import { pageSettings } from '~/config/pageSettings'

@Component({
  components: {
    PageTemplate,
    AppIdRegistration,
    AppDetails,
  },
})
export default class AppWatcher extends Vue {
  /**
   * 画面設定。
   */
  pageSetting = pageSettings.appWatcher

  /**
   *  登録中のアプリID。
   */
  get appId() {
    return appWatcherModule.appId
  }

  /**
   * アプリIDが登録されているかどうか。
   */
  get isRegisteredAppId() {
    return appWatcherModule.isRegisteredAppId
  }

  /**
   * アプリID登録or更新ボタンのハンドラー。
   */
  private appIdRegistrationHandler(appId: string) {
    // アプリIDをセット。
    appWatcherModule.setAppId(appId)
  }
}
</script>
