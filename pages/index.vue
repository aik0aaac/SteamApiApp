<template>
  <page-template :page-setting="pageSetting">
    <template #main>
      <!-- 登録中のアプリIDが存在しない: アプリID入力欄を提供 -->
      <div v-if="!isRegisteredAppIdList">
        <initial-registered-app-id />
      </div>

      <!-- 登録中のアプリID情報 -->
      <!-- アプリIDが変更されたら再ロードされるようにKeyを設定 -->
      <v-container
        v-if="isRegisteredAppIdList && isRegisteredCurrentAppId"
        :key="currentAppId.appId"
      >
        <v-row>
          <v-col cols="12" class="pt-0">
            <!-- アプリID表示/選択中のアプリIDを変更 -->
            <current-app-id-list class="mb-2" />
            <!-- お気に入りアプリの変更入力欄 -->
            <edit-app-id-list />
          </v-col>
          <!-- お気に入りアプリ情報 -->
          <v-col cols="12" sm="8" class="pt-0">
            <app-details :app-id="currentAppId.appId" />
          </v-col>

          <!-- 現在プレイしている人数 -->
          <v-col cols="12" sm="4" class="pt-0">
            <now-player-num />
          </v-col>
        </v-row>

        <!-- 最新ニュースリリース5件 -->
        <v-row>
          <v-col cols="12" class="pt-0">
            <news-summary />
          </v-col>
        </v-row>

        <!-- レビューサマリ -->
        <v-row>
          <v-col cols="12" sm="12" class="pt-0">
            <review-summary />
          </v-col>
        </v-row>

        <!-- 実績取得比率 -->
        <v-row>
          <v-col cols="12" class="pt-0">
            <achivement-summary />
          </v-col>
        </v-row>

        <!-- 登録中のアプリID削除ボタン -->
        <v-row>
          <v-col cols="12" class="pt-0">
            <clear-registered-app-id />
          </v-col>
        </v-row>

        <!-- API情報更新ボタン -->
        <reload-steam-api-data />
      </v-container>
    </template>
  </page-template>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import { dataModule } from '@/store/modules/dataModule'

import PageTemplate from '~/components/common/template/PageTemplate.vue'
import InitialRegisteredAppId from '~/components/common/data/InitialRegisteredAppId.vue'
import CurrentAppIdList from '~/components/common/data/CurrentAppIdList.vue'
import EditAppIdList from '~/components/common/data/editAppIdList/EditAppIdList.vue'
import AppDetails from '~/components/common/AppDetails.vue'
import NowPlayerNum from '~/components/appWatcher/NowPlayerNum.vue'
import NewsSummary from '~/components/appWatcher/news/NewsSummary.vue'
import ReviewSummary from '~/components/appWatcher/review/ReviewSummary.vue'
import AchivementSummary from '~/components/appWatcher/achivement/AchivementSummary.vue'
import ClearRegisteredAppId from '~/components/appWatcher/ClearRegisteredAppId.vue'
import ReloadSteamApiData from '~/components/common/ReloadSteamApiData.vue'

// settings import
import { pageSettings } from '~/config/pageSettings'

@Component({
  components: {
    PageTemplate,
    InitialRegisteredAppId,
    CurrentAppIdList,
    EditAppIdList,
    AppDetails,
    NowPlayerNum,
    NewsSummary,
    ReviewSummary,
    AchivementSummary,
    ClearRegisteredAppId,
    ReloadSteamApiData,
  },
})
export default class AppWatcher extends Vue {
  /**
   * 画面設定。
   */
  private pageSetting = pageSettings.appWatcher

  /**
   *  現在選択中のアプリID。
   */
  private get currentAppId() {
    return dataModule.currentAppId
  }

  /**
   * アプリIDリストが登録されているかどうか。
   */
  private get isRegisteredAppIdList() {
    return dataModule.isRegisteredAppIdList
  }

  /**
   * アプリIDが登録されているかどうか。
   */
  get isRegisteredCurrentAppId(): boolean {
    return dataModule.isRegisteredCurrentAppId
  }
}
</script>
