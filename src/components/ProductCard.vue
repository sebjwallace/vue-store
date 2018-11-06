<template>
    <div class="card">
        <router-link :to="`/product/${id}`">
            <img :src="image"/>
            <h3>{{name.toUpperCase()}}</h3>
            <VATPrice :price="price"/>
        </router-link>
    </div>
</template>

<script>
import VATPrice from '@/components/VATPrice'
export default {
    components: {VATPrice},
    props: {
        id: Number,
        name: String,
        price: Number,
        image: String
    }
}
</script>

<style scoped>
    .card {
        width: 250px;
        text-align: center;
        border: 1px solid lightgray;
        padding: 10px;
    }
    img {
        max-width: 90%;
    }
</style>
