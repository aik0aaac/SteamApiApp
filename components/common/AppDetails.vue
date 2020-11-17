<template>
  <div>
    <v-card max-width="460px">
      <v-img
        contain
        :src="`https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/header.jpg`"
      />
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" class="pt-0">
            <v-btn
              block
              color="primary"
              :href="`https://store.steampowered.com/app/${appId}/`"
              target="_blank"
              ><v-icon x-small class="mr-2">fas fa-external-link-alt</v-icon>
              ストアページへ
            </v-btn>
          </v-col>
          <v-col cols="12" sm="6" class="pt-0">
            <v-btn
              block
              color="primary"
              :href="`https://steamcommunity.com/app/${appId}/`"
              target="_blank"
              ><v-icon x-small class="mr-2">fas fa-external-link-alt</v-icon>
              コミュニティハブへ
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator'

/**
 * App情報の概要出力。
 */
@Component({})
export default class AppDetails extends Vue {
  /**
   * アプリID。
   */
  @Prop({ default: '' })
  appId!: string

  /**
   * アプリIDを格納している対象のVuexModule。
   */
  @Prop({ default: () => ({}) })
  appIdSetter!: Function

  /**
   * アプリID登録or更新ボタンのハンドラー。
   */
  private appIdRegistrationHandler(appId: string) {
    // アプリIDをセット。
    this.appIdSetter(appId)
  }
}
</script>
