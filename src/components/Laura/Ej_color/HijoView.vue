<script setup>

const emit = defineEmits(['color-change']);

function changeColor(event) {
    const color = event.target.value;
    emit('color-change', color);
}
</script>

<template>
    <div class="flex flex-col  items-center mt-4">
        <input type="color" @input="changeColor">
    </div>
</template>