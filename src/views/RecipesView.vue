<template>
  <div class="recipes-view">
    <HeroSection
      title="All Recipes"
      subtitle="Browse our complete collection of delicious recipes"
    />

    <v-container class="section-padding">
      <v-row class="mb-6">
        <v-col cols="12" md="6">
          <v-text-field
            v-model="searchQuery"
            label="Search recipes..."
            prepend-inner-icon="mdi-magnify"
            variant="outlined"
            clearable
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="6">
          <v-select
            v-model="selectedCategory"
            :items="categories"
            label="Filter by category"
            prepend-inner-icon="mdi-filter"
            variant="outlined"
            clearable
            hide-details
          ></v-select>
        </v-col>
      </v-row>

      <v-row v-if="filteredRecipes.length > 0">
        <v-col
          v-for="recipe in filteredRecipes"
          :key="recipe.id"
          cols="12"
          sm="6"
          md="4"
          lg="3"
        >
          <RecipeCard :recipe="recipe" />
        </v-col>
      </v-row>

      <v-row v-else>
        <v-col cols="12" class="text-center py-12">
          <v-icon icon="mdi-food-off" size="64" color="grey"></v-icon>
          <p class="text-h6 mt-4 text-medium-emphasis">
            No recipes found. Try adjusting your search or filters.
          </p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import HeroSection from '@/components/HeroSection.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import { recipes, type Recipe } from '@/data/recipes'

const searchQuery = ref('')
const selectedCategory = ref('')

const categories = computed(() => {
  const cats = [...new Set(recipes.map((r: Recipe) => r.category))]
  return ['All', ...cats]
})

const filteredRecipes = computed(() => {
  return recipes.filter((recipe: Recipe) => {
    const matchesSearch = recipe.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                         recipe.description.toLowerCase().includes(searchQuery.value.toLowerCase())

    const matchesCategory = !selectedCategory.value ||
                           selectedCategory.value === 'All' ||
                           recipe.category === selectedCategory.value

    return matchesSearch && matchesCategory
  })
})
</script>