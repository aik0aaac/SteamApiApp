<template>
  <div class="body-1">
    <div>サブスクライブ数: {{ data.subscriptions }}</div>
    <div class="caption mb-2">
      累計サブスクライブ数: {{ data.lifetime_subscriptions }}
    </div>
    <div>お気に入り数: {{ data.favorited }}</div>
    <div class="caption mb-2">
      累計お気に入り数: {{ data.lifetime_favorited }}
    </div>
    <div>ユニーク訪問者数: {{ data.views }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { getPublishedFileDetailsItem } from '~/interface/api/getPublishedFileDetails'

/**
 * MOD補足情報。
 */
@Component({
  components: {},
})
export default class ModExternalReactions extends Vue {
  /**
   * MODデータ。
   */
  @Prop({ default: {} })
  private data?: getPublishedFileDetailsItem
}
</script>
