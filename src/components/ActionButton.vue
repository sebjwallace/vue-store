<template>
    <div class="button" @click="onClick">
        <slot></slot>
    </div>
</template>

<script>
export default {
    methods: {
        onClick(){
            this.$emit('click')
        }
    }
}
</script>


<style scoped>
    .button {
        color: white;
        background: #cc5900;
        padding: 10px;
        border-radius: 4px;
        text-align: center;
        cursor: pointer;
    }
    .button:hover {
        background: #e68f00;
    }
</style>
