<template>
    <div>
        <div>
            <b>&pound;{{(price * 1.2).toFixed(2)}}</b> Inc VAT
        </div>
        <div>
            <b>&pound;{{price.toFixed(2)}}</b> Ex VAT
        </div>
    </div>
</template>

<script>
export default {
    name: 'VATPrice',
    props: {
        price: Number
    }
}
</script>
