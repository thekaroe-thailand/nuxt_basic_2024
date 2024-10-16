<script setup>
    const customer = reactive({
        id: ''
    });

    const deleteCustomer = async () => {
        await useFetch('/api/customers', {
            method: 'DELETE',
            body: customer
        });
    }
</script>

<template>
    <div>Customer Delete</div>
    <form @submit.prevent="deleteCustomer">
        <div>id</div>
        <input type="text" v-model="customer.id" placeholder="ID" />
        <button type="submit">Delete Customer</button>
    </form>
</template>