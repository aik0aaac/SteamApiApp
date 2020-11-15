<template>
  <v-card>
    <!-- エラー文 -->
    <v-card-title class="headline text-center">
      お探しのページは見つかりませんでした。
    </v-card-title>
    <v-card-text>
      <div class="body-1">
        アクセスしたURLが異なっているかもしれません。<br />
        Steam Watcherは下記の機能をご利用できます。
      </div>
      <category-list />
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

import CategoryList from '~/components/top/CategoryList.vue'

/**
 * 404エラー時。
 */
@Component({
  components: {
    CategoryList,
  },
})
export default class PageNotFound extends Vue {}
</script>
