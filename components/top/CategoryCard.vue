<template>
  <v-card outlined data-cy="categoryCard-cardArea">
    <v-card-title data-cy="categoryCard-name">
      {{ data.name }}
      <span v-if="data.isNotAvaliable" class="ml-4 body-2">
        <v-icon small class="mr-1">fas fa-rocket</v-icon>Comming Soon!
      </span>
    </v-card-title>
    <v-card-text class="category-description">
      <div class="body-1" v-html="data.description"></div>
      <div v-if="data.isNotAvaliable" class="body-1 mt-4">
        本コンテンツはまだご利用不可です…もう少々お待ちください。
      </div>
    </v-card-text>
    <v-card-actions class="pb-6 px-6">
      <v-btn
        v-if="!data.isNotAvaliable"
        block
        color="primary"
        :to="data.link"
        data-cy="categoryCard-link"
      >
        <v-icon x-small class="mr-2">fas fa-grin-squint</v-icon>
        見てみる!
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import { ICategory } from '@/interface/pageSettings'

@Component({
  components: {},
})
export default class CategoryCard extends Vue {
  /**
   * カテゴリ設定。
   */
  @Prop({ default: {} })
  private data?: ICategory
}
</script>

<style lang="sass" scoped>
.category-description
  height: 160px
</style>
