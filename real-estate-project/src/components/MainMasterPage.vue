<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Агенство Нерухомості</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text to="/">Головна</v-btn>
      <v-btn text to="/offers">Пропозиції</v-btn>
      <v-btn text to="/sell">Продати</v-btn>
      <v-btn text to="/contact">Контакти</v-btn>
    </v-app-bar>
    
    <v-main>
      <v-container class="main-container">
        <router-view></router-view>
      </v-container>
    </v-main>
    
    <v-footer color="primary" app>
      <v-spacer></v-spacer>
      <div class="white--text">&copy; 2024 Агенство Нерухомості</div>
      <v-spacer></v-spacer>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'MainMasterPage',
}
</script>

<style scoped>
.v-application {
  font-family: 'Roboto', sans-serif;
}

.main-container {
  max-width: 100%;
  padding: 16px;
  box-sizing: border-box;
}

.product-details {
  margin: 16px 0;
  width: 100%;
  text-align: left; 
}
</style>
