<template>
  <DefaultLayout  v-if="$route.meta.layout === 'DefaultLayout'">
    <router-view />
  </DefaultLayout>
  <AuthLayout  v-else>
    <router-view />
  </AuthLayout>
</template>
<script>
import DefaultLayout from "@/layout/DefaultLayout.vue";
import AuthLayout from "@/layout/AuthLayout.vue";

export default {
  name: "app",
  components: {
    DefaultLayout,
    AuthLayout
  },
};
</script>
<style scoped></style>
