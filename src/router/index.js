import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Menu from '@/components/menu'
import User from '@/components/user'
import Character from '@/components/character'
import UserData from '@/components/UserData'
import addUser from '@/components/addUser'
import addFtp from '@/components/addFtp'
import UserOnLine from '@/components/UserOnLine'
import LogMassage from  '@/components/LogMassage'
import Informationlist from  '@/components/Informationlist'
import Permission from  '@/components/Permission'
import tool from  '@/components/tool'
import Press from  '@/components/Press'
import newList from  '@/components/newList'
import picList from  '@/components/picList'
import initList from  '@/components/initList'
import Word from  '@/components/Word'
import wordList from  '@/components/wordList'
import picMessage from  '@/components/picMessage'
import actionlist from  '@/components/actionlist'
import bookList from  '@/components/bookList'
import Jurisdiction from  '@/components/Jurisdiction'
import Template from  '@/components/Template'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/character',
      name: 'Character',
      component: Character
    },
    {
      path: '/user',
      name: 'User',
      component: User,
      children:[
        {
          path: '/',
          name: 'UserData',
          component: UserData,
        },
        {
         path: 'addUser',
         name: 'addUser',
         component: addUser
        },
        {
         path:'addFtp',
         name:'addFtp',
         component: addFtp
        }
      ]
    },
    {
      path: '/UserOnLine',
      name: 'UserOnLine',
      component: UserOnLine
    },
    {
      path:'/LogMassage',
      name:'LogMassage',
      component:LogMassage
    },
    {
      path:'/Informationlist',
      name:'Informationlist',
      component:Informationlist
    },
    {
      path:'/Permission',
      name:'Permission',
      component:Permission
    },
    {
      path:'/tool',
      name:'tool',
      component:tool
    },
    {
      path:'/Press',
      name:'Press',
      component:Press
    },
    {
      path:'/newList',
      name:'newList',
      component:newList
    },
    {
      path:'/picList',
      name:'picList',
      component:picList
    },
    {
      path:'/initList',
      name:'initList',
      component:initList
    },
    {
      path:'/Word',
      name:'Word',
      component:Word
    },
    {
      path:'/wordList',
      name:'wordList',
      component:wordList
    },
    {
      path:'/picMessage',
      name:'picMessage',
      component:picMessage
    },
    {
      path:'/actionlist',
      name:'actionlist',
      component:actionlist
    },
    {
      path:'/bookList',
      name:'bookList',
      component:bookList
    },
    {
      path:'/Jurisdiction',
      name:'Jurisdiction',
      component:Jurisdiction
    },
    {
      path:'/Template',
      name:'Template',
      component:Template
    }
  ]
})
