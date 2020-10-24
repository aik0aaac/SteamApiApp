<template>
  <v-app dark>
    <v-container>
      <v-card>
        <v-card-title class="headline text-center">
          <div v-if="error.statusCode === 404">
            {{ pageNotFound }}
          </div>
          <div v-else>
            {{ otherError }}
          </div>
        </v-card-title>
        <v-card-actions>
          <NuxtLink to="/">TOPへ</NuxtLink>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: 'お探しのページは見つかりませんでした。',
      otherError: 'エラーが発生しました。',
    }
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title,
    }
  },
}
</script>
