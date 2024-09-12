<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">Favorite Recipes</h1>
    <div v-if="favorites.length === 0" class="text-gray-500">
      No favorites yet.
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="recipe in favorites"
        :key="recipe.id"
        class="border rounded-lg overflow-hidden shadow-md"
      >
        <img :src="recipe.image" alt="" class="w-full h-40 object-cover" />
        <div class="p-4">
          <h2 class="text-xl font-semibold mb-2">{{ recipe.name }}</h2>
          <p class="text-gray-700 mb-4 description-clamp">{{ recipe.description }}</p>
          <router-link :to="'/recipe/' + recipe.id">
            <button
              class="bg-blue-500 text-white py-2 px-4 mr-2 rounded hover:bg-blue-600"
            >
              View Details
            </button>
          </router-link>
          <button
            @click="removeFavorite(recipe.id)"
            class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavoritePage",
  computed: {
    favorites() {
      return this.$store.getters.favoriteRecipes;
    },
  },
  methods: {
    removeFavorite(id) {
      this.$store.dispatch("removeFavorite", id);
    },
  },
};
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