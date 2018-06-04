<template>
  <v-toolbar color="dankook_blue" dark fixed app>
    <v-toolbar-side-icon @click.stop="toggleSidebar"></v-toolbar-side-icon>
    <v-toolbar-title>
      <h1 class="nav_title">
        <router-link to="/">쿠키잡포럼</router-link>
      </h1>
    </v-toolbar-title>
    <img src="../assets/logo.png" alt="단쿠키 로고" class="nav_logo">
    <v-spacer></v-spacer>
    <v-badge right color="red" overlap>
      <v-icon slot="badge" dark small>notifications</v-icon>
      <v-icon large color="grey lighten-1">
        person
      </v-icon>
    </v-badge>
    <v-btn icon @click="toggleSetting()">
      <v-icon>more_horiz</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    toggleSidebar(){
      this.$emit('toggleSidebar')
    },
    toggleSetting(){
      this.$emit('toggleSetting')
    }
  }
}
</script>

<style lang="scss">
.toolbar__title {
  margin-left: 0;

  .nav_title {
    font-size: 18px;
    font-weight: 400;
    position: relative;
    top: 1px;
    
    a {
      color: #ffffff;
    }
  }
}

.nav_logo {
  position: relative;
  top: -2px;
  margin-left: 10px;
}
.nav_logo:hover {
  animation: logoRotate 3s linear infinite;
}

@keyframes logoRotate {
  0%{
    transform: rotate(0)
  }
  25%{
    transform: rotate(-25deg)
  }
  50%{
    transform: rotate(0)
  }
  75% {
    transform: rotate(25deg)
  }
  100% {
    transform: rotate(0)
  }
}
</style>
