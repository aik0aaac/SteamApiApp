<template>
  <validation-observer ref="form">
    <form>
      <!-- 登録フォーム欄 -->
      <text-field
        v-model="modUrl"
        rules="required|steamModUrl"
        label="MOD URL"
        hint="お気に入りSteam MODのURLを入力してください"
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
 * MOD ID初期登録。
 */
@Component({
  components: {
    TextField,
  },
})
export default class ModIdTextField extends Vue {
  @Ref() form!: InstanceType<typeof ValidationObserver>
  /**
   * 入力されるMOD URL。
   */
  private modUrl = ''

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
    this.$emit('modIdRegistered', this.modUrl)

    // 入力欄をClear
    this.modUrl = ''
  }
}
</script>
