<template>
    <div>
        <Cart
            :items="items"
            :total="total"
            @removeItem="removeItem"/>
    </div>
</template>

<script>

import axios from 'axios'
import server from '@server-config'
import {mapMutations} from 'vuex'
import Cart from '@/components/Cart'

export default {
    components: {Cart},
    computed: {
        total(){
            return this.$store.getters.total || 0
        },
        items(){
            return this.$store.getters.items || []
        }
    },
    methods: {
        async removeItem(index){
            await axios(`${server.path}/cart/remove/${index}`)
            this.updateCart()
        },
        ...mapMutations(['updateCart'])
    }
}

</script>
