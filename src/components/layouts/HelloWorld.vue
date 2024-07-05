<script setup>
import { ref } from 'vue';

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const mood = ref('');
const moodOptions = [
  { text: 'Happy', value: 'happy' },
  { text: 'Sad', value: 'sad' },
  { text: 'Irritated', value: 'irritated' },
  { text: 'Anxious', value: 'anxious' },
  { text: 'Calm', value: 'calm' }
];
</script>

<template>
  <div class="greetings">
    <h1 class="white">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
    <div>
      <label>How are you feeling today:  </label>
      <div class="mood_options">
        <div v-for="option in moodOptions" :key="option.value" class="mood_option">
          <label :for="option.value">{{ option.text }}</label>
          <input type="radio" :id="option.value" v-model="mood" :value="option.value">
          <div class="circle"></div>
        </div>
      </div>
    </div>
    <div>
      <label for="question">From 1 to 5, how would you rate your day:  </label>
      <input type="text" v-model="question" id="question">
    </div>
  </div>
</template>

<style scoped>
.mood_options {
  display: flex;
  gap: 20px;
}
.mood_option {
  text-align: center;
}
.mood-option input[type="radio"] {
  display: none;
}
.mood-option circle {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #000;
  margin-top: 5px;
  cursor: pointer;
}
.mood-option input[type="radio"]:checked + circle {
  background-color: #000;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
