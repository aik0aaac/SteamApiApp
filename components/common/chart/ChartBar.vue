<!-- vue-chartjsが生成するので、<template>タグをつけない -->
<script lang="ts">
import { Component, Vue, Prop, Watch, mixins } from 'nuxt-property-decorator'
import Chart from 'chart.js'
import VueChart from 'vue-chartjs'

// 棒グラフの場合は、Barを使う
const Bar = VueChart.Bar
const reactiveProp = VueChart.mixins.reactiveProp

@Component
export default class ChartBar extends mixins(Bar, reactiveProp) {
  @Prop({ default: {} })
  chartData!: Chart.ChartData

  @Prop({ default: {} })
  options!: Chart.ChartOptions

  mounted() {
    this.renderChart(this.chartData, this.options)
  }
}
</script>
