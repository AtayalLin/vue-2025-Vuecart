<template>
  <div class="container py-4">
    <div class="row">
      <!-- 商品列表區 -->
      <div class="col-md-8">
        <h2 class="mb-3">商品列表</h2>
        <ProductList :products="products" @add-to-cart="addToCart" />
      </div>

      <!-- 購物車區 -->
      <div class="col-md-4">
        <ShoppingCart :cart="cart" @remove-from-cart="removeFromCart" />
      </div>
    </div>

    <!-- 通知元件 -->
    <Notification
      :message="message"
      :isSuccess="isSuccess"
      @close-notification="closeNotification"
    />
  </div>
</template>

<script>
import ProductList from './components/ProductList.vue'
import ShoppingCart from './components/ShoppingCart.vue'
import Notification from './components/Notification.vue'
import AOS from 'aos'

export default {
  components: {
    ProductList,
    ShoppingCart,
    Notification,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          name: '耳罩式藍牙耳機',
          description: '舒適配戴，支援降噪技術',
          price: 2490,
          image:
            'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          id: 2,
          name: '耳罩式彩虹耳機',
          description: '時尚彩虹設計，音質極佳',
          price: 1380,
          image:
            'https://images.unsplash.com/photo-1715617133977-aeda55fa2930?q=80&w=500&500=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          id: 3,
          name: '時尚藍牙耳機',
          description: '高音質，時尚設計，舒適佩戴',
          price: 7990,
          image:
            'https://images.unsplash.com/photo-1739764574508-c62f2a48d27b?q=40&w=500&500=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          id: 4,
          name: '機械式鍵盤',
          description: '提供極佳的打字體驗，耐用性高',
          price: 1890,
          image:
            'https://images.unsplash.com/photo-1657165844621-3e13af9e7f24?q=80&w=500&400=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
          id: 5,
          name: '無限滑鼠',
          description: '高精度感應器，無需滑鼠墊',
          price: 890,
          image:
            'https://images.unsplash.com/photo-1703672997131-f9719f140236?q=80&w=500&500=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
      ],
      cart: [],
      message: '',
      isSuccess: true, // 默認為成功
    }
  },
  methods: {
    addToCart(product) {
      const existingProduct = this.cart.find((item) => item.id === product.id)
      if (existingProduct) {
        existingProduct.quantity += 1
      } else {
        this.cart.push({ ...product, quantity: 1 })
      }
      this.isSuccess = true // 設為成功，顯示綠色背景
      this.showNotification(`${product.name} 已加入購物車`)
    },
    removeFromCart(productId) {
      const index = this.cart.findIndex((item) => item.id === productId)
      if (index > -1) {
        this.cart.splice(index, 1)
        this.isSuccess = false // 設為失敗，顯示紅色背景
        this.showNotification('商品已從購物車移除')
      }
    },
    showNotification(message) {
      this.message = message
      setTimeout(() => {
        this.message = ''
      }, 3000)
    },
    closeNotification() {
      this.message = ''
    },
  },
  provide() {
    return {
      message: this.message,
    }
  },
  mounted() {
    AOS.init({
      duration: 1000, // 動畫持續時間
      once: true, // 動畫只執行一次
    })
  },
}
</script>
