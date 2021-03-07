<template>
  <v-container class="pa-0">
    <v-row>
      <v-col cols="4" class="py-0">@aik0aaat</v-col>
      <v-spacer></v-spacer>
      <v-col cols="8" class="py-0 text-right">
        ご意見、ご感想は
        <a :href="ideaForm" target="_blank" class="text-decoration-none"
          >こちら</a
        >まで
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import Settings from '~/config/settings'

/**
 * フッター内容。
 */
@Component({
  components: {},
})
export default class FooterContents extends Vue {
  /**
   * 「ご意見、ご感想箱」へのGoogleフォームURL。
   */
  private ideaForm = Settings.ideaForm
}
</script>
