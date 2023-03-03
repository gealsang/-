// 引入路由组件
// import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
// 配置二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'

// 当打包构建应用时，JavaScript 包会变得非常大，影响页面加载。
// 如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候才加载对应组件，这样就会更加高效。

// 路由配置信息
export default  [
    {
        path: '/center',
        component: Center,
        meta: {show: true},
        // 二级路由组件
        children:[
            {
                path:"myorder",
                component:MyOrder,
            },
            {
                path:"grouporder",
                component:GroupOrder,
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path: '/paysuccess',
        component: PaySuccess,
        meta: {show: true}
    },
    {
        path: '/pay',
        component: Pay,
        meta: {show: true},
        beforeEnter: (to, from, next) => {
            if(from.path == "/trade"){
                next();
            }else{
                next(false);
            }
        }
    },
    {
        path: '/trade',
        component: Trade,
        meta: {show: true},
        // 路由独享守卫
        beforeEnter: (to, from, next) => {
            // 去交易页面，必须从购物车来
            if(from.path == "/shopcart"){
                next();
            }else{
                // 其他的路由组件来，停留在当前
                next(false);
            }
        }
    },
    {
        path: '/shopcart',
        component: ShopCart,
        meta: {show: true}
    },
    {
        path: '/addcartsuccess',
        name:'addcartsuccess',
        component: AddCartSuccess,
        meta: {show: true}
    },
    {
        path: '/detail/:id',
        component: Detail,
        meta: {show: true}
    },
    {
        path: '/home',
        component: ()=>import("@/pages/Home"),
        meta: {show: true}
    },
    {
        path: '/search/:keyword?',
        component: Search,
        meta: {show: true},
        name: 'search',
        // 路由组件能不能传递props数据?
        // 布尔值写法:params
        // props:true
        // 对象写法:额外的给路由组件传递一些props
        // props:{a:1,b:2},
        // 函数写法：可以把params参数，query参数，通过props传递给路由组件
        props:($route)=>{
            return {keyword:$route.params.keyword,k:$route.query.k};
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {show: false}
    },
    {
        path: '/register',
        component: Register,
        meta: {show: false}
    },
    // 重定向：在项目跑起来的时候，访问/立马让他定向到首页
    {
        path: '*',
        redirect: '/home'
    }

]