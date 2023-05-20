<template lang="">
    <div>
        <button :type="type" :class="[widthClasses,colorClass, 'text-sm md:text-base px-4 py-2 rounded-md border']" @click="handleButtonClick">{{ text }}</button>
    </div>
</template>
<script>
export default {
    name: "Button",
    props: {
        type: {
            type: String
        },
        text:{
            type: String
        },
        size: {
            type: String,
            required: true
        }
    },
    computed: {
        widthClasses() {
            return this.size === 'full' ? 'w-full' : '';
        },
        colorClass(){
            return this.type === 'submit' ? 'bg-blue-500 text-white border-blue-500 hover:bg-blue-500/70' : 'text-gray-800 border-gray-600 hover:bg-gray-200/70';
        }
    },
    methods: {
        handleButtonClick(){
            this.$emit("button-click");
        }
    },
   
}
</script>
<style lang="">
    
</style>