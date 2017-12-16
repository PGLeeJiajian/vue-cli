<template>
    <div class="header" :style="{background:bgColor}">
         <slot>  
         <button :style="{background:bgColor}"@click="back()">{{nav}}</button>
         </slot>
        <h2>{{title}}</h2>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  props:['title','bgColor','nav'],
  methods:{
    back(){
      history.go(-1);
    }
  }
}
</script>

<style scoped>
      .header{
        height    : 1rem;
        background: rgb(33, 150, 243);
        display   : flex;
        color     : #fff;
      }
      .header button{
        width : 1rem;
        height: 1rem;
        color : #fff;
         background: rgb(33, 150, 243);
         border:0;
      }
      .header h2{
        flex       : 1;
        text-align : center;
        text-indent: -1rem;
      }
</style>