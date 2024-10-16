<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<style>
.navbar ul li{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>

<template>
    <div class="navbar">
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/page1">Page 1</NuxtLink>
            </li> 
            <li>
                <NuxtLink to="/page2">Page 2</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/page3">Page 3</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/customer?search=kob">Customer</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/usingNavigateTo">Using Navigate To</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/customerPut">Customer Put</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/customerDelete">Customer Delete</NuxtLink>
            </li>
        </ul>
        <p>Current route: {{ $route.path }}</p>
    </div>
</template>