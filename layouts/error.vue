<template>
  <v-app dark>
    <v-container>
      <v-card>
        <!-- エラー文 -->
        <v-card-title class="headline text-center">
          <div v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </div>
          <div v-else>
            {{ otherError }}
          </div>
        </v-card-title>
        <!-- TODO: 下記手順を明文化
         エクスポート情報をコピー
         「登録中の情報を全て削除する」ボタンを押し、Clear
         開発者にデータを送付(何のSteamアプリを登録していたかも聞こう)
         返信があったデータをそのままインポート欄に貼り付け
         復元完了!
        -->
        <v-card-text>
          <div class="body-1">
            画面を再読み込みしてください。<br />
            <!-- もしそれでも治らない場合は、下記エクスポートボタン押下後に表示されるデータをコピーし、開発者(@aik0aaat)までお知らせください。 -->
          </div>
          <!-- エクスポート欄 -->
          <!-- <export-app-id-list /> -->
        </v-card-text>
        <v-card-actions>
          <NuxtLink to="/">TOPへ</NuxtLink>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
// import ExportAppIdList from '@/components/data/appId/ExportAppIdList.vue'

export default {
  layout: 'empty',
  // components: { ExportAppIdList },
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'お探しのページは見つかりませんでした。',
      otherError: 'エラーが発生しました。',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>
