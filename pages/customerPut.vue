<script setup>
const customer = reactive({
    id: '',
    name: '',
    phone: ''
});

const updateCustomer = async () => {
    const { data } = await useFetch('/api/customers', {
        method: 'PUT',
        body: customer
    });
}
</script>

<template>
    <div>Customer Put</div>
    <form @submit.prevent="updateCustomer">
        <div>id</div>
        <input type="text" v-model="customer.id" placeholder="ID" />
        <div>name</div>
        <input type="text" v-model="customer.name" placeholder="Name" />
        <div>phone</div>
        <input type="text" v-model="customer.phone" placeholder="Phone" />
        <button type="submit">Update Customer</button>
    </form>
</template>