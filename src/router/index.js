import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'

Vue.use(VueRouter)
//重写push replace方法
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location, resolve, reject){
    if(resolve && reject){
        originPush.call(this, location, resolve, reject)
    }else{
        originPush.call(this, location, ()=>{}, ()=>{})
    }
}

VueRouter.prototype.replace = function(location, resolve, reject){
    if(resolve && reject){
        originReplace.call(this, location, resolve, reject)
    }else{
        originReplace.call(this, location, ()=>{}, ()=>{})
    }
}










export default new VueRouter({
    routes:[
        {
            path:'/home',
            component: Home,
            meta: {
                show: true
            }
        },
        {
            path:'/search/:k',
            component: Search,
            meta:{
                show: true
            },
            name: 'search',
            props:($route)=>{
                return {keyword: $route.query.keyword, k: $route.params.k}
            }
        },
        {
            path:'/login',
            component: Login,
            meta: {
                show: false
            }
        },
        {
            path:'/register',
            component: Register,
            meta: {
                show: FontFaceSetLoadEvent
            }
        },
        {
            path:'*',
            redirect: '/home'
        }
    ]
})