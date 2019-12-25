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
        data () {
            return {
                blogData: [
                    {
                        title: '我的博客 1',
                        summary: 'This is summary, this is summary, this is summary.',
                        author: 'https://authors1.githubusertags.com/u/23053008?s=460&v=4',
                        tags: 'This is the tags, this is the tags, this is the tags, this is the tags.'
                    },
                    {
                        title: '我的博客 2',
                        summary: 'This is summary, this is summary, this is summary.',
                        author: 'https://authors1.githubusertags.com/u/23053008?s=460&v=4',
                        tags: 'This is the tags, this is the tags, this is the tags, this is the tags.'
                    },
                    {
                        title: '我的博客 3',
                        summary: 'This is summary, this is summary, this is summary.',
                        author: 'https://authors1.githubusertags.com/u/23053008?s=460&v=4',
                        tags: 'This is the tags, this is the tags, this is the tags, this is the tags.'
                    }
                ],
                loadData: true
            }
        },
        methods: {
            async fetchSomething() {
                const blogData = await this.$axios.$get('http://59.110.236.40/api/myblogtxt')
                this.blogData = blogData
                this.loadData = false
            }
        },
        mounted() {
            this.fetchSomething()
        }
    }
</script>