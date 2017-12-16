<template>
  <div class="movie">
      <common-header title="Movie" nav="首页">
          <button>首页</button>
      </common-header>
      <movie-navs></movie-navs>
       <router-view></router-view>
        <div v-show="isShow">
          <img src="/static/img/loading.gif" alt="">
        </div>
      <common-footer></common-footer>
    </div>
    
     
</template>
<script>
import CommonHeader from '../common/CommonHeader';
import CommonFooter from '../common/CommonFooter';
import MovieNavs from './MovieNavs';
import MovieList from './MovieList';
import Axios from 'axios'
export default {
  name:'HelloWorld',
  data(){
      return{
        movieList:[],
        isShow :false
    }
  },
  components:{
      CommonHeader,
      CommonFooter,
      MovieNavs,
      MovieList
  }
}
</script>
<style scoped>
    .list{
        margin-top: 1rem;
        margin-bottom: 2rem;
    }
</style>