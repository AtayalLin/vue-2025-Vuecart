<template>
  <div>
    <h2 class="mb-3">購物車</h2>
    <!-- 當購物車為空時顯示訊息 -->
    <p v-if="cart.length === 0">目前購物車無商品</p>

    <ul class="list-group mb-3" v-if="cart.length > 0">
      <li
        class="list-group-item d-flex justify-content-between align-items-center"
        v-for="item in cart"
        :key="item.id"
      >
        <div>
          <h6 class="my-0">{{ item.name }}</h6>
          <small class="text-muted">數量：{{ item.quantity }}</small>
        </div>
        <div>
          <span class="text-muted">${{ item.price * item.quantity }}</span>
          <button class="btn btn-sm btn-outline-danger ms-2" @click="removeFromCart(item.id)">
            移除
          </button>
        </div>
      </li>
      <li class="list-group-item d-flex justify-content-between">
        <strong>總金額</strong>
        <span class="fw-bold">${{ totalAmount }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    cart: Array,
  },
  computed: {
    totalAmount() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
  },
  methods: {
    removeFromCart(productId) {
      this.$emit('remove-from-cart', productId)
    },
  },
}
</script>
