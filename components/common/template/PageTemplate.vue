<template>
  <v-container>
    <div class="headline pb-1">{{ pageSetting.title }}</div>
    <div class="body-1">{{ pageSetting.subTitle }}</div>
    <!-- <div>
      <v-breadcrumbs
        :items="pageSetting.breadcrumbs"
        class="px-0"
      ></v-breadcrumbs>
    </div> -->
    <slot name="main"></slot>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import { PageSetting } from '~/config/pageSettings/types'

@Component
export default class PageTemplate extends Vue {
  @Prop()
  public pageSetting!: PageSetting
}
</script>
