<template>
  <div class="sell-view-container">
    <h1>Виставити пропозицію</h1>
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="description">Опис об'єкту</label>
        <input type="text" id="description" v-model="offer.description" required>
      </div>
      <div class="form-group">
        <label for="district">Район</label>
        <input type="text" id="district" v-model="offer.district" required>
      </div>
      <div class="form-group">
        <label for="imgSrc">URL-Посилання</label>
        <input type="text" id="imgSrc" v-model="offer.imgSrc" required>
      </div>
      <div class="form-group">
        <label for="phone_number">Номер телефону</label>
        <input type="text" id="phone_number" v-model="offer.phone_number" required>
      </div>
      <div class="form-group">
        <label for="pib">ПІБ</label>
        <input type="text" id="pib" v-model="offer.pib" required>
      </div>
      <div class="form-group">
        <label for="price">Ціна</label>
        <input type="number" id="price" v-model="offer.price" required>
      </div>
      <div class="form-group">
        <label for="square_meters">Кількість квадратних метрів</label>
        <input type="number" id="square_meters" v-model="offer.square_meters" required>
      </div>
      <div class="form-group">
        <label for="street">Вулиця</label>
        <input type="text" id="street" v-model="offer.street" required>
      </div>
      <button type="submit">Відправити</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { addDoc, collection } from 'firebase/firestore';
import firebaseDB from '@/firebase-config';

export default {
  name: 'SellView',
  setup() {
    const offer = ref({
      description: '',
      district: '',
      imgSrc: '',
      phone_number: '',
      pib: '',
      price: null,
      square_meters: null,
      street: ''
    });

    const submit = async () => {
      try {
        await addDoc(collection(firebaseDB, 'productData'), offer.value);
        alert('Пропозицію успішно додано!');
        offer.value = {
          description: '',
          district: '',
          imgSrc: '',
          phone_number: '',
          pib: '',
          price: null,
          square_meters: null,
          street: ''
        };
      } catch (e) {
        console.error('Error adding document: ', e);
        alert('Виникла помилка при додаванні пропозиції');
      }
    };

    return {
      offer,
      submit
    };
  }
}
</script>

<style scoped>
.sell-view-container {
  max-width: 600px;
  margin: 32px auto;
  padding: 16px;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h1 {
  margin-bottom: 20px;
  text-align: center;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
}
</style>
