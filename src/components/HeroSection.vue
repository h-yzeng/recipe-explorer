<template>
  <section class="hero-section">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="10" lg="8">
          <div class="hero-content text-center">
            <h1 class="hero-title text-gradient mb-4">
              {{ title }}
            </h1>
            <p class="hero-subtitle text-h6 mb-6">
              {{ subtitle }}
            </p>
            <slot name="actions"></slot>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()

defineSlots<{
  actions(): any
}>()
</script>