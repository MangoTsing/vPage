<template>
    <div>
        <div class="markdown-nav" id="markdown-nav" :class="{'affix': affixed}" :style="styles">
            <slot></slot>
        </div>
    </div>
</template>
<script>
// * @MKA.vue
// * @author shangguanyanpeng@360.cn
// * @date 2020-1-6 16:44:50
export default {
    props: {
        offset: {
            type: Number,
            default: 0
        },
        onAffix: {
            type: Function,
            default() {}
        },
        boundary: {
            type: String,
            default: ''
        },
        content: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            affixed: false,
            styles: {}
        };
    },
    methods: {
        getScroll(w, top) {
            let ret = w[`page${(top ? 'Y' : 'X')}Offset`];
            const method = `scroll${top ? 'Top' : 'Left'}`;
            if (typeof ret !== 'number') {
                const d = w.document;
                ret = d.documentElement[method];
                if (typeof ret !== 'number') {
                    ret = d.body[method];
                }
            }
            return ret;
        },
        getOffset(element) {
            const rect = element.getBoundingClientRect();
            const body = document.body;
            const clientTop = element.clientTop || body.clientTop || 0;
            const clientLeft = element.clientLeft || body.clientLeft || 0;
            const scrollTop = this.getScroll(window, true);
            const scrollLeft = this.getScroll(window);
            return {
                top: rect.bottom + scrollTop - clientTop,
                right: rect.left + scrollLeft - clientLeft
            };
        },
        handleScroll() {
            const scrollTop = this.getScroll(window, true) + this.offsets; // handle setting offset
            const elementOffset = this.getOffset(this.$el);
            if (!this.affixed && scrollTop > elementOffset.top) {
                this.affixed = true;
                this.styles = {
                    top: `${this.offsets}px`,
                    right: `${elementOffset.right+20}px`,
                };
                this.onAffix(this.affixed);
            }
            // if setting boundary
            if (this.boundary && scrollTop > elementOffset.top) {
                const el = document.getElementById(this.boundary.slice(1));
                if (el) {
                    const boundaryOffset = this.getOffset(el);
                    if ((scrollTop + this.offsets) > boundaryOffset.top) {
                        const top = scrollTop - boundaryOffset.top;
                        this.styles.top = `-${top}px`;
                    }
                }
            }
            if (this.affixed && scrollTop < elementOffset.top) {
                this.affixed = false;
                this.styles = {};
                this.onAffix(this.affixed);
            }
            if (this.affixed && this.boundary) {
                const el = document.getElementById(this.boundary.slice(1));
                if (el) {
                    const boundaryOffset = this.getOffset(el);
                    if ((scrollTop + this.offsets) <= boundaryOffset.top) {
                        this.styles.top = 0;
                    }
                }
            }
        }
    },
    computed: {
        offsets() {
            if (this.boundary) {
                return 0;
            }
            return this.offset;
        }
    },
    mounted() {
        this.content.forEach((item,index)=>{
            document.getElementById('markdown-nav').appendChild(item)
        })
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleScroll);
    }
};
</script>
<style>
.markdown-nav {
    display: none;
}
.affix{
  position: fixed;
  display: block;
}

#markdown-nav {
  width: 250px;
  color: #EFF7EF;
  padding: 10px;
  top: 120px;
  border-radius:15px;
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
#markdown-nav h2{
  margin-bottom: 5px;
  padding-left: 10px;
}
#markdown-nav h3{
  color:white;
  margin-bottom: 5px;
  padding-left: 15px;
}
#markdown-nav h4 {
  color:white;
  margin-bottom: 5px;
  padding-left: 20px;
}
</style>