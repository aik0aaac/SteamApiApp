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
    最終更新: {{ apiLastUpdateDate }}
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'nuxt-class-component'
import { Prop } from 'vue-property-decorator'

import ApiLoading from '@/components/common/api/ApiLoading.vue'
import ApiError from '@/components/common/api/ApiError.vue'

import TimestampUtil from '@/utils/timestampUtil'
const timestampUtil = new TimestampUtil()

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
  get apiLastUpdateDate() {
    return timestampUtil.convertToDateTime(this.fetchState.timestamp)
  }
}
</script>
