<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        qicoo
      </h1>
      <h2 class="subtitle">
        欢迎来到前端技术试验田
      </h2>
      <div class="links">
        <Button type="primary" size="large" target="_blank" to="/home">
          主页
        </Button>
        <Button target="_blank" size="large" to="https://github.com/mangotsing">
          GitHub
        </Button>
      </div>
    </div>
  </div> 
</template>

<script>
import Logo from '~/components/Logo.vue'
export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
.links {
  padding-top: 15px;
}
</style>
