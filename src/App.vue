<template>
  <div class="min-h-screen bg-gray-50">
    <div v-if="error">
       <button @click="retry">Retry</button>
    </div>

    <router-view v-slot="{ Component }" v-else>
      <Suspense>
        <template #default>
          <component :is="Component" :key="$route.path" />
        </template>
        <template #fallback>
          <div class="grid grid-cols-3 gap-4">
            <SkeletonCard v-for="i in 6" :key="i" />
          </div>
        </template>
      </Suspense>
    </router-view>
  </div>
</template>

<script setup>
import { ref, onErrorCaptured } from 'vue';
import SkeletonCard from './components/SkeletonCard.vue';

const error = ref(null);
const retry = () => { error.value = null; };

onErrorCaptured((err) => {
  error.value = err.message;
  return false;
});
</script>