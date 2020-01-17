<template>
    <div class="appear">
        <Header>
            <TopNav />
        </Header>
        <div v-if="smallScreen" class="center">
            <div class="left">
                <List item-layout="vertical" size="large" >
                    <ListItem v-for="(item,index) in blogData" :key="index" >
                        <nuxt-link :to="{ path: 'home/detail', query: { title: item.title }}">
                        <ListItemMeta :avatar="item.avatar || 'https://avatars1.githubusercontent.com/u/23053008?s=460&v=4'" :title="item.title" :description="'创建时间:'+item.time" />
                        <Tag color="warning">{{item.tags.toString()}}</Tag>
                        {{ item.summary }}
                        </nuxt-link>
                        <template slot="action">    
                            <li @click="postStar(item)">
                                <Icon type="ios-star-outline" /> {{item.star || 0}}
                            </li>
                            <!-- <li>
                                <Icon type="ios-chatbubbles-outline" /> {{item.count || 0}}
                            </li> -->
                        </template>
                        <template slot="extra">
                            <img :src="item.coverImg || 'https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large'" style="width: 250px;height:125px">
                        </template>
                    </ListItem>
                </List>
                <div id="gitment"></div>
            </div>
            <div class="right">
                <ActionCard />
            </div>
        </div>
        <div v-if="!smallScreen" class="m-center">
            <List item-layout="horizontal" size="large" >
                <ListItem v-for="(item,index) in blogData" :key="index" >
                    <nuxt-link :to="{ path: 'home/detail', query: { title: item.title }}">
                    <ListItemMeta :avatar="item.avatar || 'https://avatars1.githubusercontent.com/u/23053008?s=460&v=4'" :title="item.title" :description="'创建时间:'+item.time" />
                    <Tag color="warning">{{item.tags.toString()}}</Tag>
                    {{ item.summary }}
                    </nuxt-link>
                    <template slot="extra">
                        <img :src="item.coverImg || 'https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large'" style="width: 250px;height:125px;margin:5px auto;display:block">
                        <li @click="postStar(item)">
                            <Button size="large" style="margin:5px auto;display:block" icon="ios-star" type="primary" shape="circle"> {{item.star || 0}}</Button>
                        </li>
                    </template>
                </ListItem>
            </List>
            <div id="gitment"></div>
        </div>
    </div>
</template>
<script>
import TopNav from '~/components/TopNav.vue'
import ActionCard from '~/components/ActionCard.vue'
import axios from 'axios'
export default {
    head() {
        return {
                link: [
                    { rel:"stylesheet", href:"https://s2.ssl.qhres.com/static/b9cc92f51476444e.css"}
                ],
                script: [
                    { src:"https://s5.ssl.qhres.com/static/8cbd096780bc622f.js"}
                ]
        }
    },
    components: {
        TopNav,
        ActionCard
    },
    asyncData ({ params }) {//请求
        return  axios({
            method: 'get',
            url: '/api/myblogtxt'
        })
	.then(function (response) {
            return { blogData: response.data.data};
        })
    },
    data() {
        return {
            smallScreen: true
        }
    },
    methods: {
        postStar(item) {
            return axios({
                method: 'get',
                url: '/api/myblogtxt/poststar?title=' + encodeURI(item.title)
            }).then(res=>{
                // this.getList()
                item.star += 1
            })
        },
        getList() {
            return axios({
                method: 'get',
                url: '/api/myblogtxt'
            }).then(res=>{
                this.blogData = res.data.data
            })
        }
    },
    mounted() {
        var gitment = new Gitment({
            owner: 'MangoTsing',
            repo: 'vPage',
            oauth: {
                client_id: '2a5c95e26afc325ebd6a',
                client_secret: 'e77b86d1722170a0ad83f02c21e27ac545877a73',
            }
        })
        if (window.screen.width < 960){
            this.smallScreen = false
            this.$nextTick(()=>{
                gitment.render('gitment')
            })
        } else {
            gitment.render('gitment')
        }
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
<style>
.ivu-layout-header {
    min-width: 1010px;  
}
.m-center {
    display: none;
}
@media screen and (max-device-width:960px){
    .ivu-layout-header {
        min-width: 100px;  
    }
    .ivu-list-item-extra {
        width: 100%
    }
    .center {
        display: none;
    }
    .m-center {
        display: block;
        padding: 0 20px;
    }
}
.appear {
    animation: 1s appear;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>