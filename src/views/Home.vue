<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6">Recipe List</h1>
    <div v-if="recipes.length === 0" class="text-gray-500">Loading...</div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-for="recipe in recipes" :key="recipe.id" class="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
        <img :src="recipe.image" alt="" class="w-full h-48 object-cover">
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ recipe.name }}</h2>
          <p class="text-gray-700 mb-4 description-clamp">{{ recipe.description }}</p>
          <router-link :to="'/recipe/' + recipe.id">
            <button class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">View Details</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  computed: {
    recipes() {
      return this.$store.getters.allRecipes;
    }
  },
  created() {
    this.$store.dispatch('fetchRecipes');
  }
}
</script>

<style scoped>
.description-clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
