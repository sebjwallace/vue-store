<template>
    <div>
        <MiniCart
            :items="items"
            :total="total"/>
    </div>
</template>

<script>

import axios from 'axios'
import server from '@server-config'
import MiniCart from '@/components/MiniCart'

export default {
    components: {MiniCart},
    computed: {
        total(){
            return this.$store.getters.total || 0
        },
        items(){
            return this.$store.getters.items || []
        }
    }
}

</script>
