<template>
    <div class="card">
        <div class="title">
            {{name.toUpperCase()}}
        </div>
        <div class="products">
            <ProductCard
                class="product-card"
                v-for="(product,i) in products"
                :key="i"
                :id="product.id"
                :name="product.name"
                :price="product.price"
                :image="product.image"/>
        </div>
    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard'
export default {
    components: {ProductCard},
    props: {
        name: String,
        products: Array
    }
}
</script>

<style scoped>
    .card {
        background: white;
    }
    .title {
        color: white;
        background: #cc5900;
        padding: 10px;
        font-size: 1.4em;
    }
    .products {
        display: flex;
        justify-content: center;
    }
    .product-card {
        margin: 10px;
    }
</style>
