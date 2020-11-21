<template>
  <modal-template
    open-button-text="インポート"
    open-button-icon="fas fa-upload"
    open-button-color="primary"
    :open-button-outlined="true"
  >
    <template #main>
      <v-card>
        <v-card-title class="headline"> アプリ情報インポート </v-card-title>
        <v-card-subtitle class="mt-1 body-1">
          移行元のSteam
          Watcherからエクスポートされたテキストを貼り付けてください。
        </v-card-subtitle>

        <v-card-text>
          <validation-observer ref="form" immediate>
            <form>
              <text-field
                v-model="importAppIdList"
                rules="required|appIdList"
                label="アプリ情報"
              />
              <!-- 登録ボタン -->
              <v-btn color="primary" block class="mt-2" @click="onclickHandler">
                登録
              </v-btn>
              <v-btn
                color="primary"
                outlined
                block
                class="mt-2"
                @click="dialog = false"
              >
                キャンセル
              </v-btn>
            </form>
          </validation-observer>
        </v-card-text>
      </v-card>
    </template>
  </modal-template>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import { ValidationProvider } from 'vee-validate'

import ModalTemplate from '@/components/common/template/ModalTemplate.vue'
import TextField from '@/components/common/formParts/TextField.vue'

import { appIdDataModule } from '@/store/modules/dataModule/appIdDataModule'

/**
 * アプリID情報をインポート。
 */
@Component({
  components: {
    ModalTemplate,
    TextField,
  },
})
export default class ImportAppIdList extends Vue {
  $refs!: {
    form: InstanceType<typeof ValidationProvider>
  }

  /**
   * 入力されるアプリ情報。
   */
  private importAppIdList = ''

  /**
   * 登録ボタン押下時のハンドラー。
   */
  private async onclickHandler() {
    // エラー状態であれば何もしない
    const result = await this.$refs.form.validate()
    if (!result) {
      return
    }

    appIdDataModule.setAppIdList(JSON.parse(this.importAppIdList))
  }
}
</script>
