<template>
  <div class="position-fixed top-0 end-0 p-3" style="z-index: 1050">
    <div
      v-for="(msg, idx) in injectedMessages"
      :key="idx"
      class="toast show align-items-center text-white mb-2"
      :class="{ 'bg-success': msg.isSuccess, 'bg-danger': !msg.isSuccess }"
      style="border-radius: 5px"
      :data-aos="'fade-up'"
    >
      <div class="d-flex">
        <div class="toast-body">{{ msg.text }}</div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          @click="close(idx)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, computed } from 'vue'

export default {
  setup() {
    // 從父層注入訊息佇列與關閉方法
    const injectedMessages = inject(
      'messages',
      computed(() => []),
    )
    const closeNotification = inject('closeNotification', () => {})

    const close = (idx) => closeNotification(idx)

    return {
      injectedMessages,
      close,
    }
  },
}
</script>

<style scoped>
.toast {
  min-width: 250px;
  padding: 10px 20px;
  font-size: 16px;
}
</style>
