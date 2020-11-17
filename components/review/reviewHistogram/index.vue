<template>
  <div class="mb-4 pa-2">
    <div class="caption">{{ startDate }}〜 {{ endDate }}までの評価数推移</div>

    <div>
      <!-- ヒストグラム -->
      <chart-bar
        :chart-data="chartData"
        :options="chartOption"
        :styles="chartStyles"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import ChartBar from '@/components/common/chart/ChartBar.vue'
import { ChartData, ChartOptions } from 'chart.js'
import {
  getReviewHistogramData,
  getReviewHistogramRaw,
} from '~/interface/api/getReviewHistogram'

/**
 * レビューヒストグラム。
 */
@Component({
  components: {
    ChartBar,
  },
})
export default class ReviewHistogram extends Vue {
  /**
   * APIデータを格納。
   */
  @Prop({ default: {} })
  private data?: getReviewHistogramRaw

  /**
   * レビュー計測開始日時。
   */
  private startDate = ''
  /**
   * レビュー計測終了日時。
   */
  private endDate = ''

  mounted() {
    if (!this.data) return
    // レビュー計測開始日時を取得
    this.startDate = this.convertTimestampToDate(this.data.results.start_date)
    // レビュー計測終了日時を取得
    this.endDate = this.convertTimestampToDate(this.data.results.end_date)

    this.chartData = this.generateChartData(this.data.results.rollups)
  }

  /**
   * チャートデータを生成。
   */
  private generateChartData(data: Array<getReviewHistogramData>) {
    const chartData: ChartData = {
      labels: [],
      datasets: [],
    }
    const recommendationsUpDataArray: Array<number> = []
    const recommendationsDownDataArray: Array<number> = []

    data.forEach((e: getReviewHistogramData) => {
      chartData.labels?.push(this.convertTimestampToDate(e.date))
      recommendationsUpDataArray.push(e.recommendations_up)
      recommendationsDownDataArray.push(e.recommendations_down)
    })

    const recommendationsUpData = {
      label: '高評価',
      data: recommendationsUpDataArray,
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    }
    const recommendationsDownData = {
      label: '低評価',
      data: recommendationsDownDataArray,
      backgroundColor: 'rgba(255, 255, 255, 0.3)',
    }
    chartData.datasets?.push(recommendationsUpData)
    chartData.datasets?.push(recommendationsDownData)

    return chartData
  }

  /**
   * チャートデータ。
   */
  private chartData: ChartData = {
    // 横軸のラベル
    labels: ['A', 'B', 'C', 'D', 'E'],
    // データのリスト
    datasets: [
      {
        label: 'Data One', // データのラベル
        data: [1, 5, 3, 4, 3], // データの値。labelsと同じサイズ
      },
      {
        label: 'Data Two',
        data: [10, 50, 30, 40, 30],
      },
    ],
  }

  /**
   * チャートのオプション。
   */
  private chartOption: ChartOptions = {
    responsive: true,
    // アスペクト比を固定しないように変更
    maintainAspectRatio: false,
    scales: {
      yAxes: [
        {
          // Y軸のラベル設定
          scaleLabel: {
            display: true,
            labelString: '評価数',
          },
        },
      ],
    },
  }

  /**
   * チャートのスタイル: <canvas>のstyle属性として設定
   */
  private chartStyles = {
    height: '100%',
    width: '100%',
  }

  /**
   * 指定したTimeStampを日付に変更。
   */
  private convertTimestampToDate(timestamp: number) {
    const dateTime = new Date(timestamp * 1000)
    return `${dateTime.toLocaleDateString('ja-JP')}`
  }
}
</script>

<style scoped>
.chart-container {
  /**
   * vue-chartjsで生成する<canvas>がabsoluteのため、relateveを設定
   */
  position: relative;
  margin: 0 auto;
}
</style>
