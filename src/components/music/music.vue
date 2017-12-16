<template>
  <div class="music">
        <common-header title="music" bgColor="rgb(0, 150, 136)" nav="<"></common-header>
       <router-view></router-view>
        <common-footer bgColor="rgb(0, 150, 136)"></common-footer>
  </div>
</template>
<script>
import CommonHeader from '../common/CommonHeader'
import CommonFooter from '../common/CommonFooter'
// import Axios from 'axios'
export default {
  // data(){
  //     return{
  //       musicList:[]
  //     }
  // },
  // mounted(){
  //     Axios.get('/static/musiclist.json')
  //     .then((res)=>{
  //         this.musicList =res.data.albums;
  //     })
  //     console.log(this.musicList);
  // },
  components:{
      CommonHeader,
      CommonFooter
  }
}
</script>
