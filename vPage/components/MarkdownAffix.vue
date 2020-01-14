<template>
    <div>
        <div class="markdown-nav" id="markdown-nav" ref="point" :class="classes" :style="styles">
            <slot></slot>
        </div>
        <!-- <div v-show="slot" :style="slotStyle"></div> -->
    </div>
</template>
<script>
// * @MKA.vue
// * @author shangguanyanpeng@360.cn
// * @date 2020-1-6 16:44:50
const thefixCls = "affix";
export default {
  props: {
    offsetTop: {
      type: Number,
      default: 0
    },
    content: {
      type: Array,
      default: []
    }
  },
  watch: {
    content(val) {
      val.forEach((item, index) => {
        let id = item.getAttribute('id')
        item.setAttribute("id",id+'-nav')
        let text = item.innerHTML.replace(',','')
        let search = `title=${this.$nuxt.$route.query.title}`
        item.innerHTML = `<a href="${window.location.origin}${this.$nuxt.$route.path}?${search}#${text}">${text}</a>`
        document.getElementById("markdown-nav").appendChild(item);
      });
    }
  },
  data() {
    return {
        affix: false,
        styles: {},
        slot: false,
        slotStyle: {}
    };
  },
  computed: {
    classes() {
      return [
        {
          [`${thefixCls}`]: this.affix
        }
      ];
    }
  },
  methods: {
    getScroll(target, top) {
      const prop = top ? "pageYOffset" : "pageXOffset";
      const method = top ? "scrollTop" : "scrollLeft";

      let ret = target[prop];

      if (typeof ret !== "number") {
        ret = window.document.documentElement[method];
      }
      //一个获取scrollTop或者scrollLeft的方法，如果能直接获取window.pageYOffset就直接返回ret，获取到的不是数字的话再使用window.doc.doe.sctop
      return ret;
    },
    getOffset(element) {
      const rect = element.getBoundingClientRect();

      const scrollTop = this.getScroll(window, true);
      const scrollLeft = this.getScroll(window);

      const docEl = window.document.body;
      const clientTop = docEl.clientTop || 0;
      const clientLeft = docEl.clientLeft || 0;
      return {
        top: rect.top + scrollTop - clientTop,//距离视图顶部+滚动条距离-元素周围边框的厚度 = 不算边框，实际上内容距离顶部的top值
        left: rect.left + scrollLeft - clientLeft
      };
    },
    handleScroll() {
      const affix = this.affix;
      const scrollTop = this.getScroll(window, true);
      const elOffset = this.getOffset(this.$el);
      const windowHeight = window.innerHeight;
      const elHeight = this.$el.getElementsByTagName("div")[0].offsetHeight;
      // Fixed Top
      if (elOffset.top - this.offsetTop < scrollTop && !affix) {
        this.affix = true;
        this.slotStyle = {
          width: this.$refs.point.clientWidth + "px",
          height: this.$refs.point.clientHeight + "px"
        };//防止塌陷
        this.slot = true;
        this.styles = {
          top: `${this.offsetTop}px`,
          left: `${elOffset.left}px`,
        //   width: `${this.$el.offsetWidth}px`
        };

        this.$emit("on-change", true);
      } else if (elOffset.top - this.offsetTop > scrollTop && affix) {
        this.slot = false;
        this.slotStyle = {};
        this.affix = false;
        this.styles = null;

        this.$emit("on-change", false);
      }
    }
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleScroll);
    this.$nextTick(() => {
        this.handleScroll();
    });
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleScroll);
  }
};
</script>
<style>
@media screen and (max-width:960px){
    .markdown-nav{
        display: none;
    }
}
.markdown-nav {
  /* display: none; */
  opacity: 0;
  position: absolute;
  visibility: hidden;
  transition: .5s ease-in-out
}
.affix {
  position: fixed;
  /* display: block; */
  opacity: 1;
  visibility: visible
}

#markdown-nav {
  width: 230px;
  color: #eff7ef;
  padding: 15px 10px;
  margin: 5px;
  border-radius: 10px;
  background: #019291;
}
#markdown .active {
  background: #176917;
}
#markdown-nav h1:hover, #markdown-nav h2:hover, #markdown-nav h3:hover, #markdown-nav h4:hover {
  background: #176917;
  transition: .5s
}
#markdown-nav h1 a{
  margin-bottom: 5px;
  padding-left: 5px;
  font-size: 20px;
  color:antiquewhite;
}
#markdown-nav h2 a{
  margin-bottom: 5px;
  padding-left: 10px;
  color:antiquewhite
}
#markdown-nav h3 a{
  color: white;
  margin-bottom: 5px;
  padding-left: 20px;
}
#markdown-nav h4 a{
  color: white;
  margin-bottom: 5px;
  padding-left: 25px;
}
</style>