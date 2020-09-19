<template>
  <div :class="{'has-logo':showLogo}">
<!--    <logo v-if="showLogo" :collapse="isCollapse" />-->
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item v-for="route in menuList" :key="route.path" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
// import Logo from './Logo'
import SidebarItem from './SidebarItem'
import variables from '@/styles/variables.less'
import menudata from '@/assets/adminMenu.json';

export default {
  components: { SidebarItem },
  computed: {
    ...mapGetters([
      'permission_routes',
      'sidebar',
      'roles'
    ]),
    // ...mapState({
    //   menuList: state => state.permission.menuList
    // }),
    activeMenu() {
      const route = this.$route
      const { meta, path } = route
      // if set path, the sidebar will highlight the path you set
      if (meta.activeMenu) {
        return meta.activeMenu
      }
      return path
    },
    showLogo() {
      return this.$store.state.settings.sidebarLogo
    },
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  },
  data() {
    return {
      menuList: null,
    }
  },
  created() {
    this.init();
  },
  methods: {
    ...mapActions({
      getMenuList: 'permission/getMenuList',
    }),
    async init() {
      // 查询菜单
      // await this.getMenuList({ roles: this.roles[0]}); // 二期接口查询
      this.menuList = menudata.menuList;
    }
  }
}
</script>
