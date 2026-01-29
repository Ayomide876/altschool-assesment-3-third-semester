<template>
  <div class="min-h-[80vh] flex flex-col items-center justify-center px-6 text-center">
    <h1 class="text-9xl font-black text-gray-200">404</h1>
    
    <div class="absolute">
      <h2 class="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h2>
      <p class="text-gray-600 mb-8 max-w-md mx-auto">
        Oops! The article or page you're looking is not here.
      </p>
      
      <router-link 
        to="/" 
        class="inline-block bg-brand hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg"
      >
        Back to Home
      </router-link>
    </div>
  </div>
</template>

<script setup>

</script>