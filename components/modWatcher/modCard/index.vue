<template>
  <v-card outlined class="mb-8">
    {{ gameName }}<br />
    {{ data }}
    <v-card-title> </v-card-title>

    <v-card-subtitle> </v-card-subtitle>

    <v-card-text> </v-card-text>

    <!-- アクションボタン -->
    <v-card-actions class="mt-2">
      <v-row>
        <v-col cols="12" class="pb-0"> </v-col>
        <v-col cols="12"> </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

/**
 * MODカード。
 */
@Component({
  components: {},
})
export default class ModCard extends Vue {
  /**
   * MODデータ。
   */
  @Prop({ default: {} })
  private data: any

  /**
   * ゲーム名。
   */
  @Prop({ default: '' })
  private gameName?: string
}
</script>
