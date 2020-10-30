<template>
  <div>
    <v-btn
      v-if="data.written_during_early_access"
      color="secondary"
      rounded
      small
      class="mr-2"
    >
      アーリーアクセス中にレビュー
    </v-btn>
    <v-btn
      v-if="!data.steam_purchase"
      color="secondary"
      rounded
      small
      class="mr-2"
    >
      Steam外で購入
    </v-btn>
    <v-btn
      v-if="data.received_for_free"
      color="secondary"
      rounded
      small
      class="mr-2"
    >
      ギフトorSteamコードで購入
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

/**
 * レビューサブ情報。
 */
@Component({
  components: {},
})
export default class ReviewSummarySub extends Vue {
  /**
   * レビューデータ。
   */
  @Prop({ default: {} })
  private data: any
}
</script>
