<template>
  <v-data-table
    :headers="headers"
    :items="data"
    :items-per-page="10"
    :search="search"
    class="elevation-1"
    :footer-props="footerProps"
    no-data-text="このアプリには実績がありません。"
    no-results-text="該当する実績はありません。"
  >
    <template v-slot:top>
      <v-container>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="検索"
          hint="実績ID、比率で計算できます"
          persistent-hint
          clearable
        />
      </v-container>
    </template>
  </v-data-table>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

/**
 * 実績取得比率一覧。
 */
@Component({
  components: {},
})
export default class AchivementList extends Vue {
  /**
   * APIデータ。
   */
  @Prop({ default: [] })
  private data: any

  /**
   * DataTableのヘッダー。
   */
  private headers = [
    {
      text: '実績ID',
      value: 'name',
    },
    {
      text: '取得比率(%)',
      value: 'percent',
    },
  ]

  /**
   * DataTableの検索ボックステキスト。
   */
  private search = ''

  /**
   * DataTableのFooter設定。
   */
  private footerProps = {
    // 最終ページと先頭ページへのアンカーを表示
    showFirstLastPage: true,
    // 現在のページ数を表示
    showCurrentPage: true,
    // 表示件数の選択リスト
    itemsPerPageOptions: [5, 10, 20, 50],
    // 「表示件数」の説明欄
    itemsPerPageText: '表示件数',
    // 先頭ページへのアンカーアイコン
    firstIcon: 'fas fa-angle-double-left',
    // 最終ページへのアンカーアイコン
    lastIcon: 'fas fa-angle-double-right',
    // 前ページへのアンカーアイコン
    prevIcon: 'fas fa-angle-left',
    // 次ページへのアンカーアイコン
    nextIcon: 'fas fa-angle-right',
  }
}
</script>
