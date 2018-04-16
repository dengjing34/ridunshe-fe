<template>
    <div class="pages" v-if="page_count>1">
        <router-link class="preBtn" v-bind:to="'?'+urlSearch+'page='+(+current_page-1)" v-if="current_page !=1">&lt;</router-link>
        <router-link class="pageNum"
        v-bind:to="'?'+urlSearch+'page='+p"
        v-for="p in show_pages"
        v-bind:key="p"
        v-bind:class="{active:current_page==p}"
        >{{p}}</router-link>
        <router-link class="nextBtn" v-bind:to="'?'+urlSearch+'page='+(+current_page+1)" v-if="current_page !=page_count">&gt;</router-link>
    </div>
</template>

<script>
export default {
  data () {
    return {
      count: 1,
      current_page: 1,
      page_size: 1,

      show_pages: [],
      page_count: 1,
      urlSearch: ''
    };
  },
  props: ['countNum', 'currentPage', 'pageSize'],

  created () {
    if (window.location.search) {
      let urlSearch = '';
      let searchArr = window.location.search.replace(/^\?/, '').split('&');
      for (let i in searchArr) {
        let kvs = searchArr[i].split('=');
        if (kvs && kvs.length === 2 && kvs[0] != 'page') {
          urlSearch += searchArr[i] + '&';
        }
      }
      this.urlSearch = urlSearch;
    }
    // setTimeout(()=>{
    // this.count = 180;
    this.count = this.countNum;
    this.current_page = this.currentPage;
    this.page_size = this.pageSize;

    this.page_count = Math.ceil(this.count / this.page_size);
    var showMinPage = Math.max(+this.current_page - 4, 1);
    var showMaxPage = Math.min(+this.current_page + 3, this.page_count);
    if (showMaxPage - showMinPage < 8) {
      showMinPage = Math.max(showMinPage - (8 - (showMaxPage - showMinPage) - 1), 1);
    }
    if (showMaxPage - showMinPage < 8) {
      showMaxPage = Math.min(showMaxPage + (8 - (showMaxPage - showMinPage) - 1), this.page_count);
    }
    // console.log(this.current_page)
    // console.log(showMinPage)
    // console.log(showMaxPage)
    this.show_pages = [];
    for (let i = showMinPage; i <= showMaxPage; i++) {
      this.show_pages.push(i);
    }
    // },500)
  },
  methods: {

  }
};
</script>

<style scoped>
.pages{
  text-align: center;
  padding-top: 30px;
}
.pages a{
  display: inline-block;
  padding:0 10px;
  cursor: pointer;
  text-decoration: none;
  color: rgb(101,101,101);
}
.pages a:hover,.pages a.active{
  color: rgb(45,45,45);
}
</style>
