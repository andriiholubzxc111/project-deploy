<template>
  <v-app>
    <v-spacer>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Агенство Нерухомості</v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/" class="nav-link">Головна</router-link>
      <router-link to="/offers" class="nav-link">Пропозиції</router-link>
      <router-link to="/sell" class="nav-link">Продати</router-link>
      <router-link to="/contact" class="nav-link">Контакти</router-link>
      </v-spacer>
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
  name: 'App',
}
</script>

<style scoped>
.v-application {
  font-family: 'Roboto', sans-serif;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin-right: 16px;
}

.nav-link:hover {
  text-decoration: underline;
}

.main-container {
  max-width: 100%;
  padding: 16px;
  box-sizing: border-box;
  margin-top: 64px; /* Відступ зверху для запобігання перекриттю з навігаційною панеллю */
}
</style>
