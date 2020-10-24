<template>
  <page-template :page-setting="pageSetting">
    <template #main>
      <!-- 登録中のアプリIDが存在しない: アプリID入力欄を提供 -->
      <div v-if="!isRegisteredAppId">
        <app-id-registration :registration-handler="appIdRegistrationHandler" />
      </div>

      <!-- 登録中のアプリID情報 -->
      <!-- アプリIDが変更されたら再ロードされるようにKeyを設定 -->
      <v-container v-if="isRegisteredAppId" :key="appId">
        <v-row>
          <!-- お気に入りアプリ情報 -->
          <v-col cols="12" sm="8" class="pt-0">
            <app-details :app-id="appId">
              <template #addCardActions>
                <!-- お気に入りアプリの変更入力欄 -->
                <change-registered-app-id />
              </template>
            </app-details>
          </v-col>

          <!-- 現在プレイしている人数 -->
          <v-col cols="12" sm="4" class="pt-0">
            <now-player-num />
          </v-col>
        </v-row>

        <!-- レビューヒストグラム -->
        <v-row>
          <v-col cols="12" sm="12" class="pt-0">
            <review-histogram />
          </v-col>
        </v-row>

        <!-- 最新ニュースリリース5件 -->
        <v-row>
          <v-col cols="12" class="pt-0">
            <div>
              - ニュースリリース: - 表示内容@一覧: - ニュースタイトル -
              ニュースの本文(500文字程度) - ニュースへのリンク -
              指定されたURLが外部サイトであればアイコン表示 -
              ニュース本文(先頭30文字程度でトリミング) - ニュース投稿日 -
              「最新のニュース5件」カード型で表示 -
              もっと見たい場合→NewsWatcherへ誘導リンクをつける
            </div>
          </v-col>
        </v-row>

        <!-- 実績取得比率 -->
        <v-row>
          <v-col cols="12" class="pt-0">
            <achivement-summary />
          </v-col>
        </v-row>
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
import ChangeRegisteredAppId from '~/components/appWatcher/ChangeRegisteredAppId.vue'
import NowPlayerNum from '~/components/appWatcher/NowPlayerNum.vue'
import AchivementSummary from '~/components/appWatcher/AchivementSummary.vue'
import ReviewHistogram from '~/components/appWatcher/ReviewHistogram.vue'

// settings import
import { pageSettings } from '~/config/pageSettings'

@Component({
  components: {
    PageTemplate,
    AppIdRegistration,
    AppDetails,
    ChangeRegisteredAppId,
    NowPlayerNum,
    AchivementSummary,
    ReviewHistogram,
  },
})
export default class AppWatcher extends Vue {
  /**
   * 画面設定。
   */
  private pageSetting = pageSettings.appWatcher

  /**
   *  登録中のアプリID。
   */
  private get appId() {
    return appWatcherModule.appId
  }

  /**
   * アプリIDが登録されているかどうか。
   */
  private get isRegisteredAppId() {
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
