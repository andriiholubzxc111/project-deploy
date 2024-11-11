<template>
  <div class="product-item">
    <img :src="product?.imgSrc" alt="Image not found" class="img">
    <h2>{{ product?.description }}</h2>
    <p><strong>Район:</strong> {{ product?.district }}</p>
    <p><strong>Телефон:</strong> {{ product?.phone_number }}</p>
    <p><strong>Власник:</strong> {{ product?.pib }}</p>
    <p><strong>Ціна:</strong> {{ product?.price }} грн</p>
    <p><strong>Площа:</strong> {{ product?.square_meters }} м²</p>
    <p><strong>Вулиця:</strong> {{ product?.street }}</p>
    <button @click="goToDetails">Деталі</button>
    <button @click="deleteProduct">Видалити</button>
  </div>
</template>

<script>
import DbOperations from '@/store/helpers/DbOperations';

const productDb = new DbOperations('productData');

export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToDetails() {
      this.$router.push(`/offers/${this.product.id}`);
    },
    async deleteProduct() {
      if (confirm(`Ви впевнені, що хочете видалити продукт "${this.product.description}"?`)) {
        try {
          await productDb.deleteItem(this.product.id);
          alert('Продукт успішно видалено');
          this.$emit('productDeleted', this.product.id);
        } catch (error) {
          console.error('Error deleting document: ', error);
          alert('Виникла помилка при видаленні продукту');
        }
      }
    }
  }
}
</script>

<style scoped>
.product-item {
  margin: 16px; 
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  width: 100%; 
  box-sizing: border-box; 
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 16px;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 8px;
  text-align: center;
}

p {
  margin: 4px 0;
  text-align: center;
}

button {
  display: inline-block;
  margin-top: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #4CAF50;
  color: white;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

button:nth-child(2) {
  background-color: #f44336;
}

button:nth-child(2):hover {
  background-color: #e53935;
}
</style>
