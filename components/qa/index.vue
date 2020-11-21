<template>
  <modal-template
    open-button-icon="fas fa-question-circle"
    open-button-color="primary"
    :open-button-iconed="true"
  >
    <template #main>
      <v-card outlined class="mb-8">
        <v-card-title class="mb-2"> Q&A </v-card-title>
        <v-card-subtitle>
          <p class="mb-2">
            よくある不具合やエラーについてまとめました。<br />
            困った時に参考になるかもしれません。
          </p>
          <p>
            もしQ&Aにないことでお困りの場合、
            <a
              href="https://forms.gle/xppufQtGZtiSNcow5"
              target="_blank"
              class="text-decoration-none"
              >こちら</a
            >のGoogleフォームから質問もできます。
          </p>
        </v-card-subtitle>

        <v-card-text class="mb-4">
          <v-tabs v-model="tab" background-color="transparent" color="basil">
            <!-- QAカテゴリ名 -->
            <v-tab v-for="(category, i) in categoryList" :key="i">
              {{ category.name }}
            </v-tab>
          </v-tabs>

          <!-- QA内容 -->
          <v-tabs-items v-model="tab">
            <!-- QA内容: サービス全般 -->
            <v-tab-item>
              <q-a-contents
                v-for="(data, i) in commonQADataList"
                :key="i"
                :data="data"
                class="mb-4"
              />
            </v-tab-item>
            <!-- QA内容: APP Watcher -->
            <v-tab-item>
              <q-a-contents
                v-for="(data, i) in appWatcherQADataList"
                :key="i"
                :data="data"
                class="mb-4"
              />
            </v-tab-item>
            <!-- QA内容: MOD Watcher -->
            <v-tab-item>
              <q-a-contents
                v-for="(data, i) in modWatcherQADataList"
                :key="i"
                :data="data"
                class="mb-4"
              />
            </v-tab-item>
          </v-tabs-items>
        </v-card-text>
      </v-card>
    </template>
  </modal-template>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import ModalTemplate from '@/components/common/template/ModalTemplate.vue'
import { IQAContent, IQACategory } from '@/interface/qa'
import QAContents from './QAContents.vue'

/**
 * Q&A。
 */
@Component({
  components: {
    ModalTemplate,
    QAContents,
  },
})
export default class QA extends Vue {
  /**
   * タブ状態。
   */
  private tab = null

  /**
   * QAカテゴリ。
   */
  private categoryList: Array<IQACategory> = [
    {
      name: '全般',
    },
    {
      name: 'APP Watcher',
    },
    {
      name: 'MOD Watcher',
    },
  ]

  /**
   * QAデータ: サービス全般。
   */
  private commonQADataList: Array<IQAContent> = [
    {
      question:
        'エラーが発生しましたと出るんだけど<br />ゲーム、modの情報が出てこない',
      answer: '画面を再読み込みしてください! 大抵はそれで治ります。',
    },
    {
      question: '画面を再読込しても無理…',
      answer: '問い合わせください…!',
    },
  ]

  /**
   * QAデータ: APP Watcher。
   */
  private appWatcherQADataList: Array<IQAContent> = [
    {
      question:
        '他の端末やブラウザで見ると、データが消えちゃって再登録面倒くさい…',
      answer: 'インポート機能をご活用ください。<import-app-id-list />',
    },
  ]

  /**
   * QAデータ: MOD Watcher。
   */
  private modWatcherQADataList: Array<IQAContent> = [
    {
      question: '',
      answer: '',
    },
  ]
}
</script>
