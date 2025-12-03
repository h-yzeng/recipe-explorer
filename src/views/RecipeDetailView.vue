<template>
  <div class="recipe-detail-view">
    <v-container v-if="recipe" class="py-8">
      <v-row>
        <v-col cols="12">
          <v-btn
            variant="text"
            color="primary"
            @click="goBack"
          >
            <v-icon icon="mdi-arrow-left" class="mr-2"></v-icon>
            Back to Recipes
          </v-btn>
        </v-col>
      </v-row>

      <v-row class="mt-4">
        <v-col cols="12" md="6">
          <v-img
            :src="recipe.image"
            height="400"
            cover
            class="rounded-lg"
          ></v-img>
        </v-col>

        <v-col cols="12" md="6">
          <h1 class="text-h3 font-weight-bold mb-4">{{ recipe.title }}</h1>
          
          <div class="d-flex align-center mb-4 flex-wrap">
            <v-chip color="primary" class="mr-2 mb-2">
              <v-icon icon="mdi-tag" class="mr-1"></v-icon>
              {{ recipe.category }}
            </v-chip>
            <v-chip :color="difficultyColor" class="mr-2 mb-2">
              {{ recipe.difficulty }}
            </v-chip>
          </div>

          <p class="text-h6 mb-6">{{ recipe.description }}</p>

          <v-row class="mb-4">
            <v-col cols="4">
              <v-card variant="tonal" color="primary">
                <v-card-text class="text-center">
                  <v-icon icon="mdi-clock-outline" size="32" class="mb-2"></v-icon>
                  <div class="text-h6">{{ recipe.time }} min</div>
                  <div class="text-caption">Prep Time</div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card variant="tonal" color="success">
                <v-card-text class="text-center">
                  <v-icon icon="mdi-account-group" size="32" class="mb-2"></v-icon>
                  <div class="text-h6">{{ recipe.servings }}</div>
                  <div class="text-caption">Servings</div>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="4">
              <v-card variant="tonal" color="warning">
                <v-card-text class="text-center">
                  <v-icon icon="mdi-chef-hat" size="32" class="mb-2"></v-icon>
                  <div class="text-h6">{{ recipe.difficulty }}</div>
                  <div class="text-caption">Level</div>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row class="mt-8">
        <v-col cols="12" md="5">
          <v-card elevation="2">
            <v-card-title class="bg-primary text-white">
              <v-icon icon="mdi-format-list-bulleted" class="mr-2"></v-icon>
              Ingredients
            </v-card-title>
            <v-card-text>
              <v-list density="compact">
                <v-list-item
                  v-for="(ingredient, index) in recipe.ingredients"
                  :key="index"
                >
                  <template v-slot:prepend>
                    <v-icon icon="mdi-check-circle" color="success"></v-icon>
                  </template>
                  <v-list-item-title>{{ ingredient }}</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col cols="12" md="7">
          <v-card elevation="2">
            <v-card-title class="bg-secondary text-white">
              <v-icon icon="mdi-book-open-variant" class="mr-2"></v-icon>
              Instructions
            </v-card-title>
            <v-card-text>
              <v-timeline side="end" density="compact">
                <v-timeline-item
                  v-for="(instruction, index) in recipe.instructions"
                  :key="index"
                  :dot-color="index === recipe.instructions.length - 1 ? 'success' : 'primary'"
                  size="small"
                >
                  <div class="mb-3">
                    <div class="font-weight-bold text-h6 mb-1">Step {{ index + 1 }}</div>
                    <div>{{ instruction }}</div>
                  </div>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container v-else class="py-12">
      <v-row>
        <v-col cols="12" class="text-center">
          <v-icon icon="mdi-alert-circle" size="64" color="error"></v-icon>
          <p class="text-h5 mt-4">Recipe not found</p>
          <v-btn color="primary" to="/recipes" class="mt-4">
            Browse All Recipes
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { recipes, type Recipe } from '@/data/recipes'

const route = useRoute()
const router = useRouter()

const goBack = () => {
  router.back()
}

const recipe = computed(() => {
  const id = parseInt(route.params.id as string)
  return recipes.find((r: Recipe) => r.id === id)
})

const difficultyColor = computed(() => {
  if (!recipe.value) return 'info'
  switch (recipe.value.difficulty.toLowerCase()) {
    case 'easy':
      return 'success'
    case 'medium':
      return 'warning'
    case 'hard':
      return 'error'
    default:
      return 'info'
  }
})
</script>