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
    <success-snackbar
      :value="copySuccess"
      text="クリップボードにコピーしました!"
    />

    <!-- コピー失敗時のSnackbar -->
    <error-snackbar
      :value="copyError"
      text="クリップボードにコピー失敗しました。画面をリロードしてやり直すか、直接範囲指定してコピーしてください。"
    />
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

import SuccessSnackbar from '@/components/common/snackbar/SuccessSnackbar.vue'
import ErrorSnackbar from '@/components/common/snackbar/ErrorSnackbar.vue'

/**
 * クリップボードにコピーするボタン。。
 */
@Component({
  components: {
    SuccessSnackbar,
    ErrorSnackbar,
  },
})
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
