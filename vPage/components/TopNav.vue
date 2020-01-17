<template>
    <div class="main">
        <nuxt-link class="title" :to="{ path: '/home'}">qicoo-魔法试验田</nuxt-link>
        <Dropdown placement="bottom-end" trigger="click" class="menu-ul">
            <Button type="primary">
                <Icon type="ios-arrow-down"></Icon>
            </Button>
            <DropdownMenu slot="list">
                <DropdownItem><nuxt-link target="_blank" to="/">首页</nuxt-link></DropdownItem>
                <DropdownItem><nuxt-link target="_blank" to="/home">博客</nuxt-link></DropdownItem>
                <DropdownItem><nuxt-link target="_blank" to="/tag">分类</nuxt-link></DropdownItem>
                <DropdownItem><nuxt-link target="_blank" to="https://github.com/mangotsing">Github</nuxt-link></DropdownItem>
                <DropdownItem><nuxt-link target="_blank" to="/about">关于我</nuxt-link></DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <ul class="list-ul">
            <li class="list"><Button size="large" :long="true" type="text" ghost target="_blank" to="/">首页</Button></li>
            <li class="list"><Button size="large" :long="true" type="text" ghost target="_blank" to="/home">博客</Button></li>
            <li class="list"><Button size="large" :long="true" type="text" ghost target="_blank" to="/tag">分类</Button></li>
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
<style>
</style>
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
    color: #abcdef;
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
.menu-ul {
    display:none;
}

@media screen and (max-device-width:960px){
    .main {
        width: 15rem;
        text-align: center;
    }
    .main .list-ul{
        display: none;
    }
    .main .menu-ul{
        display: block;
        position: absolute;
        top: 0px;
        right:20px;
    }
}
</style>