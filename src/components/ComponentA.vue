<template>
    <div>
        {{$store.state.count}}
         {{count1}}
         {{count2}}
        <!-- {{$store.state.count}}
     <button @click="$store.commit('add',10)">add</button>
      <button @click="$store.commit('reduce')">reduce</button> -->
    <button @click="addAction">+</button>
      <button @click="reduceAction">reduce</button>
  </div>
</template>
<script>
    import store from '@/vuex/store'
    import {mapState,mapMutations,mapGetters,mapActions} from 'vuex';
export default {
  data(){
      return{}
  },
  methods:{
      ...mapMutations(['add','reduce']),
      ...mapActions(["addAction","reduceAction"])},
  computed  : {
        ...mapState(["count","count1"]),
        ...mapGetters(['count2'])
        }
  }
</script>
