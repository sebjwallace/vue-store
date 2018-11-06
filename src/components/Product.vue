<template>
	<div class="row">
		<div class="col">
			<img :src="image" alt="Product Image">
		</div>
		<div class="col">
			<h2>{{name.toUpperCase()}}</h2>
			<VATPrice :price="price"/>
			<p>{{description}}</p>
			<div class="quantity">
				<label>Quantity</label>
				<input type="number" v-model="quantity">
			</div>
			<ActionButton @click="addToCart">
				Add To Cart
			</ActionButton>
		</div>
	</div>
</template>

<script>
import VATPrice from '@/components/VATPrice'
import ActionButton from  '@/components/ActionButton'
export default {
	components: {VATPrice,ActionButton},
	props: {
		id: Number,
		name: String,
		price: Number,
		sku: String,
		image: String,
		description: String
	},
	data(){
		return {
			quantity: 1
		}
	},
	methods: {
		addToCart(){
			this.$emit('addToCart',this.id,this.quantity)
		}
	}
}
</script>

<style scoped>
	.row:after {
		content: "";
		display: table;
		clear: both;
	}
	.col {
		float: left;
		width: 50%;
	}
	.quantity {
		margin-bottom: 10px;
	}
</style>
