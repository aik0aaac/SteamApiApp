<template>
  <!-- 追加時のToast -->
  <v-snackbar :value="value" color="success" :timeout="2000" fixed shaped>
    {{ text }}
  </v-snackbar>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

/**
 * 成功時の通知バー。
 */
@Component({})
export default class SuccessSnackbar extends Vue {
  @Prop({ default: false })
  value!: boolean

  @Prop({ default: '' })
  text!: string
}
</script>
