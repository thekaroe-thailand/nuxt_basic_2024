<script setup>
    const { data } = await useFetch('/api/hello');
    const customer = reactive({
        name: '',
        phone: ''
    });

    const search = async () => {
        const {data} = await useFetch('/api/customers?name=John&phone=1234567890');
        customer.name = data.value.name;
        customer.phone = data.value.phone;
    }
</script>

<template>
    <div>Page 1 {{ data }}</div>

    <button @click="search">Search</button>
    <p>Name: {{ customer.name }}</p>
    <p>Phone: {{ customer.phone }}</p>
</template>

