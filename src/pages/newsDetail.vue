<template>
  <div>
    <div class="content">
      <div class="dataContent" v-html="content"></div>
    </div>
    <share/>
    <foot></foot>
  </div>
</template>

<script>
import {get} from '@/request'
import foot from '../components/foot.vue'
import share from '../components/share.vue'
export default {
  name: 'HelloWorld',
  components: {
    foot, share
  },
  data () {
    return {
      content: ''
    }
  },
  created () {
    this.getContent()
  },
  methods: {
    getContent () {
      get('/news/detail?id=' + this.$route.query.id).then(res => {
        document.title += ('-News ' + res.title)
        this.content = res.content
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
  font-size: 34px;
  line-height: 36px;
  font-weight: bold;
  color: rgb(63,63,63);
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
}
.moreBtn{
  width:14px;
  height:14px;
  display: inline-block;
  background: url(../assets/moreBtn.png) no-repeat;
}
.newsR{
  float: right;
  width: 490px;
  height:250px;
}
.newsR img{
  display: block;
  width: 490px;
  height:250px;
}
</style>
