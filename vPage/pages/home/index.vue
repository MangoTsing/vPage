<template>
    <div>
        <Header>
            <TopNav />
        </Header>
        <div class="center">
            <div class="left">
                <BlogList />
            </div>
            <div class="right">
                <ActionCard />
            </div>
        </div>
    </div>
</template>
<script>
import TopNav from '~/components/TopNav.vue'
import BlogList from '~/components/BlogList.vue'
import ActionCard from '~/components/ActionCard.vue'

export default {
    components: {
        TopNav,
        BlogList,
        ActionCard
    },
    data() {
        return {
            
        }
    },
    methods: {
        async fetchSomething() {
            const ip = await this.$axios.$get('http://59.110.236.40/myblogtxt')
            console.log(ip)
        }
    },
    mounted() {
        this.fetchSomething()
    }
}
</script>
<style scoped>
.center {
    width: 960px;
    margin: 20px auto;
    border-top: 1px solid rgb(224, 235, 212)
}
.left {
    width:759px;
    float: left;
    border-right: 1px solid rgb(224, 235, 212);
    padding: 30px 10px;
}
.right {
    width: 200px;
    float: right;
    padding: 30px 10px;
}
</style>