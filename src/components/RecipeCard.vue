<template>
  <v-card class="recipe-card card-hover" elevation="3">
    <v-img
      :src="recipe.image"
      height="200"
      cover
      class="recipe-image"
    >
      <div class="difficulty-badge">
        <v-chip
          :color="difficultyColor"
          size="small"
          class="ma-2"
        >
          {{ recipe.difficulty }}
        </v-chip>
      </div>
    </v-img>

    <v-card-title class="recipe-title">
      {{ recipe.title }}
    </v-card-title>

    <v-card-subtitle class="recipe-subtitle">
      <v-icon icon="mdi-clock-outline" size="small" class="mr-1"></v-icon>
      {{ recipe.time }} mins
      <v-icon icon="mdi-account-group" size="small" class="ml-3 mr-1"></v-icon>
      {{ recipe.servings }} servings
    </v-card-subtitle>

    <v-card-text class="recipe-description">
      {{ recipe.description }}
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="primary"
        variant="flat"
        block
        :to="`/recipe/${recipe.id}`"
      >
        View Recipe
        <v-icon icon="mdi-arrow-right" class="ml-2"></v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Recipe {
  id: number
  title: string
  description: string
  image: string
  time: number
  servings: number
  difficulty: string
  category: string
}

const props = defineProps<{
  recipe: Recipe
}>()

const difficultyColor = computed(() => {
  switch (props.recipe.difficulty.toLowerCase()) {
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