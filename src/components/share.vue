<template>
    <!-- JiaThis Button BEGIN -->
    <!-- <div class="shareWrap jiathis_style_32x32"> -->
    <div class="shareWrap">
      <a class="jiathis_button_weixin"></a>
      <a class="jiathis_button_tsina"></a>
      <!-- <a href="http://www.jiathis.com/share" class="jiathis jiathis_txt jiathis_separator jtico jtico_jiathis" target="_blank"></a> -->
      <a @click="jumpTop"></a>
    <!-- <script type="text/javascript" >
    var jiathis_config={
      summary:"",
      shortUrl:false,
      hideMore:false
    }
    </script>
    <script type="text/javascript" src="http://v3.jiathis.com/code_mini/jia.js" charset="utf-8"></script> -->
    <!-- JiaThis Button END -->
  </div>
</template>

<script>
// import jia from './jia.js';
// console.log(jia);
// window.jia = jia;
export default {
  data () {
    return {

    };
  },
  mounted () {
    window.jiathis_config = {
      // url:"http://",
      // summary:"摘要", //摘要
      // title:"标题 #话题#", //标题 #话题#
      shortUrl: false,
      hideMore: false
    }
    // jia();
    let url = 'http://v3.jiathis.com/code_mini/jia.js'
    let script = document.createElement('script')
    script.setAttribute('src', url)
    document.getElementsByTagName('head')[0].appendChild(script);
  },
  methods: {
    jumpTop () {
      window.scroll(0, 0)
    }
  }
};
</script>

<style scoped>
.shareWrap{
  /* border: 1px solid red; */
  padding: 40px 0;
  text-align: center;
}
.shareWrap::after{
  display: block;
  clear: both;
  content: '';
}
.shareWrap a{
  display: inline-block;
  width:30px;
  height:30px;
  background-image: url(../assets/share_icon.png);
  background-image: url(../assets/share_icon_x1.jpg)\9;
  background-size: auto 30px;
  margin-right:10px;
  transition: transform .35s;
  transform:scale(1);
  cursor: pointer;
}
.shareWrap a:nth-child(1){

}
.shareWrap a:hover{
  transform:scale(1.2);
}
.shareWrap a:nth-child(1):hover{
  /* transform:rotate(90deg) scale(1.2); */
}
.shareWrap a:nth-child(1){
  background-position-x:-82px;
}
.shareWrap a:nth-child(2){
  background-position-x:-121px;
}
@media screen and (max-width: 1024px){
  .shareWrap a:hover{
    transform:scale(1);
  }
}
</style>
