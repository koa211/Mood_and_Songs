<script setup>
import { ref } from 'vue';

defineProps({
  msg: {
    type: String,
    required: true
  }
})

const mood = ref('');
const question = ref('');
const myTastes = ref('');
const lyricsOrNot = ref('');

const moodOptions = [
  { text: 'Happy', value: 'happy' },
  { text: 'Sad', value: 'sad' },
  { text: 'Irritated', value: 'irritated' },
  { text: 'Anxious', value: 'anxious' },
  { text: 'Calm', value: 'calm' }
];
</script>

<template>
  <div class="page-container">
    <div class="greetings">
      <div>
        <label class="question-label">How are you feeling today:  </label>
        <div class="mood_options">
          <div v-for="option in moodOptions" :key="option.value" class="mood_option">
            <label :for="option.value" class="option-label">{{ option.text }}</label>
            <input type="radio" :id="option.value" v-model="mood" :value="option.value">
            <div class="circle"></div>
          </div>
        </div>
      </div>
      <div class="favourite-song">
        <label for="question" class="question-label">What is your favourite song of all time:  </label>
        <input type="text" v-model="question" id="question" class="small-input">
      </div>
      <div class="me">
        <label class="question-label">Would you like to try what I like: </label>
        <div>
          <label for="yes" class="option-label">Yes</label>
          <input type="radio" id="yes" v-model="myTastes" value="yes">
          <label for="no" class="option-label">No</label>
          <input type="radio" id="no" v-model="myTastes" value="no">
        </div>
      </div>
      <div class="lyrics-or-not">
        <label class="question-label">Lyrics or Instrumental: </label>
        <div>
          <label for="lyrics" class="option-label">Lyrics</label>
          <input type="radio" id="lyrics" v-model="lyricsOrNot" value="lyrics">
          <label for="instrumental" class="option-label">Instrumental</label>
          <input type="radio" id="instrumental" v-model="lyricsOrNot" value="instrumental">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  height: 100vh; /* Full viewport height */
}

.greetings {
  width: 100%; /* Adjust width as needed */
  text-align: center; /* Center align content */
  padding: 40px;
  border: 1px solid #ccc;
  border-radius: 8px;
}

.option-label {
  font-size: 1.0rem; /* Increase font size */
}

.question-label{
  font-size: 1.4rem; /* Larger font size for labels */
  margin-bottom: 10px; /* Adjust spacing */
}

/** css for current mood **/
.mood_options {
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
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

/** css for favourite question **/
.favourite-song {
  margin-top: 20px;
}

/** css for yes/no question **/
.me {
  margin-top: 20px;
}
.me label {
  margin-right: 10px;
}
.me input[type="radio"] {
  margin-left: 5px;
}

/** css for lyrics or not **/
.lyrics-or-not {
  margin-top: 20px;
}
.lyrics-or-not label {
  margin-right: 10px;
}
.lyrics-or-not input[type="radio"] {
  margin-left: 10px;
}

h3 {
  font-size: 1.2rem;
}

.small-input {
  width: 150px;
}

@media (min-width: 1024px) {
}
</style>
