import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import user from '@/views/user';
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'
// import worksRoute from '@/views/works'; // 作品资源库
// import organizationRoute from '@/views/organization'; // 机构管理
// import systemRoute from '@/views/system'; // 系统模块
// import homeRoute from '@/views/home'; // 首页管理

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: false
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/user',
    meta: {
      roles: ['admin']
    },
    children: [
      {
        path: 'user',
        component: () => import('@/views/user/index'),
        name: 'user',
        meta: {
          title: '用户列表',
          noCache: true,
          roles: ['admin']
          // icon: 'list'
        }
      }
    ]
  },
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
// export const asyncRoutes = [
//   /**
//    * 用户审核 examine
//    *  --注册审核
//    *  --基础信息审核
//    *  --身份认证
//    */
//   {
//     path: '/examine',
//     component: Layout,
//     redirect: '/examine/register',
//     name: 'Examine',
//     meta: {
//       title: '用户审核',
//       roles: ['admin'],
//       noCache: true,
//       icon: 'edit'
//     },
//     children: [
//       {
//         path: 'register',
//         component: () => import('@/views/examine/register'),
//         name: 'register',
//         meta: {
//           title: '注册审核',
//           noCache: true,
//           roles: ['admin']
//           // icon: 'list'
//         }
//       },
//       {
//         path: 'basics',
//         component: () => import('@/views/examine/basics'),
//         name: 'basics',
//         meta: {
//           title: '基础信息审核',
//           noCache: true,
//           roles: ['admin']
//           // icon: 'list'
//         }
//       },
//       {
//         path: 'identity',
//         component: () => import('@/views/examine/identity'),
//         name: 'identity',
//         meta: {
//           title: '身份认证审核',
//           noCache: true,
//           roles: ['admin']
//           // icon: 'list'
//         }
//       }
//     ]
//   },
//   // 用户列表
//   {
//     path: '/user',
//     component: Layout,
//     redirect: '/user/index',
//     name: 'userList',
//     meta: {
//       noCache: true,
//       roles: ['admin','editor']
//     },
//     children: [
//       {
//         path: 'index',
//         component: () => import('@/views/user/index'),
//         name: 'user',
//         meta: {
//           title: '用户列表',
//           noCache: true,
//           icon: 'user',
//           roles: ['admin','editor']
//         }
//       }
//     ]
//   },
//   {
//     path: '/permission',
//     component: Layout,
//     redirect: '/permission/page',
//     alwaysShow: true, // will always show the root menu
//     name: 'Permission',
//     meta: {
//       title: 'Permission',
//       noCache: true,
//       icon: 'lock',
//       roles: ['admin', 'editor'] // you can set roles in root nav
//     },
//     children: [
//       {
//         path: 'page',
//         component: () => import('@/views/permission/page'),
//         name: 'PagePermission',
//         meta: {
//           noCache: true,
//           title: 'Page Permission',
//           roles: ['editor'] // or you can only set roles in sub nav
//         }
//       },
//       {
//         path: 'directive',
//         component: () => import('@/views/permission/directive'),
//         name: 'DirectivePermission',
//         meta: {
//           // title: 'Directive Permission'
//           title: '权限测试',
//           noCache: true,
//           roles: ['editor']
//           // if do not set roles, means: this page does not require permission
//         }
//       },
//       {
//         path: 'role',
//         component: () => import('@/views/permission/role'),
//         name: 'RolePermission',
//         meta: {
//           noCache: true,
//           title: 'Role Permission',
//           roles: ['editor']
//         }
//       }
//     ]
//   },

//   /** when your routing map is too long, you can split it into small modules **/
//   {
//     path: '/error',
//     component: Layout,
//     redirect: 'noRedirect',
//     name: 'ErrorPages',
//     meta: {
//       title: 'Error Pages',
//       icon: '404'
//     },
//     children: [
//       {
//         path: '401',
//         component: () => import('@/views/error-page/401'),
//         name: 'Page401',
//         meta: { title: '401', noCache: true }
//       },
//       {
//         path: '404',
//         component: () => import('@/views/error-page/404'),
//         name: 'Page404',
//         meta: { title: '404', noCache: true }
//       }
//     ]
//   },
//   // 错误日志
//   {
//     path: '/error-log',
//     component: Layout,
//     children: [
//       {
//         path: 'log',
//         component: () => import('@/views/error-log/index'),
//         name: 'ErrorLog',
//         meta: { title: 'Error Log', icon: 'bug' }
//       }
//     ]
//   },
//   // 404 page must be placed at the end !!!
//   { path: '*', redirect: '/404', hidden: true }
// ]
export const asyncRoutes = [];

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
