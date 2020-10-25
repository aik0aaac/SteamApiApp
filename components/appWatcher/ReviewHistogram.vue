<template>
  <v-card>
    <v-card-text class="title pb-0">レビューヒストグラム</v-card-text>
    <v-card-text>
      <!-- データ取得中 -->
      <api-wrapper :fetch-state="$fetchState">
        <template #data>
          <div class="caption">
            {{ startDate }}〜 {{ endDate }}までの評価数推移
          </div>
          <chart-bar
            :chart-data="chartData"
            :options="chartOption"
            :styles="chartStyles"
          />
        </template>
      </api-wrapper>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import ApiWrapper from '@/components/common/api/ApiWrapper.vue'
import ChartBar from '@/components/common/chart/ChartBar.vue'
import { ChartData, ChartOptions } from 'chart.js'

import { appWatcherModule } from '@/store/modules/appWatcher'

/**
 * App情報の概要出力。
 */
@Component({
  components: {
    ApiWrapper,
    ChartBar,
  },
})
export default class ReviewHistogram extends Vue {
  /**
   *  登録中のアプリID。
   */
  private get appId() {
    return appWatcherModule.appId
  }

  /**
   * APIデータを格納。
   */
  private data: any = null

  /**
   * レビュー計測開始日時。
   */
  private startDate = ''
  /**
   * レビュー計測終了日時。
   */
  private endDate = ''

  /**
   * 指定したTimeStampを日付に変更。
   */
  private convertTimestampToDate(timestamp: number) {
    const dateTime = new Date(timestamp * 1000)
    return `${dateTime.toLocaleDateString('ja-JP')}`
  }

  async fetch() {
    this.data = await appWatcherModule.getReviewHistogram()

    // レビュー計測開始日時を取得
    this.startDate = this.convertTimestampToDate(this.data.results.start_date)
    // レビュー計測終了日時を取得
    this.endDate = this.convertTimestampToDate(this.data.results.end_date)

    this.chartData = this.generateChartData(this.data.results.rollups)
  }

  /**
   * チャートデータを生成。
   */
  private generateChartData(data: any) {
    const chartData: ChartData = {
      labels: [],
      datasets: [],
    }
    const recommendationsUpDataArray: Array<number> = []
    const recommendationsDownDataArray: Array<number> = []

    data.forEach((e: any) => {
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
