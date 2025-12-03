<template>
  <v-app>
    <v-app-bar color="primary" prominent>
      <v-app-bar-nav-icon
        variant="text"
        color="white"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="app-title">
        <router-link to="/" class="title-link">
          <v-icon icon="mdi-chef-hat" size="large" class="mr-2" color="white"></v-icon>
          Recipe Explorer
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="hidden-sm-and-down">
        <v-btn
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          variant="text"
          color="white"
          class="mx-1"
        >
          <v-icon :icon="link.icon" class="mr-1"></v-icon>
          {{ link.text }}
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" temporary>
      <v-list>
        <v-list-item
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          link
        >
          <template v-slot:prepend>
            <v-icon :icon="link.icon"></v-icon>
          </template>
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <router-view />
    </v-main>

    <v-footer class="bg-secondary text-center">
      <v-row justify="center" no-gutters>
        <v-col cols="12" class="py-4">
          <p class="text-white mb-2">
            <v-icon icon="mdi-chef-hat" class="mr-2"></v-icon>
            Recipe Explorer
          </p>
          <p class="text-white text-caption">
            &copy; {{ new Date().getFullYear() }} Recipe Explorer. Built with Vue.js & Vuetify
          </p>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const drawer = ref(false)

const navLinks = [
  { text: 'Home', to: '/', icon: 'mdi-home' },
  { text: 'Recipes', to: '/recipes', icon: 'mdi-food' },
  { text: 'Contact', to: '/about', icon: 'mdi-email' }
]
</script>