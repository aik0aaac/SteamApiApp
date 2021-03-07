<template>
  <v-card class="mb-8">
    <v-card-title class="mb-2"> APP Watcherヘルプ </v-card-title>
    <v-card-subtitle>
      <p class="mb-2">
        当サービスでは簡単な初期セットアップが必要になります。<br />
        本ヘルプでは、その手順を紹介します。
      </p>
    </v-card-subtitle>

    <v-card-text class="mb-4">
      <v-card>
        <v-card-text>
          下記の入力欄にお気に入りのゲーム名を入力し、Steamストア検索ページへ移動します。
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="検索"
            clearable
          />
          <v-btn block color="primary" :href="searchLink" target="_blank"
            >検索※別タブで開きます
          </v-btn>
        </v-card-text>

        <v-card-text>
          検索結果より、お気に入りゲームのURLをコピーします。 <br />
          ※URLが「https://store.steampowered.com/…(以下省略)
          」の形になっていることを確認してください
        </v-card-text>

        <v-card-text>
          上部×ボタンよりモーダル画面を閉じ、「アプリURL」入力欄にコピーしたURLを貼り付ければ準備完了です!<br />
          お気に入りゲームの様々な情報をお楽しみください。
        </v-card-text>
      </v-card>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component } from 'vue-property-decorator'

/**
 * ヘルプ欄 > APP Watcher。
 * MEMO: 本コンテンツの様な「Header欄に出力されるコンポーネント内部でVuexモジュールを使用する」と必ずエラーが発生し動かなくなる…。
 */
@Component({
  components: {},
})
export default class AppWatcher extends Vue {
  /**
   * 現在のStep数。
   */
  private stepCount = 1

  /**
   * 検索欄入力内容。
   */
  private search = ''

  /**
   * 検索ボタン押下時のハンドラー。
   * Steam検索欄へ飛ぶURLを返却。
   */
  private get searchLink() {
    return `https://store.steampowered.com/search/?term="${this.search}"`
  }
}
</script>
