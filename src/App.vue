<script setup lang="ts">
import { onMounted } from "vue";
import NewsBanner from "./components/NewsBanner.vue";
import NewsBoard from "./pages/NewsBoard.vue";
import { fetchLatestNews } from "./api";
import { state } from "./store";

onMounted(async () => {
  try {
    const news = await fetchLatestNews();
    state.news = news;
  } catch (error) {
    console.error("Failed to fetch latest news:", error);
  }
});
</script>

<template>
  <div>
    <!-- <news-banner /> -->
    <news-board />
  </div>
</template>

<style scoped>
.news-banner {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  text-align: center;
}

.news-board {
  padding: 15px;
}
</style>
