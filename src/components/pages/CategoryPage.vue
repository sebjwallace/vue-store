<template>
    <div>
        <Category
            :name="name"
            :description="description"
            :products="products"/>
    </div>
</template>

<script>
import axios from 'axios'
import server from '@server-config'
import Category from '@/components/Category'

export default {
    components: {Category},
    async mounted(){
        const res = await axios(`${server.path}/category/${this.$route.params.categoryId}`)
        this.name = res.data.name
        this.description = res.data.description
        this.products = res.data.products
    },
    data(){
        return {
            name: '',
            description: '',
            products: []
        }
    }
}

</script>
