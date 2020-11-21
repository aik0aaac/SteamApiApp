<template>
  <validation-provider v-slot="{ errors }" :rules="rules">
    <v-text-field
      v-model="localValue"
      :label="label"
      clearable
      :hint="hint"
      persistent-hint
      :error-messages="errors"
    />
  </validation-provider>
</template>

<script lang="ts">
import { Vue, Component, Emit, Prop } from 'vue-property-decorator'

/**
 * テキスト入力欄。
 */
@Component({})
export default class TextField extends Vue {
  /**
   * v-modelの値。
   */
  @Prop() public value!: string
  /**
   * v-model変更時に送付される値。
   */
  @Emit()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public input(value: string) {}

  /**
   * ローカル内のv-modelの値。
   */
  private get localValue(): string {
    return this.value
  }

  /**
   * ローカル内のv-modelの値setter。
   */
  private set localValue(value: string) {
    this.input(value)
  }

  /**
   * ヒント。
   */
  @Prop({ default: '' })
  hint?: string

  /**
   * ラベル。
   */
  @Prop({ default: '' })
  label?: string

  /**
   * バリデーションルール。
   */
  @Prop({ default: '' })
  rules!: string
}
</script>
