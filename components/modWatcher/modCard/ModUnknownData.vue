<template>
  <div class="pt-4 pb-2 px-4 caption grey--text text--darken-1">
    ※下記の値が「0」でないMODがある場合、そのMOD情報をそっと開発者に教えていただけると助かります…<br />
    visibility:{{ data.visibility }}<br />
    banned: {{ data.banned }}<br />
    ban_reason: <span v-if="data.ban_reason === ''">0</span>
    <span v-else>{{ data.ban_reason }}</span
    ><br />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

/**
 * 開発者が何の情報を指しているか不明な情報。
 */
@Component({
  components: {},
})
export default class ModUnknownData extends Vue {
  /**
   * レビューデータ。
   */
  @Prop({ default: {} })
  private data: any
}
</script>
