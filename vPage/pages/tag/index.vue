<template>
    <div class="appear">
        <Header>
            <TopNav />
        </Header>
        <div class="center">
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
            </div>
        </div>
    </div>
</template>
<script>
import TopNav from '~/components/TopNav.vue'
import axios from 'axios'
export default {
    components: {
        TopNav
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
        }
    },
    methods: {
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