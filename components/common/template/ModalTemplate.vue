<template>
  <v-dialog v-model="dialog" width="80vw" max-width="1000px">
    <!-- モーダル表示ボタン -->
    <template v-slot:activator="{ on, attrs }">
      <v-btn
        :color="openButtonColor"
        :outlined="openButtonOutlined"
        :icon="openButtonIconed"
        :block="!openButtonIconed"
        v-bind="attrs"
        v-on="on"
      >
        <v-icon
          v-if="openButtonIcon !== ''"
          :x-small="!openButtonIconed"
          :small="openButtonIconed"
          class="mr-2"
          >{{ openButtonIcon }}</v-icon
        >
        {{ openButtonText }}
      </v-btn>
    </template>

    <!-- 閉じるボタン -->
    <div class="text-right">
      <v-btn text @click="dialog = false">
        <v-icon>fas fa-times</v-icon>
      </v-btn>
    </div>

    <!-- モーダル内容 -->
    <slot name="main"></slot>
  </v-dialog>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

/**
 * ダイアログテンプレート。
 */
@Component
export default class ModalTemplate extends Vue {
  /**
   * ダイアログを開くボタン: テキスト内容。
   */
  @Prop({ default: '' })
  private openButtonText?: string

  /**
   * ダイアログを開くボタン: アイコン内容。
   */
  @Prop({ default: '' })
  private openButtonIcon?: string

  /**
   * ダイアログを開くボタン: outlined化するかどうか。
   */
  @Prop({ default: false })
  private openButtonOutlined?: boolean

  /**
   * ダイアログを開くボタン: icon化するかどうか。
   */
  @Prop({ default: false })
  private openButtonIconed?: boolean

  /**
   * ダイアログを開くボタン: ボタンの色。
   */
  @Prop({ default: 'primary' })
  private openButtonColor?: string

  /**
   * ダイアログ開閉状態。
   */
  private dialog = false
}
</script>
