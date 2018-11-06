<template>
  <div>
    <CategoryCard
      class="category-card"
      v-for="(category,i) in categories"
      :key="i"
      :name="category.name"
      :products="category.products"/>
  </div>
</template>

<script>
import server from '@server-config'
import axios from 'axios'
import CategoryCard from '@/components/CategoryCard'
export default {
  components: {
    CategoryCard
  },
  async mounted(){
    const res = await axios(`${server.path}/categories`)
    this.categories = res.data
  },
  data(){
    return {
      categories: []
    }
  }
}

</script>

<style scoped>
  .category-card {
    margin: 10px;
  }
</style>
