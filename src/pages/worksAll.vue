<template>
  <div>
    <div class="worksSubImg">
      <router-link class="worksSubImgItem" :to="'works_detail?id='+work.id" v-for="work in data.rows" :key="work.ids">
        <img :src="work.cover"/>
        <div>{{work.title}}</div>
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
      data: {}
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
      get('/works/list?page=' + (this.$route.query.page || 1) + '&category_id=' + (this.$route.query.category_id || 1)).then(res => {
        this.data = res
      })
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
}
.worksSubImgItem img{
  width:286px;
  height:190px;
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
  transition: opacity .35s;
  opacity: 0;
  background: rgba(126,126,126, 0.76);
}
.worksSubImgItem div:hover{
  opacity: 1;
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
}
</style>
