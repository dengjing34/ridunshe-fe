<template>
  <div>
    <div class="content">
      <!-- <div class="wdHead">
        <div class="wdHeadL">
          <div class="wdHeadMark">{{data.category_en}}</div>
          <div class="wdHeadTit">{{data.title}}</div>
          <div class="wdHeadYear">{{data.year}}</div>
          <div class="wdHeadArea">{{data.area}}</div>
        </div>
        <div class="wdHeadR">
          <div class="wdHeadSubTit">{{data.sub_title}}</div>
          <div class="wdHeadIntro dataContent" v-html="data.intro"></div>
        </div>
      </div> -->
      <div class="wdHead2">
        <h1>{{data.title}} | {{data.sub_title}}</h1>
        <div class="wdHeadIntro2 dataContent" v-html="data.intro"></div>
      </div>
      <div class="dataContent">
        <img :src="data.pic"/>
      </div>
      <div class="dataContent" v-html="data.content"></div>
    </div>
    <share/>
    <foot/>
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
      data: {}
    }
  },
  created () {
    this.getContent()
  },
  methods: {
    getContent () {
      get('/works/detail?id=' + this.$route.query.id).then(res => {
        document.title += ('-Works ' + res.title + ' ' + res.sub_title)
        res.intro = res.intro.replace(/\r\n/g, '<br/>')
        this.data = res
      }).catch(e => {})
    }
  }
}
</script>

<style scoped>
.wdHead:after{
  clear: both;
  display: block;
  content:'';
}
.wdHead{
  padding-bottom: 80px;
}
.wdHeadL{
  float: left;
  width:450px;
  color: rgb(63,63,63);
  font-size: 14px;
}
.wdHeadMark{
  font-weight: bold;
  padding-bottom: 57px;
}
.wdHeadTit{
  padding-bottom: 80px;
}
.wdHeadYear{
  padding-bottom: 12px;
}
.wdHeadR{
  float: right;
  width:660px;
}
.wdHeadSubTit{
  font-size: 20px;
  font-weight: bold;
  color: rgb(63,63,63);
  padding-bottom: 38px;
}
.wdHeadIntro{
  font-size: 12px;
  color: rgb(126,126,126);
  line-height: 24px;
}

.wdHead2{
  padding-bottom: 60px;
  max-width: 720px;
}
.wdHead2 h1{
  font-size: 16px;
  color: rgb(63,63,63);
}
.wdHeadIntro2{
  font-size: 12px;
  color: rgb(126,126,126);
  line-height: 24px;
}
.dataContent{
  width:100%;
}

@media screen and (max-width: 1024px){
  .wdHead2{
    padding-bottom: 0;
    max-width: auto;
  }

  .wdHead{
    padding: 0;
  }
  .wdHeadL{
    width: 100%;
    float: none;
  }
  .wdHeadR{
    width: 100%;
    float: none;
  }
  .wdHeadMark{
    padding-bottom: 20px;
  }
  .wdHeadTit{
    padding-bottom: 30px;
  }
  .wdHeadSubTit{
    padding:20px 0;
  }
  .content img{
    max-width: 100%;
  }
}
</style>
