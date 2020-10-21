<template>
  <div>
    <div class="title">現在登録中のアプリ</div>
    <v-card width="460px">
      <v-img
        contain
        :src="`https://cdn.cloudflare.steamstatic.com/steam/apps/${appId}/header.jpg`"
      />
      <v-card-text>
        <v-btn
          block
          color="primary"
          class="mb-2"
          :href="`https://store.steampowered.com/app/${appId}/`"
          target="_blank"
          ><v-icon x-small class="mr-2">fas fa-external-link-alt</v-icon>
          ストアページへ
        </v-btn>
        <v-btn
          block
          color="primary"
          :href="`https://steamcommunity.com/app/${appId}/`"
          target="_blank"
          ><v-icon x-small class="mr-2">fas fa-external-link-alt</v-icon>
          コミュニティハブへ
        </v-btn>
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
}
</script>
