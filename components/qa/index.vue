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
          <v-tabs
            v-model="tab"
            background-color="transparent"
            color="basil"
            grow
          >
            <!-- QAカテゴリ名 -->
            <v-tab v-for="(category, i) in categoryList" :key="i">
              {{ category.name }}
            </v-tab>
          </v-tabs>

          <!-- QA内容 -->
          <v-tabs-items v-model="tab">
            <!-- QA内容: サービス全般 -->
            <v-tab-item v-for="(data, i) in commonQADataList" :key="i">
              {{ data }}
            </v-tab-item>
            <!-- QA内容: APP Watcher -->
            <v-tab-item v-for="(data, i) in appWatcherQADataList" :key="i">
              {{ data }}
            </v-tab-item>
            <!-- QA内容: MOD Watcher -->
            <v-tab-item v-for="(data, i) in modWatcherQADataList" :key="i">
              {{ data }}
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

/**
 * Q&A。
 */
@Component({
  components: {
    ModalTemplate,
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
      name: 'サービス全般',
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
      question: '',
      answer: '',
    },
  ]

  /**
   * QAデータ: APP Watcher。
   */
  private appWatcherQADataList: Array<IQAContent> = [
    {
      question: '',
      answer: '',
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

/**
 * QAカテゴリのインターフェース。
 */
interface IQACategory {
  /**
   * カテゴリ名。
   */
  name: string
}

/**
 * QAデータのインターフェース。
 */
interface IQAContent {
  /**
   * 質問内容。
   */
  question: string
  /**
   * 回答内容。
   * HTMLタグも使用可能。
   */
  answer: string
}
</script>
