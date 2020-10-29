<template>
  <v-dialog v-model="dialog" width="80vw">
    <template v-slot:activator="{ on, attrs }">
      <v-btn color="primary" v-bind="attrs" block outlined v-on="on">
        <v-icon x-small class="mx-1">fas fa-upload</v-icon>
        インポート
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline"> アプリ情報インポート </v-card-title>
      <v-card-subtitle class="mt-1 body-1">
        移行元のSteam
        Watcherからエクスポートされたテキストを貼り付けてください。
      </v-card-subtitle>

      <v-card-text>
        <validation-observer ref="form" immediate>
          <form>
            <validation-provider
              v-slot="{ errors, valid }"
              name="インポート情報"
              rules="required|appIdList"
            >
              <!-- 入力欄 -->
              <v-textarea
                v-model="importAppIdList"
                class="mt-2"
                :error-messages="errors"
                :success="valid"
                label="アプリ情報"
                clearable
                persistent-hint
                required
              />
            </validation-provider>

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
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import { ValidationProvider } from 'vee-validate'

import { dataModule } from '@/store/modules/dataModule'

/**
 * アプリID情報をエクスポート。
 */
@Component({
  components: {},
})
export default class ImportAppIdList extends Vue {
  $refs!: {
    form: InstanceType<typeof ValidationProvider>
  }

  /**
   * ダイアログ開閉状態。
   */
  private dialog = false

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

    dataModule.setAppIdList(JSON.parse(this.importAppIdList))
  }
}
</script>
