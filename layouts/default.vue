<template>
  <v-app dark>
    <!-- 左部ナビゲーションバー -->
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" fixed app>
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.link"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- 上部メニューバー -->
    <v-app-bar fixed app>
      <!-- サイドメニュー展開ボタン -->
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <!-- アプリタイトル -->
      <v-toolbar-title v-text="title" />

      <v-spacer></v-spacer>

      <!-- ヘルプ -->
      <help />
      <!-- Q&A -->
      <q-a />
    </v-app-bar>

    <!-- メインコンテンツ部分 -->
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>

    <!-- フッター -->
    <v-footer app>
      <footer-contents />
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import Help from '@/components/help/index.vue'
import QA from '@/components/qa/index.vue'
import FooterContents from '@/components/common/FooterContents.vue'

import Settings from '~/config/settings'
import { pageSettings } from '~/config/pageSettings'

@Component({
  components: {
    Help,
    QA,
    FooterContents,
  },
})
export default class DefaultTemplate extends Vue {
  drawer = false
  items = pageSettings
  miniVariant = false
  title = Settings.appTitle
}
</script>
