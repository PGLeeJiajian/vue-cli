import Vue from 'vue'
import Router from 'vue-router'
import ComponentA from '@/components/ComponentA'
import Movie from '@/components/Movie/movie'
// import CommonFooter from '@/components/common/CommonFooter'
import Music from '@/components/music/music'
import Book from '@/components/Book/Book'
import Photo from '@/components/photo/Photo'
import MovieTop250 from '@/components/Movie/MovieTop250'
import Albums from '@/components/music/musicList'
import MusicPlayer from '@/components/music/musicPlayer'
import PhotoData from '@/components/photo/PhotoData'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: ComponentA
    },
    {
      path:'/movie',
      component: Movie,
      redirect: '/movie/top250',
      children:[
        {path:'/movie/top250',component:MovieTop250},
        {path:'/movie/hot',component:MovieTop250},
        {path:'/movie/coming',component:MovieTop250}
      ]
    },
    {
      path:'/music',
      component:Music,
      redirect:'./music/music_albums',
      children:[
        {path:'/music/music_albums',component:Albums},
        {path:'/music/music_player/:id',component:MusicPlayer}        //:id =>$router.params.id
      ]
    },
    {
      path:'/book',
      component:Book
    },
    {
      path:'/photo',
      component:Photo
    },
    {
      path     : '/photo/detail/:index',
      component: PhotoData
    }
  ]
})
