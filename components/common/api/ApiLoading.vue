<template>
  <v-container>
    <v-row v-for="row of skeltonLoaderRowNum" :key="row">
      <v-col
        v-for="col of skeltonLoaderColNum"
        :key="col"
        cols="12"
        :md="skeltonLoaderColNum"
      >
        <v-skeleton-loader :type="skeltonType"></v-skeleton-loader>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

/**
 * ローディング画面。
 */
@Component({})
export default class ApiLoading extends Vue {
  /**
   * スケルトンの表示列数。
   */
  @Prop({ default: 1 })
  skeltonLoaderRowNum!: number

  /**
   * スケルトンの表示行数。
   */
  @Prop({ default: 1 })
  skeltonLoaderColNum!: number

  /**
   * スケルトンのタイプ。
   * どの値を指定できるかは https://vuetifyjs.com/en/api/v-skeleton-loader/#props の`type`を参照。
   */
  @Prop({ default: 'card' })
  skeltonType!: string
}
</script>
