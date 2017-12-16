<template>
  <div class="music">
        <div class="musicList">
          <ul class="albums">
            <li v-for=" obj in musicList" :key="obj.id">
              <router-link :to="'/music/music_player/'+obj.name"><img :src="obj.bg" alt=""></router-link>
            </li>
          </ul>
        </div>
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data(){
      return{
        musicList:[]
      }
  },
  mounted(){
      Axios.get('/static/musiclist.json')
      .then((res)=>{
          this.musicList =res.data.albums;
          console.log(this.musicList);
      })
      
  },
}
</script>
<style scoped>
    .albums{
      position: absolute;
      top:1rem;
      bottom:1rem;
      width: 100%;
      
    }
    .albums li{
        width: 50%;
        height: 33.33%;
        float: left;
    }
    img{
      width: 100%;
      height: 100%;
    }
</style>
