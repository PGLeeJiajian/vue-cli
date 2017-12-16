<template>
    <div class="photo">
        <common-header title="photo" bgColor="rgb(63, 81, 181)" nav="<"></common-header>
         <div class="photoList">
             <ul>
          <li v-for="(obj,index) in photoData" :key="index">
                <router-link :to="'/photo/detail/'+index"> 
                <img :src="obj.src" alt="">
                </router-link>
          </li>
             </ul>
  </div>
        <common-footer bgColor="rgb(63, 81, 181)"></common-footer>
    </div>
</template>
<script>
import CommonHeader from "../common/CommonHeader"
import CommonFooter from "../common/CommonFooter"
import {mapState,mapActions} from 'vuex';


import Axios from 'axios'

export default {
    data(){
        return {
       
        }
    },
     mounted(){
      Axios.get('/static/photo-data.json')
      .then((res)=>{
          this.changeData(res.data.photoData);
          console.log(this.photoData);
      })
  },
  
  computed:{
      ...mapState(['photoData'])
  },
  methods:{
      ...mapActions(['changeData'])
  } ,
    components: {
      CommonHeader,
      CommonFooter
    
  }
}
</script>
<style>
.photoList{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 1rem;
    bottom: 1rem;
    
}
.photoList ul{
    width: 100%;
    height: 100%;
}
.photoList li{
    float: left;
    width: 50%;
}
</style>