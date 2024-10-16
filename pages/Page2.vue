<script setup>
    const { data } = await useFetch('/api/customers');
</script>

<template>
    <div>Page 2: Customeer List</div>

    <table>
        <tr>
            <th>ID</th>
            <th>Name</th>
        </tr>
        <tr v-for="customer in data.customers" :key="customer.id">
            <td>{{ customer.id }}</td>
            <td>{{ customer.name }}</td>
        </tr>
    </table>
</template>

