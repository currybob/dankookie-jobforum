<template>
  <v-app id="">
    <v-navigation-drawer :mini-variant.sync="mini" v-model="drawer" fixed app>
      <MainNavbar></MainNavbar>
    </v-navigation-drawer>
    <MainHeader @toggleSidebar="toggleSidebar"></MainHeader>
    <v-content>
      <router-view></router-view>
    </v-content>
    <BottomNav></BottomNav>
  </v-app>
</template>

<script>
import MainNavbar from './components/MainNavbar'
import MainHeader from './components/MainHeader'
import BottomNav from './components/BottomNav'
export default {
  data: () => ({
    drawer: null,
    mini: true,
  }),
  props: {
    source: String
  },
  methods: {
    toggleSidebar(){
      this.drawer = !this.drawer;
    }
  },
  components: {
    MainNavbar,
    MainHeader,
    BottomNav
  }
}
</script>
<style lang="scss">
@import '../static/style/custom.scss';
.content {
  overflow-y: scroll;
  max-height: calc(100vh - 60px);
  
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0,0,0,0.1);
  }
  &::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background: rgba(0,0,0,0.2);
  }
  &::-webkit-scrollbar-thumb:hover{
  	background: rgba(0,0,0,0.4);
  }
  &::-webkit-scrollbar-thumb:active{
  	background: rgba(0,0,0,.9);
  }
}
</style>

