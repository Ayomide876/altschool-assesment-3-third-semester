<template>
  <div class="max-w-3xl mx-auto p-6 py-12">
    <button 
      @click="$router.back()"
      class="mb-8 text-gray-500 hover:text-brand flex items-center transition-colors"
    >
      <span class="mr-2">←</span> Back to posts
    </button>

    <article v-if="post">
      <h1 class="text-5xl font-black text-gray-900 mb-6 leading-tight">
        {{ post.title }}
      </h1>
      
      <div class="prose lg:prose-xl text-gray-700 leading-relaxed italic mb-8 border-l-4 border-brand pl-4">
        Post ID: {{ post.id }} — A brief look into this topic.
      </div>

      <div class="text-lg text-gray-800 leading-loose whitespace-pre-line">
  {{ post.content }}
</div>
    </article>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { api } from '../services/api';

const props = defineProps(['id']);
const route = useRoute();
const post = ref(null);

onMounted(async () => {
  try {
    const id = props.id || route.params.id; 
post.value = await api.getPostById(id);
    
    post.value = await api.getPostById(id);
  } catch (err) {
    console.error("Error fetching post:", err);

    throw err; 
  }
});
</script>