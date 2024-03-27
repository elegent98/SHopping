<template>
    <div class="col-md-4 md-2">
        <div class="card mb-2">
            <img :src="product.image" class="card-img-top" height="300"  alt="" srcset="">
            <div class="card-body">
                <h5 class="card-title">{{ product.name }}</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, reiciendis!</p>
                <p>
                    <span class="badge bg-danger">
                        ${{ product.price }}
                    </span>
                </p>
                <button class="btn btn-primary"
                @click="data.addToCard(product)"
                >
                    <i class="fa-solid fa-cart-shopping mx-2"></i>
                    Add to card
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useCardStore} from "@/Story/useCardStore"
const data = useCardStore()
    const props = defineProps({
        product: {
            type: Object,
            required: true

        }
    })
</script>

<style >
img{
    object-fit:cover;
}
</style>