<template>
    <List item-layout="vertical">
        <ListItem v-for="item in data" :key="item.title" >
            <ListItemMeta :avatar="item.avatar" :title="item.title" :description="item.description" />
            {{ item.content }}
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
                data: [
                    {
                        title: '我的博客 1',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://avatars1.githubusercontent.com/u/23053008?s=460&v=4',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: '我的博客 2',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://avatars1.githubusercontent.com/u/23053008?s=460&v=4',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    },
                    {
                        title: '我的博客 3',
                        description: 'This is description, this is description, this is description.',
                        avatar: 'https://avatars1.githubusercontent.com/u/23053008?s=460&v=4',
                        content: 'This is the content, this is the content, this is the content, this is the content.'
                    }
                ]
            }
        }
    }
</script>