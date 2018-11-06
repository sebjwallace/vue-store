<template>
    <div class="nav">
        <div class="container" :style="{width:`${width}`}">
            <div class="logo">
                <router-link to="/">
                    <img :src="logo">
                </router-link>
            </div>
            <div class="minicart">
                <MiniCartContainer/>
            </div>
        </div>
    </div>
</template>

<script>
import server from '@server-config'
import MiniCartContainer from '@/components/containers/MiniCartContainer'
export default {
    components: {
        MiniCartContainer
    },
    props: {
        width: {
            type: String,
            default: 'auto'
        }
    },
    computed: {
        logo(){
            return `${server.path}/images/logo.png`
        }
    }
}
</script>

<style scoped>
a {
    color: white;
    text-decoration: none;
}
.nav {
    color: white;
    background: #333;
    margin: auto;
}
.nav img {
    max-width: 70px;
    padding: 10px;
}
.container {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.minicart {
    margin-left: auto;
    padding: 10px;
}
</style>
