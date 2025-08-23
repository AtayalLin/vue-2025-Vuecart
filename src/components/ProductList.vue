<template>
  <div class="row">
    <div
      class="col-md-4 mb-4 product-card"
      v-for="product in products"
      :key="product.id"
      :data-aos="'flip-left'"
    >
      <div class="card h-100">
        <img :src="product.image" :alt="product.name" class="card-img-top" />
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-text">{{ product.description }}</p>
          <p class="fw-bold text-primary">${{ product.price }}</p>
          <button class="btn btn-success w-100" @click="addToCart(product)">加入購物車</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from 'aos' // 引入 AOS

export default {
  props: {
    products: Array,
  },
  methods: {
    addToCart(product) {
      this.$emit('add-to-cart', product)

      // 等待 DOM 更新完成後，刷新 AOS 動畫
      this.$nextTick(() => {
        AOS.refresh() // 刷新 AOS 動畫
      })
    },
  },
}
</script>

<style scoped>
.card-img-top {
  height: 150px;
  object-fit: cover;
}

.product-card {
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-10px); /* 上浮效果 */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* 漂浮陰影效果 */
}
</style>
