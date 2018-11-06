<template>
    <div>
        <div v-if="!items.length">
            Your cart is empty!
        </div>
        <div v-else v-for="(item,i) in items" :key="i" class="item">
            <div>
                <img :src="item.product.image"/>
            </div>
            <div class="details">
                <div>
                    Name: {{item.product.name}}
                </div>
                <div>
                    Quantity: {{item.quantity}}
                </div>
                <div>
                    <VATPrice :price="item.product.price"/>
                </div>
            </div>
            <div>
                <ActionButton @click="removeItem(i)">
                    Remove
                </ActionButton>
            </div>
        </div>
    </div>
</template>

<script>
import VATPrice from '@/components/VATPrice'
import ActionButton from '@/components/ActionButton'
export default {
    components: {VATPrice,ActionButton},
    props: {
        items: Array,
        total: Number
    },
    methods: {
        removeItem(index){
            this.$emit('removeItem',index)
        }
    }
}
</script>

<style scoped>
    img {
        max-width: 100px;
    }
    .item {
        display: flex;
        justify-content: space-between;
        margin: 10px;
        padding: 10px;
        background: white;
    }
    .details {
        width: 200px;
    }
</style>
