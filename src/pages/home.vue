<template>
  <div>
    <div class="slider" @mouseover="stopSlider" @mouseout="beginSlider">
        <router-link
          v-for="(banner, index) in banners"
          :to="'works_detail?id='+banner.id"
          :style="{zIndex:showBannerIndex == index ? 3 : showNextBannerIndex == index ? 2 : 1}"
          class="sliderImgWrap"
          :class="{sliderActive: showBannerIndex == index}"
          :key="banner.id">
          <img :src="banner.banner_pic"/>
          <div class="hover">
            <p>{{banner.title}}</p>
          </div>
        </router-link>

    </div>
    <div class="sliderBtn">
        <div class="sliderBtnItem" v-for="(banner, index) in banners" @click="switchSlider(index);"
          :class="{active:index==showBannerIndex}" :key="index">
          <div></div>
        </div>
    </div>
    <div class="imgs">
      <router-link :to="'works_detail?id='+item.id" v-for="item in list" :key="item.id">
        <img :src="item.home_pic"/>
        <div>{{item.title}}</div>
      </router-link>
    </div>
    <div class="copyRight">
        Copyright © Ridunshe committee. <br/>
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
      banners: [],
      list: [],
      showBannerIndex: 0,
      showNextBannerIndex: 1
    }
  },
  created () {
    this.getNav()
  },
  methods: {
    getNav () {
      get('/index/home').then(res => {
        this.banners = res.banner
        this.list = res.list
        this.beginSlider()
      }).catch(e => {})
    },
    beginSlider () {
      this.interval = setInterval(() => {
        this.switchSlider()
      }, 3000)
    },
    stopSlider () {
      if (this.interval) {
        clearInterval(this.interval)
      }
    },
    switchSlider (index) {
      let showBannerIndex, showNextBannerIndex
      if (index >= 0) {
        showBannerIndex = index - 1
        this.stopSlider()
        this.beginSlider()
      } else {
        showBannerIndex = this.showBannerIndex
      }

      if (++showBannerIndex >= this.banners.length) {
        showBannerIndex = 0
      }
      showNextBannerIndex = showBannerIndex
      if (++showNextBannerIndex >= this.banners.length) {
        showNextBannerIndex = 0
      }
      this.showBannerIndex = showBannerIndex
      this.showNextBannerIndex = showNextBannerIndex
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slider{
  width:1170px;
  height:490px;
  overflow: hidden;
}
.sliderImgWrap{
  position: absolute;
  display: block;
  float: left;
  opacity: 0;
  transition: opacity .5s;
}
.sliderActive{
  opacity: 1;
}
.sliderImgWrap .hover{
  opacity: 0;
  position: absolute;
  left: 0;
  top:0;
  background: rgba(126,126,126, 0.76);
  text-align: center;
  height: 490px;
  color: #fff;
  width: 1170px;
  transition: all 0.3s;
}

.sliderImgWrap img{
  width:1170px;
  height:490px;
  display: block;
}

.sliderImgWrap .hover::after,
.sliderImgWrap .hover::before {
    position: absolute;
    top: 30px;
    right: 30px;
    bottom: 30px;
    left: 30px;
    content: '';
    opacity: 0;
    pointer-events: none;
    transition: opacity .35s, transform .35s
}

.sliderImgWrap .hover::before {
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transform: scale(0, 1)
}

.sliderImgWrap .hover::after {
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    transform: scale(1, 0)
}

.sliderImgWrap:hover .hover::after,
.sliderImgWrap:hover .hover::before {
    opacity: 1;
    transform: scale(1)
}

.sliderImgWrap:hover .hover{
  opacity: 1;
}

.sliderImgWrap .hover p {
    margin: 0;
    cursor: pointer;
    font-size: 16px;
    line-height: 490px;
    text-align: center;
    color: #fff;
    letter-spacing: 1px;
    opacity: 0;
    transition: opacity .35s, transform .35s;
    transform: translate3d(0, 20px, 0)
}

.sliderImgWrap:hover .hover p {
    opacity: 1;
    transform: translate3d(0, 0, 0)
}

.sliderBtn{
  text-align: center;
  vertical-align: middle;
  padding:22px 0 40px 0;
}
.sliderBtn .sliderBtnItem{
  width:50px;
  height:20px;
  line-height: 20px;

  display: inline-block;
  margin: 0 4px;
  cursor: pointer;
  overflow: hidden;
}

.sliderBtn .sliderBtnItem div{
  height:2px;
  width: 100%;
  background: #d3d3d3;
  display: inline-block;
  overflow: hidden;
}
.sliderBtn .active div{
  height:4px;
  background: #b2441d;
}

.imgs{
  text-align: center;
}
.imgs a{
  display: inline-block;
  width:290px;
  height:290px;
  overflow: hidden;
  margin-right:2px;
  position: relative;
}
.imgs div{
  width:290px;
  height:290px;
  position: absolute;
  left:0;
  top:0;
  line-height: 290px;
  text-align: center;
  color: #fff;
  transition: opacity .35s;
  opacity: 0;
  background: rgba(126,126,126, 0.76);
}
.imgs img{
  display: block;
  width:290px;
  height:290px;
  margin-right: 2px;
  transition: transform 0.35s linear;
}
.imgs a:hover img{
  transform: scale(1.2);
}
.imgs a:hover div{
  opacity: 1;
}
.copyRight{
  position: absolute;
  width:290px;
  left: -290px;
  bottom: 0;
  color: #a2a2a6;
  font-size: 12px;
}

@media screen and (max-width: 1024px){
  .slider{
    width:100%;
    height: auto;

  }
  .sliderImgWrap{
    position: static;
    opacity: 1;
    float: none;
    transition: none;
    margin-bottom: 15px;
  }
  .sliderImgWrap img{
    width:100%;
    height: auto;
  }
  .sliderImgWrap .hover{
    position: static;
    height: auto;
    opacity: 1;
    background: none;
    display: none;
  }
  .sliderImgWrap .hover::after,.sliderImgWrap .hover::before{
    border:none;
  }
  .sliderImgWrap .hover p{
    transform: none;
    transform: none;
    line-height: 40px;
    text-align: left;
    color: rgb(63,63,63);
    opacity: 1;
    text-decoration: none;

  }
  .sliderBtn{
    display: none;
  }
  .imgs{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .imgs a{
    display: block;
    width:49%;
  }
  .imgs a img{
    width:100%;
    height:auto;
  }
  .copyRight{
    position: static;
  }
}
</style>
