<template>
    <div class="relative my-2">
        <label :for="label" class="block mb-2 text-sm font-semibold text-gray-700">{{ label }}</label>
      <div class="flex items-center justify-between bg-white border border-gray-300 rounded-md px-4 py-2 cursor-pointer " @click="toggleDropdown">
        <span>{{ selectedOption }}</span>
        <svg class="w-4 h-4 fill-current" :class="{ 'rotate-180': isOpen }" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M10 14l-6-6h12l-6 6z" />
        </svg>
      </div>
      <div v-if="isOpen" class="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
        <ul>
          <li v-for="option in options" :key="option" class="py-2 px-3 cursor-pointer hover:bg-gray-100" @click="selectOption(option)">{{ option }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Dropdown",
    props: {
        label: String,
        options: Array,
        value: String
    },
    data() {
      return {
        isOpen: false,
        selectedOption: this.value
      };
    },
    watch: {
      selectedOption(newValue){
        this.$emit("update:value", newValue);
        this.$emit("selected", newValue);
      }
    },
    methods: {
      toggleDropdown() {
        this.isOpen = !this.isOpen;
      },
      selectOption(option) {
        this.selectedOption = option;
        this.isOpen = false;
      },
    },
  };
  </script>
  