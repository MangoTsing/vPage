<template>
    <Card style="width:190px">
        <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            {{movieList.title}}
        </p>
        <!-- <p href="#" slot="extra" @click.prevent="changeLimit">
            <Icon type="ios-loop-strong"></Icon>
            换一批
        </p> -->
        <ul>
            <li v-for="(item,index) in movieList.subjects" :key="index">
                <a :href="item.alt" target="_blank">{{ item.title }}</a>
                <span>
                    <span v-if="item.rating.average!==0">
                    <Icon type="ios-star" v-for="n in Math.ceil(item.rating.average/2)" :key="n"></Icon>
                    </span>
                    {{ item.rating.average===0? '无评分' :item.rating.average}}
                </span>
            </li>
        </ul>
    </Card>
</template>
<style scoped>
ul {
    list-style:none;
}
</style>
<script>
import axios from 'axios'
    export default {
        data () {
            return {
                movieList: [],
                randomMovieList: []
            }
        },
        methods: {
        },
        mounted () {
            axios({
                method: 'get',
                url: '/api/myblogtxt/movieList'
            }).then(res=>{
                this.movieList = res.data.data
            })
        }
    }
</script>