<template>
  <div>
    <nuxt />
  </div>
</template>
<script type="text/javascript">
	if(window.location.href.indexOf("?mobile")<0){
		try{
			if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){                                //触屏手机版地址
				window.location.href="http://m.sxyle.com";
			}else if(/iPad/i.test(navigator.userAgent)){     
                                 //pad版地址
			}else{                                //普通手机版地址
				window.location.href="http://m.sxyle.com"
			}
		}catch(e){}
  }
</script>
<script>
import TopNav from '../components/TopNav'
export default {
  components:{
    TopNav
  }
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
