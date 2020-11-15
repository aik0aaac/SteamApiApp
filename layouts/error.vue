<template>
  <v-app dark>
    <v-container>
      <!-- 404エラー時 -->
      <page-not-found v-if="error.statusCode === 404" />
      <!-- それ以外 -->
      <other-error v-else />
    </v-container>
  </v-app>
</template>

<script>
import PageNotFound from '@/components/error/PageNotFound.vue'
import OtherError from '@/components/error/OtherError.vue'

export default {
  layout: 'empty',
  components: {
    PageNotFound,
    OtherError,
  },
  props: {
    error: {
      type: Object,
      default: null,
    },
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
