<template>
    <div>
        <h2>{{name}}</h2>
        <p>{{description}}</p>
        <div v-for="(product,i) in products" :key="i">
            <ProductCard
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
        description: String,
        products: Array
    }
}
</script>
