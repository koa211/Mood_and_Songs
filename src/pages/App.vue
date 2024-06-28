<script setup>
import HelloWorld from '../components/layouts/HelloWorld.vue'
import TheWelcome from '../components/layouts/TheWelcome.vue'
import TheHeader from "@/components/layouts/TheHeader.vue";
</script>

<template>
  <header>
    <TheHeader></TheHeader>
  </header>

  <main>
    <img alt="Vue logo" class="logo" src="../assets/logo.svg" width="50" height="50" />

    <div class="wrapper">
      <HelloWorld msg="Can you hear the music" />
    </div>
  </main>
</template>

<style scoped>
header {
  position: fixed;   /* Fix the header position */
  top: 0;            /* Align to the top of the viewport */
  left: 0;           /* Align to the left of the viewport */
  width: 100%;       /* Take full width of the viewport */
  background-color: #333; /* Example background color */
  color: white;      /* Example text color */
  padding: 10px;
}

header h1 {
  margin-left: 20px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
