<template>
  <div>
    <div class="newsWrap">
      <div class="newsItem" v-for="row in data.rows" v-bind:key="row.id">
        <div class="newsL">
          <router-link  class="newsTit" v-bind:to="'news_detail?id='+row.id">{{row.title}}</router-link>
          <div class="newsCon dataContent"  v-html="row.intro.replace(/\r\n/g,'<br/>')"></div>
          <div class="newsF">
            <div class="newsFL">{{row.created_time}}</div>
            <router-link class="newsFR" v-bind:to="'news_detail?id='+row.id">Read more <div class="moreBtn"></div></router-link>
          </div>
        </div>
        <router-link class="newsR" router-link v-bind:to="'news_detail?id='+row.id">
          <img :src="row.pic" @click="reload()"/>
          <!-- <div>works title</div> -->
        </router-link>
      </div>
    </div>
    <pages v-if="data.count" :countNum="data.count" :currentPage="data.current_page" :pageSize="data.page_size"></pages>
    <share></share>
    <foot></foot>
  </div>
</template>

<script>
import {get} from '@/request'
import pages from '../components/pages.vue'
import foot from '../components/foot.vue'
import share from '../components/share.vue'
export default {
  components: {
    pages, foot, share
  },
  data () {
    return {
      page: 1,
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
      get('/news/list?page=' + (this.$route.query.page || 1)).then(res => {
        // var oMeta = document.getElementsByTagName('meta')[2];    //第二个
        // oMeta.content = "phone";
        this.data = res
      })
    }
  }
}
</script>

<style scoped>
.newsWrap{
  border-top: 1px solid rgb(148,148,155);
}
.newsItem:after{
  clear: both;
  display: block;
  content:'';
}
.newsItem{
  padding: 48px 0;
  border-bottom: 1px solid rgb(148,148,155);
}
.newsL{
  float: left;
  width:450px;
}
.newsTit{
  display: block;
  font-size: 34px;
  line-height: 36px;
  font-weight: bold;
  color: rgb(63,63,63);
  text-decoration: none;
}
.newsCon{
  padding-top:30px;
  line-height: 24px;
  font-size: 14px;
  color: rgb(101,101,101);
  height:170px;
  overflow: hidden;
}
.newsF{
  color: rgb(101,101,101);
  font-size: 12px;
  line-height: 14px;
}
.newsF:after{
  display: block;
  clear: both;
  content: '';
}
.newsFL{
  float: left;
}
.newsFR{
  float: right;
  vertical-align: middle;
  display: block;
  text-decoration: none;
  color: rgb(101,101,101);
}
.moreBtn{
  width:14px;
  height:14px;
  display: inline-block;
  background: url(../assets/moreBtn.png) no-repeat;
  background-size:100%;
}
.newsR{
  float: right;
  width: 490px;
  height:250px;
  display: block;
}
.newsR img{
  display: block;
  width: 490px;
  height:250px;
}

@media screen and (max-width: 1024px){
  .newsWrap{
    /* display: none; */
  }
  .newsItem{
    display: flex;
    /* justify-content: flex-end; */
    flex-wrap: wrap-reverse;
    padding: 20px 0;
  }
  .newsL,.newsR{
    float: none;
    width:100%;

  }
  .newsTit{
    font-size: 16px;
  }
  .newsCon{
    height: auto;
    padding-top: 0px;
  }
  .newsF{
    padding:10px 0;
  }
  .newsR{
    width: 100%;
    height: auto;
  }
  .newsFR{
    display: flex;
    align-items: center;
  }
  .newsFR div{
    margin-left: 4px;
  }
  .newsR img{
    width: 100%;
    height: auto;
  }
}
</style>
