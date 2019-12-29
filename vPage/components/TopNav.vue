<template>
    <div class="main">
        <span class="title">qicoo-魔法试验田</span>
        <ul>
            <li class="list"><Button size="large" :long="true" type="text" ghost target="_blank" to="/">主页</Button></li>
            <li class="list"><Button size="large" :long="true" type="text" ghost target="_blank" to="/home">博客</Button></li>
            <li class="list"><Button size="large" :long="true" type="text" ghost target="_blank" to="https://github.com/mangotsing">Github</Button></li>
            <li class="list"><Button size="large" :long="true" type="text" ghost target="_blank" to="/about">关于我</Button></li>
        </ul>
    </div>
</template>
<script>
export default {
    data() {
        return {
        }
    },
    methods: {
    },
    mounted() {
    }
}
</script>
<style scoped>
.main {
    width: 960px;
    margin: 0 auto;
}
.main ul {
    list-style: none;
    float: right;
}

.title {
    color: #6098FB;
    font-size: 26px;
}

.list {
    float: left;
    color: aliceblue;
    width: 100px;
    text-align: center;
    font-size: 18px;
    font-weight: bold;
}
</style>