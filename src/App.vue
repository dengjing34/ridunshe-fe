<template>
<div class="appWrap">
  <div id="app">
    <div class="logoWrap logoWrapphone">
      <router-link class="logo" to="/" @click.native="logoClick">
        <img src="./assets/logo.png"/>
      </router-link>
      <div class="menuBtn" :class="{menuBtnShow:navShow}" @click="openMenu">×</div>
    </div>
    <div class="wrap">
      <div class="nav" :class="{navShow:navShow}">
        <div class="logoWrap logoWrappc">
          <router-link class="logo" to="/" @click.native="logoClick">
            <img src="./assets/logo.png"/>
          </router-link>
        </div>
        <div class="navP">
          <router-link  class="navItem"
            v-bind:class="{navItemActive:nowNav == nav.link}"
            v-bind:to="nav.link"
            v-for="nav in navs" v-bind:key="nav.ename">
            <div class="navItemTxt navItemWeb">{{nav.ename}}</div>
            <div class="navItemTxt navItemPhone" @click="navClick(nav,$event)">
              <div>{{nav.ename}}</div>
              <div
                v-if="nav.children && nav.children.length"
                :class="{arrowUp:((nowNav == nav.link && navSubShow === '') || navSubShow)}">
              </div>
            </div>
            <div class="navItemSub navItemSubWeb"
              :class="{navItemSubWrapShow: nowNav == nav.link}"
              v-if="nav.children && nav.children.length">
              <router-link
                v-bind:to="nav.link+'?category_id='+subnav.id"
                v-for="subnav in nav.children"
                :key="subnav.ename"
                :class="{subnavActive: nowNav == nav.link && nowSubNav == subnav.id}"
                >
                {{subnav.ename}}
              </router-link>
              <div class="markBottom"></div>
              <div class="markTop"></div>
            </div>
            <div class="navItemSub navItemSubPhone"
              :class="{navItemSubWrapShowPhone: (nowNav == nav.link && navSubShow === '') || navSubShow}"
              v-if="nav.children && nav.children.length">
              <router-link
                v-bind:to="nav.link+'?category_id='+subnav.id"
                v-for="subnav in nav.children"
                @click.native="navClick(subnav)"
                :key="subnav.ename"
                :class="{subnavActive: nowNav == nav.link && nowSubNav == subnav.id}"
                >
                {{subnav.ename}}
              </router-link>
            </div>
          </router-link>
          <!-- <div class="navItem"><div class="navItemTxt">ABOUT</div></div>
          <div class="navItem">
            <div class="navItemTxt">WORKS</div>
            <div class="navItemSub">
              <div>All</div>
              <div>Space</div>
              <div>Brand</div>
            </div>
          </div>
          <div class="navItem"><div class="navItemTxt">NEWS</div></div>
          <div class="navItem"><div class="navItemTxt">CONTANT</div></div> -->
        </div>
        <div class="copyRight" v-if="window.showLogoStage">
            Copyright © Ridunshe committee. <br/>
            All rights reserved.<br/>
            <a href="https://beian.miit.gov.cn/" target="_blank">蜀ICP备11010974号-2</a>
        </div>
      </div>
      <div class="conWrap">
        <div class="conMark"></div>
        <router-view/>

      </div>
    </div>
  </div>
  <div class="logoStage" v-if="showLogoStage"></div>
</div>
</template>

<script>
import {get} from '@/request'

export default {
  name: 'App',
  data () {
    return {
      window,
      showLogoStage: window.showLogoStage,
      navs: [],
      nowNav: '',
      nowSubNav: '',
      navShow: false,
      navSubShow: ''
    }
  },
  updated () {
    this.nowSubNav = this.$route.query.category_id || ''
    this.nowNav = this.$route.name
  },
  created () {
    this.getNav()
  },
  mounted () {
    function setFontSize () {
      var doc = window.document;
      var $html = doc.getElementsByTagName('html')[0];
      // var windowWidth = doc.documentElement.clientWidth || doc.body.clientWidth || window.innerWidth;
      var appWidth = doc.getElementById('app').clientWidth;
      $html.style.fontSize = (appWidth - 40 - 290) / 1170 * 100 + 'px';
      // console.log(appWidth)
      // console.log($html.style.fontSize)
    }
    window.onresize = setFontSize;
    setFontSize();
    if (window.showLogoStage) {
      setTimeout(() => {
        this.showLogoStage = false
        // window.showLogoStage = false
      }, 2800)
    }
  },
  methods: {
    getNav () {
      get('/index/menu').then(res => {
        this.navs = res
      }).catch(e => {})
    },
    logoClick () {
      this.navShow = false;
    },
    navClick (nav, e) {
      if (nav.link == 'works') {
        this.navSubShow = !(((this.nowNav == nav.link && this.navSubShow === '') || this.navSubShow))
        e.preventDefault()
        return
      }
      this.navShow = false
    },
    openMenu () {
      this.navShow = !this.navShow
    }
  }
}
</script>

<style>
html,body{
  margin:0;
  padding:0;
}
html,body,div,a,p,span{
  font-family:'Microsoft YaHei';
}
img{
  border: none;
}
#app {
  min-width: 1024px;
  max-width: 1460px;
  padding:0 20px;
  margin:0 auto;
  /* border:1px solid red; */
  font-family: 'Microsoft YaHei','Avenir', Helvetica, Arial, sans-serif;
  font-size: 14px;
}
@keyframes opacityAnimation
{
  from {opacity: 1;}
  to {opacity: 0.1;}
}
.logoStage{
  width: 100%;
  height: 100%;
  position: fixed;
  background: #fff url(./assets/logoStage.png) center center no-repeat;
  background-size:100px;
  z-index: 1000;
  left: 0;
  top: 0;
  /* opacity: 0.1; */
  animation: opacityAnimation 1s linear 2s;
}

.logoWrap{
  padding:42px 0 36px 0;
}
.logoWrapphone{
  display: none;
}
.logoWrap .logo{
  display: block;
  padding-left:0;
}
.logo img{
  width:164px;
  height: 27px;
}
.menuBtn{
  display: none;
}

.nav{
  width:290px;
  position: fixed;
  z-index: 2;
  bottom:0;
  top:0;
}
.navItem{
  display: block;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  color: rgb(145,145,145);
  line-height: 35px;
  letter-spacing: 6px;
}
.navItemTxt{
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Georgia-Bold','Georgia';
  font-size: 14px;
}
.router-link-active,.navItemActive,.navItemTxt:hover{
  color: rgb(80,80,80);
  padding-left: 12px;
}

.navItemSub{
  margin-left: 30px;
  text-indent: 12px;
  border-left: 1px solid rgb(63,63,63);
  transition: opacity .35s, transform .35s, display 3s ease 3s;
  opacity: 0.3;
  transform: scale(1, 0);
  display: none;
  position: relative;
}
.navItemSub .markTop,.navItemSub .markBottom{
  width:2px;
  height: 12px;
  background: #fff;
  position: absolute;
  left: -2px;
}
.navItemSub .markTop{
  top:0;
}
.navItemSub .markBottom{
  bottom:0;
}

.navItemSubPhone,.navItemPhone{
  display: none;
}

.navItemSubWrapShow,.navItemSubWrapShowPhone{
  transform: scale(1);
  opacity: 1;
  display:block;
}
.navItemSubWrapShowPhone{
  display: none;
}
.navItemSub a{
  cursor: pointer;
  display: block;
  text-decoration: none;
  color: rgb(145,145,145);
  padding-left: 0;
  transition: all 0.2s;
  font-family: 'Georgia-Bold','Georgia';
  font-size: 14px;
  line-height: 35px;
}
.navItemSub a:hover{
  padding-left: 12px;

}

.subnavActive,.navItemSub a:hover{
  color: rgb(80,80,80) !important;
  padding-left: 12px  !important;
}

.conWrap{
  /* width:1170px; */
  width:11.70rem;
  position: relative;
  margin-bottom:50px;
  padding-top:110px;
  padding-left: 290px;
}
.conMark{
  /* width: 1170px; */
  width: 11.7rem;
  height:110px;
  position: fixed;
  background: #fff;
  z-index: 10;
  top: 0;
  /* border: 1px solid red; */
}
.wrap:after{
  clear: both;
  display:block;
  content:"";
}

.copyRight{
  position: absolute;
  width:290px;
  left: 0;
  bottom: 0;
  padding-bottom: 50px;
  color: #a2a2a6;
  font-size: 12px;
}
.copyRight a {
  font-size: 12px;
  color: #a2a2a6;
}
.dataContent img{
      max-width: 100%;
}

.jiathis_weixin_modal{
  margin:0 !important;
  transform: translate(-50%,-50%);
  padding: 10px;
  width:300px !important;
  height: auto;
}

@media screen and (max-width: 1024px){
  .appWrap{
    padding:0 16px;
  }
  #app{
    min-width: 100%;
    max-width:100%;
    width:100%;
    overflow: hidden;
    padding: 70px 0 0 0;
  }
  .logoWrap{
    padding:20px 0;
    display: flex;
    justify-content: space-between;
    position: fixed;
    z-index: 5;
    left: 16px;
    right:16px;
    top:0;
    background: #fff;
  }
  .logoWrapphone{
    display: flex;
  }
  .logoWrappc{
    display: none;
  }
  .logo img{
    width:auto;
    height:18px;
  }
  .menuBtn{
    display: block;
    background-image: url(./assets/menu_icon.png);
    background-repeat: no-repeat;
    background-position: center center;
    background-size:100%;
    text-indent: -100px;
    width:18px;
    height:18px;
    overflow: hidden;
    color: rgb(76,76,76);
    transition: all 0.3s;
  }
  .menuBtnShow{
    background-image: url(./assets/menu_close_icon.png);
    background-size: 16px 16px;
  }
  .nav{
    float: none;
    position: fixed;
    background: #fff;
    width:100%;
    top:62px;
    bottom:0;
    left: 0;
    z-index: 5;
    /* display: none; */
    opacity: 0;
    transition: opacity .35s,transform .35s;
    transform: scale(1,0);
  }
  .navItemTxt:hover{
    color: rgb(126,126,126);
    padding-left: 0;
  }
  .navShow{
    display: block;
    opacity: 1;
    transform: scale(1,1);
  }
  .navP{
    padding:20px 16px 0;
  }
  .navP .navItem{
    border-bottom:1px solid rgb(86,86,86);
    line-height: 42px;
  }
  .navP .navItem:nth-child(1){
    border-top:1px solid rgb(86,86,86);
  }
  .navItemSub{
    border-left: none;
    position: static;
  }
  .navItemSub .markTop,.navItemSub .markBottom{
    display: none;
  }
  .navItemSubWeb,.navItemWeb{
    display: none;
  }
  .navItemPhone{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navItemPhone div:nth-child(2){
    width:18px;
    height: 10px;
    background: url(./assets/arrow.png) no-repeat;
    background-size: 100% 100%;
    transition: transform 0.3s;
    transform: rotateZ(180deg);
  }
  .navItemPhone div:nth-child(2).arrowUp{
    transform: rotateZ(0deg);
  }
  .navItemSubWrapShowPhone{
    display: block;
  }
  .conWrap{
    min-width: 100%;
    max-width:100%;
    width:100%;
    overflow: hidden;
    padding-top:0;
    padding-left: 0;
    margin-bottom:20px;
  }
  .conMark{
    display: none;
  }
  .dataContent img{
    max-width: 100%;
  }
  .copyRight{
    display:none;
    position: static;
  }
}
</style>
