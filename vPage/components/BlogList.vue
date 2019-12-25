<template>
    <List item-layout="vertical" header="6⃣️6⃣️6⃣️" size="large" :loading="loadData">
        <ListItem v-for="(item,index) in blogData" :key="index" >
            <ListItemMeta :author="item.author" :title="item.title" :description="item.author" />
            {{ item.summary }}
            <template slot="action">
                <li>
                    <Icon type="ios-star-outline" /> 123
                </li>
                <li>
                    <Icon type="ios-thumbs-up-outline" /> 234
                </li>
                <li>
                    <Icon type="ios-chatbubbles-outline" /> 345
                </li>
            </template>
            <template slot="extra">
                <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large" style="width: 280px">
            </template>
        </ListItem>
    </List>
</template>
<script>
    export default {
        props: {
            blogData: {
                type: Object,
                default: {}
            }
        },
        data () {
            return {
                loadData: false
            }
        },
        // methods: {
        //     async fetchSomething() {
        //         const blogData = await this.$axios.$get('http://59.110.236.40/api/myblogtxt')
        //         this.blogData = blogData
        //         this.loadData = false
        //     }
        // },
        mounted() {
            console.log(this.blogData)
        }
    }
</script>