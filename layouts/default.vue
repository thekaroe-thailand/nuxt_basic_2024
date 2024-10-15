<script setup>
  import Navbar from '@/components/Navbar.vue'
</script>

<template>
  <div>
    <div>Default Layout</div>
    <Navbar />
    
    <slot></slot>
  </div>
</template>