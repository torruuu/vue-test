<script setup>
defineProps({
    color2: String
});

const emit = defineEmits(['color-change2']);


function changeColor(event) {
    const color = event.target.value;
    emit('color-change2', color);
}

</script>

<template>
    <div class="flex items-center gap-6 mt-4">
        <div class="flex flex-col items-center justify-center">
            <input type="color" @input="changeColor" :value="color2">
            {{ color2 }}
        </div>
    </div>
</template>