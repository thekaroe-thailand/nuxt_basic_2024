<script setup>
    const name = ref('');
    const type = ref(1);

    function navigate() {
        return navigateTo({
            path: '/blogs',
            query: {
                name: name.value,
                type: type.value
            }
        })
    }
</script>

<template>
    <input type="text" v-model="name" />
    <input type="number" v-model="type" />
    <button @click="navigate">Navigate</button>
</template>
    
