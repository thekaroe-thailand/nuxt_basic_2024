<script setup>
const route = useRoute();

if (route.params.group === 'admins') {
    console.log('user is authentication');
}
</script>

<template>
    <p>{{ route.params.group }}</p>
    <p>{{ route.params.id }}</p>
</template>