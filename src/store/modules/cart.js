
import axios from 'axios'

export default {

    state: {
        items: [],
        total: 0
    },

    mutations: {
        async updateCart(state){
            const res = await axios(`http://localhost:3000/cart`)
            state.items = res.data.items
            state.total = res.data.total
        }
    },

    getters: {
        items: state => state.items,
        total: state => state.total
    }

}