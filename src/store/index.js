import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    favorites: JSON.parse(localStorage.getItem("favorites")) || [],
  },
  mutations: {
    SET_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
    ADD_FAVORITE(state, recipe) {
      state.favorites.push(recipe);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
    REMOVE_FAVORITE(state, recipeId) {
      state.favorites = state.favorites.filter((r) => r.id !== recipeId);
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
  actions: {
    async fetchRecipes({ commit }) {
      const response = await fetch("https://dummyjson.com/recipes");
      const data = await response.json();
      commit("SET_RECIPES", data.recipes);
    },
    addFavorite({ commit }, recipe) {
      commit("ADD_FAVORITE", recipe);
    },
    removeFavorite({ commit }, recipeId) {
      commit("REMOVE_FAVORITE", recipeId);
    },
  },
  getters: {
    allRecipes: (state) => state.recipes,
    favoriteRecipes: (state) => state.favorites,
  },
});
