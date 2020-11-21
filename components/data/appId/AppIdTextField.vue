<template>
  <validation-observer ref="form">
    <form>
      <!-- 登録フォーム欄 -->
      <text-field
        v-model="appUrl"
        rules="required|steamAppStoreUrl"
        label="アプリURL"
        hint="お気に入りSteamアプリのURLを入力してください"
      />
      <!-- 登録ボタン -->
      <v-btn color="primary" class="mt-2" block @click="onclickHandler">
        登録
      </v-btn>
    </form>
  </validation-observer>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Ref } from 'vue-property-decorator'

import TextField from '@/components/common/formParts/TextField.vue'

import { ValidationObserver } from 'vee-validate'

/**
 * アプリID初期登録。
 */
@Component({
  components: {
    TextField,
  },
})
export default class AppIdTextField extends Vue {
  @Ref() form!: InstanceType<typeof ValidationObserver>
  /**
   * 入力されるAppURL。
   */
  private appUrl = ''

  /**
   * 登録ボタン押下時。
   */
  private async onclickHandler() {
    // バリデーションチェック
    const valid = await this.form.validate()
    if (!valid) {
      return
    }

    // 親コンポーネントに情報を送付
    this.$emit('appIdRegistered', this.appUrl)

    // 入力欄をClear
    this.appUrl = ''
  }
}
</script>
