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
              <div v-if="nav.children && nav.children.length">{{((nowNav == nav.link && navSubShow === '') || navSubShow) ? '∧' : '∨'}}</div>
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
      </div>
      <div class="conWrap">
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
    if (window.showLogoStage) {
      setTimeout(() => {
        this.showLogoStage = false
      }, 2800)
    }
  },
  methods: {
    getNav () {
      get('/index/menu').then(res => {
        this.navs = res
      }).catch(e=>{})
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
  font-family:”Microsoft YaHei”;
}
img{
  border: none;
}
#app {
  width: 1460px;
  margin:0 auto;
  /* border:1px solid red; */
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
}
.navItem{
  display: block;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  color: rgb(126,126,126);
  line-height: 20px;
}
.navItemTxt{
  cursor: pointer;
  transition: all 0.2s;
  font-family: 'Georgia-Bold';
  font-size: 14px;
}
.router-link-active,.navItemActive,.navItemTxt:hover{
  color: rgb(63,63,63);
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
  color: rgb(126,126,126);
  padding-left: 0;
  transition: all 0.2s;
  font-family: 'Georgia-Bold';
  font-size: 14px;
  line-height: 20px;
}
.navItemSub a:hover{
  padding-left: 12px;

}

.subnavActive,.navItemSub a:hover{
  color: rgb(63,63,63) !important;
  padding-left: 12px  !important;
}

.conWrap{
  width:1170px;
  position: relative;
  margin-bottom:50px;
  padding-top:110px;
  padding-left: 290px;
}
.wrap:after{
  clear: both;
  display:block;
  content:"";
}

@media screen and (max-width: 1024px){
  .appWrap{
    padding:0 16px;
  }
  #app{
    width:100%;
    overflow: hidden;
    padding-top:92px;
  }
  .logoWrap{
    padding:30px 0;
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
  .logo{

  }
  .menuBtn{
    display: block;
    font-size: 30px;
    background: url(./assets/menu_icon.png) no-repeat center center;
    background-size:100%;
    text-indent: -100px;
    width:32px;
    height:30px;
    overflow: hidden;
    text-align: center;
    line-height: 30px;
    color: rgb(76,76,76);
  }
  .menuBtnShow{
    text-indent: 0;
    background: none;
  }
  .nav{
    float: none;
    position: fixed;
    background: #fff;
    width:100%;
    top:92px;
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
    padding:20px 25px 0;
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
  }
  .navItemSubWeb,.navItemWeb{
    display: none;
  }
  .navItemPhone{
    display: flex;
    justify-content: space-between;
  }
  .navItemSubWrapShowPhone{
    display: block;
  }
  .conWrap{
    width:100%;
    overflow: hidden;
    padding-top:0;
    padding-left: 0;
  }
  .dataContent img{
    max-width: 100%;
  }
}
</style>
