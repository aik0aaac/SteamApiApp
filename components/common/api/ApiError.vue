<template>
  <v-card>
    <v-card-title class="error--text">
      <v-icon class="error--text">fas fa-info-circle></v-icon>
      エラーが発生しました
    </v-card-title>
    <v-card-text> 時間を空けてから画面を再ロードしてください。 </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

/**
 * APIリクエストエラー画面。
 */
@Component({})
export default class ApiError extends Vue {}
</script>
