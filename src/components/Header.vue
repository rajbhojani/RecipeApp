<template>
    <header class="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-4 shadow-lg">
      <div class="container mx-auto flex justify-between items-center">
        <router-link to="/" class="text-2xl font-bold hover:text-gray-300 transition duration-300 ease-in-out">
          Recipe App
        </router-link>
        <nav class="flex space-x-4">
          <router-link
            to="/"
            class="hover:bg-blue-700 px-3 py-1 rounded-lg transition duration-300 ease-in-out"
            exact-active-class="bg-blue-700"
          >
            Home
          </router-link>
          <router-link
            to="/favorites"
            class="hover:bg-blue-700 px-3 py-1 rounded-lg transition duration-300 ease-in-out"
            exact-active-class="bg-blue-700"
          >
            Favorites
          </router-link>
        </nav>
      </div>
    </header>
  </template>
  
  <script>
  export default {
    name: 'PageHeader'
  }
  </script>
  