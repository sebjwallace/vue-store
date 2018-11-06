<template>
    <div v-if="product">
        <Product
            class="product"
            :id="product.id"
            :name="product.name"
            :sku="product.sku"
            :description="product.description"
            :image="product.image"
            :price="product.price"
            @addToCart="addToCart"/>
    </div>
</template>

<script>
import axios from 'axios'
import server from '@server-config'
import {mapMutations} from 'vuex'
import Product from '@/components/Product'
export default {
    components: {Product},
    async mounted(){
        const res = await axios(`${server.path}/product/${this.$route.params.productId}`)
        this.product = res.data
    },
    data(){
        return {
            productId: this.$route.params.productId,
            product: null
        }
    },
    methods: {
        async addToCart(id,quantity){
            await axios(`${server.path}/cart/add/${id}/${quantity}`)
            this.updateCart()
        },
        ...mapMutations(['updateCart'])
    }
}
</script>

<style scoped>
    .product {
        background: white;
        padding: 10px;
    }
</style>
