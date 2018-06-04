<template>
  <v-bottom-nav :value="true" :active.sync="path" :color="color" absolute :height="60">
    <router-link tag="div" to="/calendar" class="bottom_nav_list">
      <v-btn dark value="/calendar">
        <span class="btn_title">취업캘린더</span>
        <v-icon>date_range</v-icon>
      </v-btn>
    </router-link>
    <router-link tag="div" to="/notice" class="bottom_nav_list">
      <v-btn dark value="/notice">
        <span class="btn_title">포탈공지</span>
        <v-icon>list_alt</v-icon> 
      </v-btn>
    </router-link>
    <router-link tag="div" to="/program" class="bottom_nav_list">
      <v-btn dark value="/chat">
        <span class="btn_title">프로그램</span>
        <v-icon>list</v-icon>
      </v-btn>
    </router-link>
    <router-link tag="div" to="/review" class="bottom_nav_list">
      <v-btn dark value="/review">
        <span class="btn_title">취업수기</span>
        <v-icon>forum</v-icon>
      </v-btn>
    </router-link>
    <router-link tag="div" to="/chat" class="bottom_nav_list">
      <v-btn dark value="/chat">
        <span class="btn_title">채팅</span>
        <v-icon>chat</v-icon>
      </v-btn>
    </router-link>
  </v-bottom-nav>
</template>

<script>

export default {
  data () {
    return {
      path: "/",
      e2: 0
    }
  },
  computed: {
    color () {
      switch (this.path) {
        case "/" : return 'blue darken-4'
        case "/calendar" : return 'light-blue darken-4'
        case "/notice" : return 'light-green darken-4'
        case "/review" : return 'blue-grey darken-4'
        case "/chat" : return 'indigo darken-4'
      }
    }
  },
  created(){
    this.$nextTick(()=>{
      window.addEventListener('hashchange', ()=>{
        this.path = window.location.hash.replace("#", '');
        if (this.path == "/") {}
      });
    });
  }
}
</script>

<style>
.btn_title {
  display: block;
  margin-top: 3px;
  font-size: 12px;
}

.bottom_nav_list {
  min-width: 80px;
  max-width: 168px;
  width: 100%;
}

</style>

