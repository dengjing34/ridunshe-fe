<template>
  <div>
    <div class="worksSubImg">
      <router-link class="worksSubImgItem" :to="'works_detail?id='+work.id" v-for="(work,index) in data.rows" :key="work.ids" :class="{easyShow:easyShowIndex>=(index+1)}">
        <img :src="work.cover"/>
        <div><p>{{work.title}}</p></div>
      </router-link>
    </div>

    <pages v-if="data.count" :countNum="data.count" :currentPage="data.current_page" :pageSize="data.page_size"></pages>

    <foot/>
  </div>
</template>

<script>
import {get} from '@/request'
import pages from '../components/pages.vue'
import foot from '../components/foot.vue'
export default {
  name: 'HelloWorld',
  components: {
    foot, pages
  },
  data () {
    return {
      data: {},
      easyShowIndex: 0
    }
  },
  beforeRouteUpdate (to, from, next) {
    next()
    this.reload()
  },
  created () {
    this.getContent()
  },
  methods: {
    reload () {
      window.scrollTo(0, 0)
      this.data = {}
      this.getContent()
    },
    getContent () {
      this.easyShowIndex = 0;
      get('/works/list?page=' + (this.$route.query.page || 1) + '&category_id=' + (this.$route.query.category_id || '')).then(res => {
        this.data = res
        if (this.data.rows && this.data.rows.length) {
          setTimeout(() => {
          // console.log(this.data.rows)
            let timer = setInterval(() => {
              if (this.easyShowIndex++ > this.data.rows.length) {
                clearInterval(timer);
              }
            }, 140);
          }, 500)
        }
      }).catch(e => {})
    }
  }
}
</script>

<style scoped>
.worksSubImgItem{
  display: inline-block;
  margin-right:6px;
  margin-bottom:6px;
  width:286px;
  height:190px;
  position: relative;
  overflow: hidden;
  transition: opacity 0.5s ease-out,transform 0.4s ease-out;
  transform: translateY(50%);
  opacity: 0;
}
.easyShow{
  transform: translateY(0);
  opacity: 1;
}
.worksSubImgItem img{
  width:286px;
  height:190px;
  transition: transform 0.5s ease-out;
}
.worksSubImgItem div{
  position: absolute;
  left:0;
  top:0;
  width:286px;
  height:190px;
  line-height: 190px;
  text-align: center;
  color: #fff;
  transition: opacity .3s;
  opacity: 0;
  background: rgba(126,126,126, 0.76);
  font-size: 12px;
}
.worksSubImgItem div p{
  transform: translate(0, 40px);
  transition: transform 0.35s;
  line-height: 190px;
  /* border: 1px solid red; */
  margin:0;
}
.worksSubImgItem:hover  div{
  opacity: 1;
}
.worksSubImgItem:hover  div p{
  transform: translate(0, 0);
}
.worksSubImgItem:hover img{
  transform: scale(1.2);
}

@media screen and (max-width: 1024px){
  .worksSubImgItem,.worksSubImgItem img{
    width:100%;
    height: auto;
    text-decoration: none;
  }
  .worksSubImgItem div{
    position: static;
    opacity: 1;
    line-height: 40px;
    height:45px;
    width:100%;
    text-align: left;
    background: none;
    color: rgb(63,63,63);
  }
  .worksSubImgItem div p{
    transform: none;
  }
}
</style>
