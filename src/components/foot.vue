<template>
 <div class="footer">
  <div class="flm">
    <div class="fl">
      <div class="flIcon">
        <!-- <div class="flIcon1"></div>
        <div class="flIcon2"></div> -->
      </div>
      <div class="footTxt">
        T / 138 8070 7553 &nbsp;&nbsp;&nbsp;134 0863 1535<br/>
        E / ridunshe@126.com
      </div>
    </div>
    <div class="fm">
      <div class="fmrTit"></div>
      <div class="footTxt">
        No.2,Unit 4,Xingfu Road,Shansheng Town,Jinjiang District,Chengdu ciity<br/>
        成都市·锦江区·三圣乡·幸福梅林·幸福联合四组2号
      </div>
    </div>
  </div>
  <div class="fr">
    <div class="fmrTit"></div>
    <div class="footTxt">
      Copyright © Ridunshe committee.<br/>
      All rights reserved.
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
  padding-top:120px;
  color: rgb(145,145,145);
  font-size: 12px;
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
  width: 300px;
}
.flm{
  float: left;
}
.fm{
  width: 670px;
}
.fr{
  width: 200px;
}
.flIcon{
  height:32px;
  border-bottom: 1px solid rgb(121,121,121);
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
  font-weight: bold;
  padding-bottom: 12px;
  border-bottom: 1px solid rgb(121,121,121);
  height:20px;
}
.footTxt{
  padding-top:18px;
  line-height: 24px;
}
@media screen and (max-width: 1024px){
  .footer{
    padding-top:30px;
  }
  .fl,.flm,.fm,.fr{
    float: none;
  }

  .flm{
    /* display: flex; */
    display: none;
  }
  .fl{
    width:40%;
  }
  .fm{
    width: 60%;
  }
  .fr{
    width: 100%;
  }
  .fr .footTxt{
    text-align: center;
  }
  .fl .footTxt{
    padding-top:10px;
    padding-right:3px;
  }
  .fm .footTxt{
    padding-top:10px;
  }
}
</style>
