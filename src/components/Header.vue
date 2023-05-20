<template lang="">
     <header class="py-6 bg-blue-500">
      <div class="container mx-auto px-4">
        <h1 class="text-white text-2xl font-semibold">Hi, {{ getName }}</h1>
      </div>
    </header>
</template>
<script>
export default {
  name: "Header",
  computed: {
    getName() {
      return sessionStorage.getItem('user');
    },
  },
}
</script>
<style lang="">
    
</style>