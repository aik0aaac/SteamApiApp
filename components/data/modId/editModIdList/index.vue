<template>
  <modal-template
    open-button-text="お気に入りMODを編集"
    open-button-color="primary"
    :open-button-outlined="true"
  >
    <template #main>
      <v-card>
        <v-card-title class="headline"> 登録中のMODを変更 </v-card-title>

        <v-card-text>
          <!-- 登録済みのMOD IDリスト -->
          <mod-id-list />

          <!-- 注意文言 -->
          <v-alert outlined type="warning" class="body-2">
            MODの情報は
            <span class="font-weight-bold">ブラウザ内</span>
            に保持されます。<br />
            別端末や別ブラウザから閲覧すると登録しなおしになるのでご注意を。
          </v-alert>

          <!-- MOD IDの追加欄 -->
          <add-mod-id />
        </v-card-text>
      </v-card>
    </template>
  </modal-template>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'

import ModalTemplate from '@/components/common/template/ModalTemplate.vue'
import ModIdList from './ModIdList.vue'
import AddModId from './AddModId.vue'

/**
 * 登録中のMOD IDを変更。
 */
@Component({
  components: {
    ModalTemplate,
    ModIdList,
    AddModId,
  },
})
export default class EditModIdList extends Vue {}
</script>
