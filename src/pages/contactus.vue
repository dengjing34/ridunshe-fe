<template>
  <div>
    <div class="content">
      <div class="htmlCon">
        <div class="dataContent" v-html="content"></div>
      </div>
      <div class="mapConWrap">
        <div class="mapCon">
          <!-- <iframe width="504" height="425" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://j.map.baidu.com/3uXGO"></iframe> -->
          <iframe width="504" height="425" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://j.map.baidu.com/WzDdP"></iframe>
          <!-- <iframe ref="iframeMap" width="504" height="425" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe> -->
        </div>
      </div>
    </div>

    <div class="footer">
      Copyright © Ridunshe committee.<br/>
      All rights reserved.
    </div>
  </div>
</template>

<script>
import {get} from '@/request'
export default {
  name: 'HelloWorld',
  data () {
    return {
      content: ''
    }
  },
  created () {
    this.getContent()
  },
  mounted () {
    // var doc = this.$refs.iframeMap.contentDocument || this.$refs.iframeMap.document;
    // console.log(doc);
    // doc.body.innerHTML = ''
  },
  methods: {
    getContent () {
      get('/pages?english_name=contactus').then(res => {
        this.content = res.content
      }).catch(e => {})
    }
  }
}
</script>

<style scoped>
.content:after{
  display: block;
  clear: both;
  content:'';
}
.htmlCon{
  width: 470px;
  float: left;
}
.mapConWrap{
  padding-top:140px;
  float:right;
}
.mapCon{
  width:500px;
  height: 310px;
  /* border: 1px solid red; */
  overflow: hidden;
}
.mapCon iframe{
  margin-top:-30px;
}

.footer{
  padding-top:50px;
  color: rgb(126,126,126);
  font-size: 12px;
}

@media screen and (max-width: 1024px){
  .htmlCon{
    width: 100%;
    float: none;
    margin-bottom: 20px;
  }
  .mapConWrap{
    width: 100%;
    max-width: 500px;
    float: none;
  }
  .mapCon{
    width: 100%;
    max-width: 500px;
  }
}
</style>
