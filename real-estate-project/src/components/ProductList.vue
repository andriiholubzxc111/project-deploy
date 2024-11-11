<template>
  <div class="product-list-container">
    <div class="sort-controls">
      <label for="sort">Сортувати за ціною:</label>
      <select v-model="sortOrder">
        <option value="asc">Від найменшого</option>
        <option value="desc">Від найбільшого</option>
      </select>
    </div>
    <div class="product-list-row" v-for="product in sortedProducts" :key="product.id">
      <ProductItem :product="product" @productDeleted="removeProduct"/>
    </div>
  </div>
</template>

<script>
import ProductItem from './ProductItem.vue';
import DbOperations from '@/store/helpers/DbOperations';

const productDb = new DbOperations('productData');

export default {
  name: 'ProductList',
  components: {
    ProductItem
  },
  data() {
    return {
      products: [],
      sortOrder: 'asc',
      loading: false,
      error: null
    };
  },
  computed: {
    sortedProducts() {
      return [...this.products].sort((a, b) => {
        if (this.sortOrder === 'asc') {
          return a.price - b.price;
        } else {
          return b.price - a.price;
        }
      });
    }
  },
  created() {
    this.loadProducts();
  },
  methods: {
    loadProducts() {
      this.loading = true;
      this.error = null;
      productDb.loadItemsList()
        .then(products => {
          this.products = products;
        })
        .catch(error => {
          this.error = error;
        })
        .finally(() => {
          this.loading = false;
        });
    },
    removeProduct(productId) {
      this.products = this.products.filter(product => product.id !== productId);
    }
  }
}
</script>

<style scoped>
.product-list-container {
  display: flex;
  flex-direction: column;
  padding: 16px;
}

.sort-controls {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
  margin-top: 100px; 
}

.sort-controls label {
  margin-right: 8px;
}

.select-wrapper {
  position: relative;
}

.product-list-row {
  display: flex;
  flex: 1 1 calc(33.333% - 16px);
  margin: 8px;
  box-sizing: border-box;
}
</style>
