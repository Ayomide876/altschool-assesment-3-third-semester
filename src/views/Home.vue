<template>
  <div class="max-w-6xl mx-auto p-6">
    <h1 class="text-4xl font-bold mb-8 text-gray-800">Latest Articles</h1>
        
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article 
  v-for="post in posts" 
  :key="post._id || post.id" 
  class="bg-white rounded-xl shadow-md overflow-hidden"
>
  <div class="p-6">
    <h2 class="text-xl font-bold mb-3">
      {{ post.title }}
    </h2>
    
    <p class="text-gray-600 line-clamp-3">
      {{ post.excerpt || post.content || 'No summary available' }}
    </p>
  </div>
  
  <div class="p-6 pt-0">
    <router-link 
      :to="`/post/${post._id || post.id}`"
      class="text-brand font-semibold"
    >
      Read Full Article →
    </router-link>
  </div>
</article>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { api } from '../services/api';

const posts = ref([]);

onMounted(async () => {
  try {
    const response = await api.getAllPosts();
    console.log("What is the API actually sending?", response);
    
    // If the API sends { data: [...] } instead of just [...]
    posts.value = Array.isArray(response) ? response : response.data;
  } catch (err) {
    console.error("Home Load Error:", err);
  }
});
</script>