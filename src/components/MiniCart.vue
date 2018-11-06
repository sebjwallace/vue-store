<template>
    <div class="mini-cart" @click="goToCart">
        <img class="cart-icon" :src="cartIcon">
        <div v-if="items.length">
            <b>{{quantity}}</b>
            <i>&pound;{{total.toFixed(2)}}</i>
        </div>
    </div>
</template>

<script>
import cartIcon from '../assets/cart.png'
export default {
    props: {
        items: Array,
        total: Number
    },
    computed: {
        quantity(){
            return this.items.reduce((quantity,item) => quantity + parseInt(item.quantity),0)
        }
    },
    data(){
        return {
            cartIcon
        }
    },
    methods: {
        goToCart(){
            this.$router.push('/cart')
        }
    }
}
</script>

<style scoped>
    .mini-cart {
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
    }
    .cart-icon {
        max-width: 30px;
    }
    img, b, i {
        padding: 5px;
    }
</style>
