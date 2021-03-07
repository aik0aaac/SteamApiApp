<template>
  <v-card class="mb-8">
    <v-card-title class="mb-2"> ヘルプ </v-card-title>
    <v-card-subtitle>
      <p class="mb-2">ようこそSteam Watcherへ!</p>
    </v-card-subtitle>

    <v-card-text class="mb-4">
      当サービスでは、お気に入りのゲーム or MODの様々な情報を見れます。
      <v-row>
        <!-- AppWatcherへのリンク -->
        <v-col cols="12" sm="6" class="pb-0">
          <v-btn block color="primary" :to="appWatcher">
            ゲーム情報を見たい!
          </v-btn>
        </v-col>
        <!-- ModWatcherへのリンク -->
        <v-col cols="12" sm="6" class="pb-0">
          <v-btn block color="primary" :to="modWatcher">
            MOD情報を見たい!
          </v-btn>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import { pageSettings } from '~/config/pageSettings'

/**
 * ヘルプ欄 > TOP。
 */
@Component({
  components: {},
})
export default class Top extends Vue {
  /**
   * AppWatcherへのリンク。
   */
  private appWatcher = pageSettings.appWatcher.link

  /**
   * ModWatcherへのリンク。
   */
  private modWatcher = pageSettings.modWatcher.link
}
</script>
