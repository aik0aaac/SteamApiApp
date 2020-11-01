<template>
  <div v-if="data.tags !== undefined" class="body-1">
    <v-btn
      v-for="(tag, $index) in data.tags"
      :key="$index"
      color="secondary"
      rounded
      outlined
      small
      class="mr-2"
    >
      <v-icon x-small class="mr-2">fas fa-tag</v-icon>
      {{ tag }}
    </v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

/**
 * ニュース情報: タグ情報。
 */
@Component({
  components: {},
})
export default class NewsTags extends Vue {
  /**
   * ニュースデータ。
   */
  @Prop({ default: {} })
  private data: any
}
</script>
