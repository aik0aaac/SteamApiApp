<template>
  <div class="d-inline">
    <!-- コピーボタン -->
    <v-btn
      v-clipboard:copy="text"
      v-clipboard:success="onCopySuccess"
      v-clipboard:error="onCopyError"
      color="primary"
      block
    >
      <v-icon x-small class="mx-1">fas fa-copy</v-icon>
      コピー
    </v-btn>

    <!-- コピー成功時のSnackbar -->
    <v-snackbar
      v-model="copySuccess"
      :timeout="5000"
      color="success"
      shaped
      class="grey-text text--darken-1"
    >
      <v-icon x-small class="mx-1">fas fa-thumbs-up</v-icon>
      クリップボードにコピーしました!
    </v-snackbar>

    <!-- コピー失敗時のSnackbar -->
    <v-snackbar v-model="copyError" :timeout="5000" color="error" shaped>
      <v-icon x-small class="mx-1">fas fa-times-circle</v-icon>
      クリップボードにコピー失敗しました。<br />画面をリロードしてやり直すか、直接範囲指定してコピーしてください。
    </v-snackbar>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

/**
 * クリップボードにコピーするボタン。。
 */
@Component({})
export default class CopyClipBoardButton extends Vue {
  /**
   * クリップボードにコピーするテキスト。
   */
  @Prop({ default: '' })
  text!: string

  /**
   * コピー成功状態。
   */
  copySuccess = false
  /**
   * コピー成功時の処理。
   */
  private onCopySuccess() {
    this.copySuccess = true
  }

  /**
   * コピーエラー状態。
   */
  copyError = false
  /**
   * コピーエラー時の処理。
   */
  private onCopyError() {
    this.copyError = true
  }
}
</script>
