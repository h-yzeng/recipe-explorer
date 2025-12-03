<template>
  <div class="contact-view">
    <HeroSection
      title="Get in Touch"
      subtitle="Have questions or feedback? I would love to hear from you!"
    />

    <v-container class="section-padding">
      <v-row>
        <v-col cols="12" md="8" offset-md="2">
          <v-card elevation="3" class="pa-6">
            <h2 class="text-h4 font-weight-bold mb-6 text-primary">Contact Information</h2>

            <p class="text-body-1 mb-6">
              Recipe Explorer is a student project created to demonstrate modern web development
              skills using Vue 3, TypeScript, and Vuetify. Feel free to reach out with any questions
              or suggestions!
            </p>

            <v-row class="mb-6">
              <v-col
                v-for="contact in contactMethods"
                :key="contact.title"
                cols="12"
                md="6"
              >
                <v-card variant="tonal" :color="contact.color" class="pa-4">
                  <div class="d-flex align-center">
                    <v-icon
                      :icon="contact.icon"
                      size="40"
                      class="mr-4"
                    ></v-icon>
                    <div>
                      <h4 class="text-h6 font-weight-bold mb-1">{{ contact.title }}</h4>
                      <p class="text-body-2 mb-0">{{ contact.value }}</p>
                    </div>
                  </div>
                </v-card>
              </v-col>
            </v-row>

            <v-divider class="my-6"></v-divider>

            <h3 class="text-h5 font-weight-bold mb-4 text-primary">Project Information</h3>

            <p class="text-body-1 mb-4">
              This application showcases:
            </p>

            <v-list>
              <v-list-item
                v-for="feature in projectFeatures"
                :key="feature"
                :prepend-icon="'mdi-check-circle'"
              >
                <v-list-item-title>{{ feature }}</v-list-item-title>
              </v-list-item>
            </v-list>

            <v-divider class="my-6"></v-divider>

            <h3 class="text-h5 font-weight-bold mb-4 text-primary">Technologies Used</h3>

            <v-row>
              <v-col
                v-for="tech in technologies"
                :key="tech.name"
                cols="6"
                md="3"
              >
                <v-card variant="tonal" color="success" class="text-center pa-4">
                  <v-icon :icon="tech.icon" size="48" class="mb-2"></v-icon>
                  <div class="font-weight-bold">{{ tech.name }}</div>
                </v-card>
              </v-col>
            </v-row>

            <div class="text-center mt-8">
              <v-btn
                color="primary"
                size="large"
                to="/recipes"
                class="mr-3"
              >
                Browse Recipes
                <v-icon icon="mdi-arrow-right" class="ml-2"></v-icon>
              </v-btn>
              <v-btn
                color="success"
                size="large"
                href="https://github.com"
                target="_blank"
                variant="outlined"
              >
                <v-icon icon="mdi-github" class="mr-2"></v-icon>
                View on GitHub
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'

const contactMethods = [
  {
    icon: 'mdi-email',
    title: 'Email',
    value: 'hzeng9@hawk.illinoistech.edu',
    color: 'primary'
  },
  {
    icon: 'mdi-github',
    title: 'GitHub',
    value: 'github.com/h-yzeng/recipe-explorer',
    color: 'secondary'
  },
  {
    icon: 'mdi-school',
    title: 'Institution',
    value: 'Illinois Institute of Technology',
    color: 'accent'
  },
  {
    icon: 'mdi-web',
    title: 'Deployment',
    value: 'vue-recipe-explorer-app.vercel.app',
    color: 'success'
  }
]

const projectFeatures = [
  'Modern Vue 3 composition API with TypeScript',
  'Responsive design with Vuetify Material Design components',
  'Dynamic routing with Vue Router',
  'Component-based architecture',
  'SCSS styling with modern design patterns',
  'Build optimization with Vite'
]

const technologies = [
  { name: 'Vue.js', icon: 'mdi-vuejs' },
  { name: 'Vuetify', icon: 'mdi-vuetify' },
  { name: 'TypeScript', icon: 'mdi-language-typescript' },
  { name: 'Vite', icon: 'mdi-lightning-bolt' }
]
</script>
