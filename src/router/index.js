import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Homepage from '@/components/homepage/homepage'
import teachingM from '@/components/teachingM/teachingM'
import userM from '@/components/userM/userM'
import deviceM from '@/components/deviceM/deviceM'
import resourceM from '@/components/resourceM/resourceM'
import fileM from '@/components/fileM/fileM'
import roleM from '@/components/roleM/roleM'
import informationM from '@/components/informationM/informationM'
import systemM from '@/components/systemM/systemM'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/homepage',component: Homepage},
    {path: '/teachingM',component: teachingM},
    {path: '/userM',component: userM},
    {path: '/deviceM',component: deviceM},
    {path: '/resourceM',component: resourceM},
    {path: '/fileM',component: fileM},
    {path: '/roleM',component: roleM},
    {path: '/informationM',component: informationM},
    {path: '/systemM',component: systemM},
    {path:'*',redirect:'/homepage'}
  ]
})
