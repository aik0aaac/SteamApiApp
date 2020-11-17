<template>
  <div v-if="data.banned !== 0" class="body-1">
    ※BANされているMODについてのUIはまだ洗練されていません…。<br />
    (BANされているMODを見つけるのが大変なので…)<br />
    BANされているMODを見かけたら、そのMOD情報をそっと開発者に教えていただけると助かります…
    <div class="title">このMODはBANされています</div>
    <div class="body-2">BAN理由: {{ data.ban_reason }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { getPublishedFileDetailsItem } from '~/interface/api/getPublishedFileDetails'

/**
 * MOD BAN情報。
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
