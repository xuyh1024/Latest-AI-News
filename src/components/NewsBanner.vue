<template>
  <div class="news-banner" v-if="showBanner">
    最新消息：{{ latestNews.title }}
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { state } from "../store";

const showBanner = ref(false);
const latestNews = ref({
  title: "",
  content: "",
});

watch(
  () => state.news,
  (newNews) => {
    latestNews.value = newNews[0];
    showBanner.value = true;
    setTimeout(() => {
      showBanner.value = false;
    }, 5000);
  }
);
</script>
