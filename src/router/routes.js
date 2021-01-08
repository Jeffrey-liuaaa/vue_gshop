/* 
所有路由配置的数组
*/

import MSite from "@/pages/MSite/MSite"
import Order from "@/pages/Order/Order"
import Search from "@/pages/Search/Search"
import Profile from "@/pages/Profile/Profile"

export default [
    {
      path: '/msite',
      component: MSite
    },

    {
      path: '/order',
      component: Order
    },

    {
      path: '/search',
      component: Search
    },

    {
      path: '/profile',
      component: Profile
    },

    {
      path: '/',
      redirect: '/msite'
    }
]