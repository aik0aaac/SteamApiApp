<template>
  <!-- 追加時のToast -->
  <v-snackbar :value="value" color="error" :timeout="2000" fixed shaped>
    {{ text }}
  </v-snackbar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

/**
 * エラー時の通知バー。
 */
@Component({})
export default class ErrorSnackbar extends Vue {
  @Prop({ default: false })
  value!: boolean

  @Prop({ default: '' })
  text!: string
}
</script>
