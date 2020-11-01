<template>
  <div>
    <v-btn
      v-if="data.written_during_early_access"
      color="secondary"
      rounded
      outlined
      small
      class="mr-2"
    >
      アーリーアクセス中レビュー
    </v-btn>
    <v-btn
      v-if="!data.steam_purchase"
      color="secondary text-capitalize"
      rounded
      outlined
      small
      class="mr-2"
    >
      Steam外で購入
    </v-btn>
    <v-btn
      v-if="data.received_for_free"
      color="secondary text-capitalize"
      rounded
      outlined
      small
      class="mr-2"
    >
      <v-icon x-small class="mr-1">fas fa-gift</v-icon>
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
