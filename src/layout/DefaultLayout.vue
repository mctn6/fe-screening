<template>
  <div>
    <Header :title="title" />
    <main class="min-h-[960px] bg-gray-100">
      <!-- Insert main content components here -->

      <slot></slot>
    </main>
    <footer>
      <!-- Insert footer components here -->
    </footer>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";

export default {
  name: "DefaultLayout",
  components: {
    Header,
  },
  data() {
    return {
      title: "Order",
    };
  },
};
</script>
