<template>
  <div class="movie">
      <common-header title="Movie"></common-header>
      <movie-navs></movie-navs>
        <div class='list'>
         <movie-list v-for="(obj,index) in movieList" :key="index" :title="obj.nm"
        :year = "obj.snum" :img = "obj.img" :avg = "obj.sc" :desc = "obj.cat"
        >
        </movie-list>
        <div v-show="isShow">
          <img src="/static/img/loading.gif" alt="">
        </div>
      </div>
      <common-footer></common-footer>
      

    </div>
    
     
</template>
<script>
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
  mounted(){
      Axios.get(API_PROXY+"http://m.maoyan.com/movie/list.json?type=hot&offset=0&limit=10")
      .then((res)=>{
        this.movieList=res.data.data.movies;
        console.log(res.data.data.movies);
      });
      let _this = this;
      
      window.onscroll = function(){
      let clientHeight = document.documentElement.clientHeight;
      let scrollTop = document.documentElement.scrollTop;
      let scrollHeight = document.documentElement.scrollHeight;
        if(clientHeight+scrollTop>=scrollHeight){
          _this.isShow =true;
          Axios.get(API_PROXY+"http://m.maoyan.com/movie/list.json?type=hot&offset="+_this.movieList.length+"&limit=10")
          .then((res)=>{
             _this.movieList = _this.movieList.concat(res.data.data.movies);
             _this.isShow =false;
          })
        
        }
      }

  },
  components:{
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