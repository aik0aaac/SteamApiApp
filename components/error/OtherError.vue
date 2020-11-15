<template>
  <v-card>
    <!-- エラー文 -->
    <v-card-title class="headline text-center">
      エラーが発生しました。
    </v-card-title>
    <v-card-text>
      <div class="body-1">画面を再読み込みしてください。<br /></div>

      <!-- もしそれでも治らない場合は、下記エクスポートボタン押下後に表示されるデータをコピーし、開発者(@aik0aaat)までお知らせください。 -->
      <!-- TODO: 下記手順を明文化
         エクスポート情報をコピー
         「登録中の情報を全て削除する」ボタンを押し、Clear
         開発者にデータを送付(何のSteamアプリを登録していたかも聞こう)
         返信があったデータをそのままインポート欄に貼り付け
         復元完了!
        -->
      <!-- エクスポート欄 -->
      <!-- <export-app-id-list /> -->

      <!-- QA表示が参考になるかもしれません。 -->
    </v-card-text>
  </v-card>
</template>


<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

/**
 * 404エラー以外。
 */
@Component({
  components: {},
})
export default class OtherError extends Vue {}
