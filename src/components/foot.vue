<template>
 <div class="footer">
  <div class="fl">
    <div class="flIcon">
      <div class="flIcon1"></div>
      <div class="flIcon2"></div>
    </div>
    <div class="footTxt">
      Copyright © Ridunshe committee.<br/>
      All rights reserved.
    </div>
  </div>
  <div class="fmr">
    <div class="fm">
      <div class="fmrTit">Contact</div>
      <div class="footTxt">
        T / 138 8070 7553 &nbsp;&nbsp;&nbsp;134 0863 1535<br/>
        E / ridunshe@126.com
      </div>
    </div>
    <div class="fr">
      <div class="fmrTit">Add</div>
      <div class="footTxt">
        No.2,Unit 4,Xingfu Road,Shansheng Town,Jinjiang District,Chengdu ciity<br/>
        成都市·锦江区·三圣乡·幸福梅林·幸福联合四组2号
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {

    };
  },
  methods: {

  }
};
</script>

<style scoped>
.footer{
  padding-top:80px;
}
.footer:after{
  clear: both;
  display: block;
  content:'';
}
.fl,.fm,.fr{
  float: left;
}
.fl{
  width: 400px;
}
.fmr{
  float: left;
}
.fm{
  width: 370px;
}
.fr{
  width: 400px;
}
.flIcon{
  height:33px;
}
.flIcon1{
  width: 0;
    height: 0;
    border-right: 10px solid transparent;
    border-bottom: 10px solid rgb(46,46,46);
    border-left: 10px solid transparent;
}
.flIcon2{
  width:20px;
  height:16px;
  background: rgb(46,46,46);
}
.fmrTit{
  font-size: 20px;
  color: rgb(46,46,46);
  font-weight: bold;
  padding-bottom: 12px;
  border-bottom: 1px solid rgb(46,46,46);
  height:20px;
}
.footTxt{
  font-size: 12px;
  color: rbg(126,126,126);
  padding-top:18px;
  line-height: 24px;

}
@media screen and (max-width: 1024px){
  .fl,.fmr,.fm,.fr{
    float: none;
  }

  .fmr{
    padding-top:15px;
    display: flex;
  }
  .fm{
    width: 45%;
  }
  .fr{
    width:55%;
  }
  .fl .footTxt{
    padding-top:10px;
  }
  .fm .footTxt{
    padding-right:3px;
  }
}
</style>
