<script setup>
  import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div>
    <div>Custom Layout</div>
    <Navbar />
    
    <slot></slot>
  </div>
</template>