<template>
  <v-row>
    <v-col v-for="(category, i) in categorySettings" :key="i" cols="12" sm="6">
      <category-card :data="category" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import { ICategory } from '@/interface/pageSettings'
import CategoryCard from '~/components/top/CategoryCard.vue'

import { pageSettings } from '~/config/pageSettings'

/**
 * カテゴリ一覧。
 */
@Component({
  components: {
    CategoryCard,
  },
})
export default class CategoryList extends Vue {
  /**
   * 画面設定。
   */
  private categorySettings: Array<ICategory> = [
    {
      name: pageSettings.appWatcher.title,
      icon: pageSettings.appWatcher.icon,
      description:
        '気になるアプリの現在のプレイ人数やレビュー、最近ニュースを見れます。',
      link: pageSettings.appWatcher.link,
      isNotAvaliable: false,
    },
    {
      name: pageSettings.modWatcher.title,
      icon: pageSettings.modWatcher.icon,
      description:
        '「お気に入りのMODの更新状況を知りたい」、「自分が作ったMODのサブスクライブ数を知りたい」時にご活用いただけます。',
      link: pageSettings.modWatcher.link,
      isNotAvaliable: false,
    },
    {
      name: pageSettings.reviewWatcher.title,
      icon: pageSettings.reviewWatcher.icon,
      description: 'お気に入りアプリのレビューを細かく見れます。',
      link: pageSettings.reviewWatcher.link,
      isNotAvaliable: true,
    },
    {
      name: pageSettings.newsWatcher.title,
      icon: pageSettings.newsWatcher.icon,
      description: 'お気に入りアプリのニュースを細かく見れます。',
      link: pageSettings.newsWatcher.link,
      isNotAvaliable: true,
    },
  ]
}
</script>
