<template>
  <div
    v-if="message"
    class="position-fixed top-0 end-0 p-3"
    style="z-index: 1050"
    :data-aos="'fade-up'"
  >
    <div
      class="toast show align-items-center text-white"
      :class="{ 'bg-success': isSuccess, 'bg-danger': !isSuccess }"
      style="border-radius: 5px"
    >
      <div class="d-flex">
        <div class="toast-body">{{ message }}</div>
        <button
          type="button"
          class="btn-close btn-close-white me-2 m-auto"
          @click="closeNotification"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
    isSuccess: Boolean, // 這是用來根據背景顏色來判斷是否成功
  },
  methods: {
    closeNotification() {
      this.$emit('close-notification')
    },
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
