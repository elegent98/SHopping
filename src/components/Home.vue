<template>
    <div class="row my-4">
        <ProductItems v-for="product in data.products" :key="product.id" :product="product"/>
    </div>
</template>

<script setup>
    import ProductItems from './ProductItems.vue'
    import { useCardStore } from '@/Story/useCardStore';

    const data = useCardStore()
</script>

<style >

</style>