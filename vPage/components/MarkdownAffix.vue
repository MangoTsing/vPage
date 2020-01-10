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
      const elOffset = this.getOffset(this.$el);//原本为this.$el，因为加入动态的markdown格式，需要更换为子元素
      const windowHeight = window.innerHeight;
      const elHeight = this.$el.getElementsByTagName("div")[0].offsetHeight;
      // Fixed Top
      if (elOffset.top - this.offsetTop < scrollTop && !affix) {
          console.log(true)
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
.markdown-nav {
  /* display: none; */
  opacity: 0;
  position: absolute;
  visibility: hidden;
  transition: 1s ease-in-out
}
.affix {
  position: fixed;
  /* display: block; */
  opacity: 1;
  visibility: visible
}

#markdown-nav {
  width: 250px;
  color: #eff7ef;
  padding: 10px;
  /* top: 120px; */
  border-radius: 15px;
  background: teal;
}
#markdown .active {
  background: #176917;
}
#markdown-nav h1 {
  margin-bottom: 5px;
  padding-left: 5px;
  font-size: 20px;
}
#markdown-nav h2 {
  margin-bottom: 5px;
  padding-left: 10px;
}
#markdown-nav h3 {
  color: white;
  margin-bottom: 5px;
  padding-left: 20px;
}
#markdown-nav h4 {
  color: white;
  margin-bottom: 5px;
  padding-left: 25px;
}
</style>