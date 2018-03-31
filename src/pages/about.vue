<template>
  <div>
    <div class="content">
      <div class="aboutUsTit">About Ridunshe</div>
        <div class="dataContent" v-html="content"></div>
    </div>

    <foot></foot>
  </div>
</template>

<script>
import {get} from '@/request'
import foot from '../components/foot.vue'
export default {
  name: 'HelloWorld',
  components: {
    foot
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
      get('/pages?english_name=aboutus').then(res => {
        this.content = res.content
      }).catch(e=>{})
    }
  }
}
</script>

<style scoped>
.content{
  color: rgb(101,101,101);
}
.content img{
  max-width: 1170px;
}
.aboutUsTit{
  font-size: 24px;
  font-weight: bold;
  padding-bottom: 40px;
  color: rgb(101,101,101);
}

</style>
