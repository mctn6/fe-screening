<template lang="">
  <div class="my-2">
    <label :for="label" class="block mb-2 text-sm font-semibold text-gray-700">{{ label }} <span v-if="isRequired" class="text-red-500">*</span></label>
    <input
      v-model="value"
      :id="label"
      :type="type"
      @input="handleInput($event.target.value)"
      class="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
      :required="isRequired"
    />
  </div>
</template>
<script>
export default {
  name: "TextField",
  props: {
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "text",
    },
    modelValue: {
      type: String,
      required: true,
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      value: this.modelValue,
      showError: false,
      errorMessage: "",
    };
  },
  watch: {
    modelValue(newValue) {
      this.value = newValue;
    },
  },
  methods: {
    handleInput(event) {
      if (this.type === "numeric") {
        this.value = this.value.replace(/[^0-9]/g, "");
      }

      this.$emit("update:modelValue", event);
    },
  },
};
</script>
<style lang=""></style>
