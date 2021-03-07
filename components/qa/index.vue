<template>
  <modal-template
    open-button-icon="fas fa-exclamation-circle"
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
            <a :href="questionForm" target="_blank" class="text-decoration-none"
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
import Settings from '~/config/settings'

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
   * 「質問箱」へのGoogleフォームURL。
   */
  private questionForm = Settings.questionForm

  /**
   * QAデータ: サービス全般。
   */
  private commonQADataList: Array<IQAContent> = [
    {
      question: `エラーが発生しましたと出るんだけど
ゲーム、modの情報が出てこない`,
      answer: '画面を再読み込みしてください! 大抵はそれで治ります。',
    },
    {
      question: '画面を再読込しても無理…',
      answer: `<a href="${this.questionForm}" target="_blank" class="text-decoration-none">こちら</a>の質問箱より投稿をお願いします。
使用端末、ブラウザ、「どんな操作を行なってエラーとなったか」を詳細に記入ください.
例: 「iPhoneSE(第2世代)、iOS 14.0.1のChromeブラウザにてAPP Watcherにアクセスし〇〇のゲームを登録したらエラーとなりました。」
※個人で開発しているサービスであるため、返信はとても遅いです…気長に待っていただければ。
　どうしても急いでいる場合は<a href="https://twitter.com/aik0aaat" target="_blank" class="text-decoration-none">Twitter(aik0aaat)</a>のDMにてご連絡ください。`,
    },
    // {
    //   question: '他端末orブラウザで見ると登録していた情報が消える',
    //   answer: '',
    // },
  ]

  /**
   * QAデータ: APP Watcher。
   */
  private appWatcherQADataList: Array<IQAContent> = [
    // {
    //   question:
    //     '他の端末やブラウザで見ると、データが消えちゃって再登録面倒くさい…',
    //   answer: `インポート機能をご活用ください。`,
    // },
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
