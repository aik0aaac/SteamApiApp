<template>
  <div class="primary py-2 px-6 body-1 rounded-t-lg">
    {{ gameName }}
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

/**
 * レビュワー情報。
 */
@Component({
  components: {},
})
export default class ModGameName extends Vue {
  /**
   * ゲーム名。
   */
  @Prop({ default: {} })
  private gameName: any
}
</script>
