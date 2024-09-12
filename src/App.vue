<template>
  <div class="min-h-screen flex flex-col">
    <PageHeader />
    <main class="flex-1">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import PageHeader from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    PageHeader,
    Footer
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
}
</style>
