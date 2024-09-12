<template>
  <div class="container mx-auto p-4">
    <div v-if="recipe" class="flex flex-col md:flex-row border rounded-lg overflow-hidden shadow-md">

      <div class="w-full md:w-1/2 flex justify-center items-center">
        <img :src="recipe.image" alt="" class="w-full h-fit object-cover">
      </div>
      
      <div class="w-full md:w-1/2 p-4 flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <h1 class="text-3xl font-bold">{{ recipe.name }}</h1>
            <button @click="toggleFavorite" class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              {{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}
            </button>
          </div>
          
          <p class="text-gray-700 mb-4">{{ recipe.description }}</p>
          
          <h2 class="text-xl font-semibold bg-slate-200 mb-4">Ingredients</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <div v-for="ingredient in recipe.ingredients" :key="ingredient" class="flex items-start">
              <svg class="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 2a1 1 0 01.993.883L11 3v14a1 1 0 01-1.993.117L9 17V3a1 1 0 01.993-.883L10 2z" clip-rule="evenodd" /></svg>
              <span>{{ ingredient }}</span>
            </div>
          </div>
          
          <h2 class="text-xl font-semibold mb-4 bg-slate-200">Instructions</h2>
          <div class="space-y-2">
            <div v-for="(step, index) in recipe.instructions" :key="index" class="flex items-start">
              <div class="w-6 h-6 flex items-center justify-center bg-blue-500 text-white rounded-full mr-2">
                {{ index + 1 }}
              </div>
              <p class="text-gray-700">{{ step }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="text-gray-500">Loading...</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: null
    };
  },
  computed: {
    isFavorite() {
      return this.$store.getters.favoriteRecipes.some(r => r.id === this.recipe.id);
    }
  },
  async created() {
    const id = this.$route.params.id;
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);
    this.recipe = await response.json();
  },
  methods: {
    toggleFavorite() {
      if (this.isFavorite) {
        this.$store.dispatch('removeFavorite', this.recipe.id);
      } else {
        this.$store.dispatch('addFavorite', this.recipe);
      }
    }
  }
}
</script>

<style scoped>
.grid {
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
}
</style>
