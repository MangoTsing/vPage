<style scoped>
.layout{
    background: #f5f7f9;
    position: relative;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.layout-footer-center{
    text-align: center;
}
</style>
<style>
.ivu-layout-content {
    width: 960px;
    margin: 0 auto;
}
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <TopNav />
            </Header>
            <Content :style="{padding: '0 50px'}">
                <Breadcrumb :style="{margin: '20px 0'}">
                    <BreadcrumbItem>{{blogData.title}}</BreadcrumbItem>
                </Breadcrumb>
                <Card>
                    <div style="min-height: 50px;">
                        {{blogData.summary}}
                    </div>
                </Card>
                <Card>
                    <div style="min-height: 400px;">
                        {{blogData.content}}
                    </div>
                </Card>
            </Content>
            <Footer class="layout-footer-center">2019-2020 &copy; {{blogData.title}}</Footer>
        </Layout>
    </div>
</template>
<script>
import TopNav from '~/components/TopNav.vue'
import axios from 'axios'
export default {
    components: {
        TopNav
    },
    asyncData ({ query }) {//请求
        return axios({
            method: 'get',
            url: '/api/myblogtxt/detail?title=' + encodeURI(query.title)
        })
	.then(function (response) {
            return { blogData: response.data.data[0]};
        })
    },
    data() {
        return {

        }
    }
}
</script>