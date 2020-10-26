<template>
  <div>
    <api-loading
      v-if="fetchState.pending"
      :skelton-loader-row-num="1"
      :skelton-loader-col-num="1"
      skelton-type="card-action"
    />
    <!-- データ取得失敗 -->
    <api-error v-else-if="fetchState.error" />

    <!-- データ表示 -->
    <div v-else>
      <slot name="data"></slot>
    </div>
    <div class="mt-4 grey--text text--darken-2">
      情報最終更新: {{ apiLastUpdateDate }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import { Prop } from 'vue-property-decorator'

import ApiLoading from '@/components/common/api/ApiLoading.vue'
import ApiError from '@/components/common/api/ApiError.vue'

import DateTimeUtil from '@/utils/dateTimeUtil'

/**
 * App情報の概要出力。
 */
@Component({
  components: {
    ApiLoading,
    ApiError,
  },
})
export default class ApiWrapper extends Vue {
  /**
   * $fetchState。
   */
  @Prop({ default: {} })
  fetchState?: any

  /**
   * API最終更新日時。
   */
  private get apiLastUpdateDate() {
    return DateTimeUtil.convertTimestampToDateTime(this.fetchState.timestamp, 1)
  }
}
</script>
