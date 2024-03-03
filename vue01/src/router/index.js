import VueRouter from "vue-router";
import Login from "@/pages/Login.vue";
import Users from "@/pages/Users.vue";
import Main from '@/pages/Main.vue'
import Home from "@/pages/Home.vue";
import Mall from "@/pages/Mall.vue";
import PageOne from "@/pages/PageOne.vue";
import PageTwo from "@/pages/PageTwo.vue";

const router= new VueRouter({
    // 浏览器模式设置，设置为history模式
    // mode:'history',
    routes:[
        {
            path:"/login",
            component:Login,
            meta:{title:"登录"},
        },
        {
            // 子路由
            name:"main",
            path:'/',
            redirect:"/home",  //重定向 当路径为/，则重定向home
            component:Main,
            children:[
                {
                    name:"user",
                    path:"user",
                    component:Users,
                    meta:{title:"药品百科"}
                },
                {
                    name:"home",
                    path:"home",
                    component:Home,
                    meta:{title:"医用说明书"}
                },
                {
                    name:"mall",
                    path:"mall",
                    component:Mall,
                    meta:{title:"医用药品说明"}
                },
                // {
                //     name:"page1",
                //     path:"page1",
                //     component:PageOne,
                //     meta:{title:"页面1"}
                // },
                // {
                //     name:"page2",
                //     path:"page2",
                //     component:PageTwo,
                //     meta:{title:"页面2"}
                // }
            ]
        }

    ]
})

// 后置路由守卫
router.afterEach((to,from)=>{
    document.title=to.meta.title||"医药小助手"
})
export default router
