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
                <!-- <Card>
                    <div style="min-height: 50px;">
                        {{blogData.summary}}
                    </div>
                </Card> -->
                <Card>
                    <div class="content" style="min-height: 400px;">
                        <div id="content" v-html='blogContent'></div>
                    </div>
                </Card>
            </Content>
            <Footer class="layout-footer-center">2019-2020 &copy; {{blogData.title}}</Footer>
        </Layout>
    </div>
</template>
<script>
import marked from 'marked'
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
            return { blogData: response.data.data[0], blogContent: marked(response.data.data[0].content)};
        })
    },
    data() {
        return {

        }
    },
    mounted() {
      var menuNode = document.getElementById('content')
      var menuNode = menuNode.querySelectorAll('h1,h2,h3')
      var div = document.createElement('div')
      div.setAttribute("id","markdown-nav")
      for (var node of menuNode) {
        var _node = node
        div.appendChild(_node)
      }
      document.body.appendChild(div)
    }
}
</script>
<style>
#markdown-nav {
  width: 200px;
  height: 400px;
  position: fixed;
  right: 40px;
  padding: 10px;
  top: 120px;
  border: 1px solid #303030
}
#markdown-nav h1 {
  padding-left: 30px;
}
.content .markdown-here-wrapper {
  font-size: 16px;
  line-height: 1.8em;
  letter-spacing: 0.1em;
}

.content pre, .content code {
  font-size: 14px;
  font-family: Roboto, 'Courier New', Consolas, Inconsolata, Courier, monospace;
  margin: auto 5px;
}

.content code {
  white-space: pre-wrap;
  border-radius: 2px;
  display: inline;
}

.content pre {
  font-size: 15px;
  line-height: 1.4em;
  display: block !important;
}

.content pre code {
  white-space: pre;
  overflow: auto;
  border-radius: 3px;
  padding: 1px 1px;
  display: block !important;
}

.content strong, .content b{
  color: #BF360C;
}

.content em, .content i {
  color: #009688;
}

.content hr {
  border: 1px solid #BF360C;
  margin: 1.5em auto;
}

.content p {
  margin: 1.5em 5px !important;
}

.content table, .content pre, .content dl, .content blockquote, .content q, .content ul, .content ol {
  margin: 10px 5px;
}

.content ul, .content ol {
  padding-left: 15px;
}

.content li {
  margin: 10px;
}

.content li p {
  margin: 10px 0 !important;
}

.content ul ul, .content ul ol, .content ol ul, .content ol ol {
  margin: 0;
  padding-left: 10px;
}

.content ul {
  list-style-type: circle;
}

.content dl {
  padding: 0;
}

.content dl dt {
  font-size: 1em;
  font-weight: bold;
  font-style: italic;
}

.content dl dd {
  margin: 0 0 10px;
  padding: 0 10px;
}

.content blockquote, .content q {
  border-left: 2px solid #009688;
  padding: 0 10px;
  color: #777;
  quotes: none;
  margin-left: 1em;
}

.content blockquote::before, .content blockquote::after, .content q::before, q::after {
  content: none;
}

.content h1, .content h2, .content h3, .content h4, .content h5, .content h6 {
  margin: 10px 0 5px;
  padding: 0;
  font-style: bold !important;
  color: #009688 !important;
  text-align: center !important;
  margin: 1.5em 5px !important;
  padding: 0.5em 1em !important;
}

.content h1 {
  font-size: 30px !important;
  border-bottom: 1px solid #ddd !important;
}

.content h2 {
  font-size: 24px !important;
  border-bottom: 1px solid #eee !important;
}

.content h3 {
  font-size: 18px;
}

.content h4 {
  font-size: 16px;
}


.content table {
  padding: 0;
  border-collapse: collapse;
  border-spacing: 0;
  font-size: 1em;
  font: inherit;
  border: 0;
  margin: 0 auto;
}

.content tbody {
  margin: 0;
  padding: 0;
  border: 0;
}

.content table tr {
  border: 0;
  border-top: 1px solid #CCC;
  background-color: white;
  margin: 0;
  padding: 0;
}

.content table tr:nth-child(2n) {
  background-color: #F8F8F8;
}

.content table tr th, .content table tr td {
  font-size: 16px;
  border: 1px solid #CCC;
  margin: 0;
  padding: 5px 10px;
}

.content table tr th {
  font-weight: bold;
  color: #eee;
  border: 1px solid #009688;
  background-color: #009688;
}
</style>