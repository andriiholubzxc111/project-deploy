<template>
  <div class="contact-view">
    <h1>Контакти</h1>
    <p>Будь ласка, зв'яжіться з нами за наступною інформацією:</p>
    <div class="contact-info">
      <p><strong>Адреса:</strong> Вулиця Корзо, 21, Ужгород, Україна</p>
      <p><strong>Телефон:</strong> +380 123 456 789</p>
      <p><strong>Email:</strong> example@realestateagency.ua</p>
      <p><strong>Режим роботи:</strong> Пн-Пт з 09:00 до 18:00</p>
    </div>
    <h2>Ми завжди раді допомогти вам!</h2>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
}
</script>

<style scoped>
.contact-view {
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

.contact-info p {
  margin: 8px 0;
  font-size: 16px;
}

h2 {
  margin-top: 20px;
  text-align: center;
  color: #4CAF50;
}
</style>
