<template>
  <v-list dense>
    <router-link to="/" class="main_nav_link">
      <v-list-tile>
        <v-list-tile-action>
          <v-icon>dashboard</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>메인으로 가기</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </router-link>
    <v-list-tile>
      <v-list-tile-action>
        <v-icon>contact_mail</v-icon>
      </v-list-tile-action>
      <v-list-tile-content>
        <v-list-tile-title>게시판 목록</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main_nav_link {
  display: block;
}
</style>
