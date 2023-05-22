<template lang="">
    <div>
        <button :type="type" :disabled="isDisabled" :class="[widthClasses,colorClass, 'text-sm md:text-base px-4 py-2 rounded-md border']" @click="handleButtonClick">{{ text }}</button>
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
        },
        isDisabled: {
            type: Boolean
        }
    },
    computed: {
        widthClasses() {
            return this.size === 'full' ? 'w-full' : '';
        },
        colorClass(){
            return this.type === 'submit' ? 'bg-blue-500 disabled:bg-blue-500/40 text-white border-blue-500 hover:bg-blue-500/70' : 'text-gray-800 border-gray-600 hover:bg-gray-200/70 disabled:bg-gray-200/40';
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