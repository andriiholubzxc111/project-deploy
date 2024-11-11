<template>
  <v-container class="product-details-container">
    <v-row>
      <v-col cols="12">
        <h1>Деталі продукту</h1>
        <div class="product-details" v-if="product">
          <img :src="product.imgSrc" class="product-image" alt="Image not found">
          <h2>{{ product.description }}</h2>
          <p><strong>Район:</strong> {{ product.district }}</p>
          <p><strong>Телефон:</strong> {{ product.phone_number }}</p>
          <p><strong>Власник:</strong> {{ product.pib }}</p>
          <p><strong>Ціна:</strong> {{ product.price }} грн</p>
          <p><strong>Площа:</strong> {{ product.square_meters }} м²</p>
          <p><strong>Вулиця:</strong> {{ product.street }}</p>
        </div>
        <v-alert v-else type="error">Продукт не знайдено</v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { ref, onMounted } from 'vue';
import { doc, getDoc } from 'firebase/firestore'; 
import firebaseDB from '@/firebase-config'; 

export default {
  name: 'ProductDetails',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const product = ref(null);
    const error = ref(null);

    onMounted(() => {
      console.log('Fetching product details for ID:', props.id); 
      const docRef = doc(firebaseDB, 'productData', props.id); 

      getDoc(docRef).then((docSnap) => {
        if (docSnap.exists()) {
          product.value = docSnap.data();
          product.value.id = docSnap.id; 
          console.log('Product Data:', product.value); 
        } else {
          error.value = 'Продукт не знайдено';
          console.error('No such document!');
        }
      }).catch((err) => {
        error.value = err.message;
        console.error('Error fetching document:', err);
      });
    });

    return { product, error };
  }
}
</script>

<style scoped>
.product-details-container {
  max-width: 100%;
  padding: 16px;
  box-sizing: border-box;
  margin-top: 64px; 
}

.product-details {
  margin: 16px 0;
  width: 100%;
  text-align: left;
  background-color: #ffffff;
  padding: 16px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.product-details img.product-image {
  max-width: 100%;
  height: auto;
  max-height: 400px;
  width: auto;
}
</style>
