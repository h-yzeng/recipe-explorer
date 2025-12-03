<template>
  <div class="home-view">
    <HeroSection
      title="Discover Amazing Recipes"
      subtitle="Explore delicious recipes from around the world and elevate your cooking game"
    >
      <template #actions>
        <v-btn
          color="accent"
          size="x-large"
          variant="flat"
          to="/recipes"
          class="px-8"
          style="color: white; font-weight: 700; box-shadow: 0 4px 20px rgba(255, 179, 0, 0.4);"
        >
          Browse Recipes
          <v-icon icon="mdi-arrow-right" class="ml-2"></v-icon>
        </v-btn>
      </template>
    </HeroSection>

    <v-container class="section-padding">
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3 font-weight-bold mb-4">Why Choose Recipe Explorer?</h2>
          <p class="text-h6 text-medium-emphasis">
            Your one-stop destination for culinary inspiration
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="feature in features"
          :key="feature.title"
          cols="12"
          md="4"
        >
          <v-card class="feature-card" elevation="0">
            <div class="feature-icon">
              <v-icon
                :icon="feature.icon"
                size="64"
                color="primary"
              ></v-icon>
            </div>
            <h3 class="text-h5 font-weight-bold mb-3">{{ feature.title }}</h3>
            <p class="text-body-1">{{ feature.description }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-container class="section-padding" style="background: linear-gradient(180deg, #F1F8E9 0%, #FFFEF7 100%); padding: 4rem 1rem;">
      <v-row>
        <v-col cols="12" class="text-center mb-8">
          <h2 class="text-h3 font-weight-bold mb-4" style="color: #558B2F;">Featured Recipes</h2>
          <p class="text-h6" style="color: #7CB342;">
            Check out some of our most popular dishes
          </p>
        </v-col>
      </v-row>

      <v-row>
        <v-col
          v-for="recipe in featuredRecipes"
          :key="recipe.id"
          cols="12"
          sm="6"
          md="4"
        >
          <RecipeCard :recipe="recipe" />
        </v-col>
      </v-row>

      <v-row class="mt-8">
        <v-col cols="12" class="text-center">
          <v-btn
            color="success"
            size="large"
            variant="flat"
            to="/recipes"
            style="font-weight: 600; letter-spacing: 0.5px;"
          >
            View All Recipes
            <v-icon icon="mdi-arrow-right" class="ml-2"></v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import RecipeCard from '@/components/RecipeCard.vue'
import { recipes } from '@/data/recipes'

const features = [
  {
    icon: 'mdi-chef-hat',
    title: 'Diverse Cuisines',
    description: 'Explore recipes from Italian, Asian, American, and more culinary traditions.'
  },
  {
    icon: 'mdi-clock-fast',
    title: 'Quick & Easy',
    description: 'Find recipes that fit your schedule, from quick meals to elaborate feasts.'
  },
  {
    icon: 'mdi-star',
    title: 'Quality Tested',
    description: 'Every recipe is carefully curated to ensure delicious results every time.'
  }
]

const featuredRecipes = recipes.slice(0, 3)
</script>