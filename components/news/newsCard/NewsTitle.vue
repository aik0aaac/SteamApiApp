<template>
  <div class="headline">
    {{ data.title }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'
import { getNewsForAppItem } from '~/interface/api/getNewsForApp'

/**
 * ニュース情報: タイトル情報。
 */
@Component({
  components: {},
})
export default class NewsTitle extends Vue {
  /**
   * ニュースデータ。
   */
  @Prop({ default: {} })
  private data?: getNewsForAppItem
}
</script>
