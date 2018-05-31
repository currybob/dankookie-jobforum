<template>
  <v-card>
    <v-toolbar dark color="primary">
      <v-btn icon dark @click.native="toggleSetting()">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>설정</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn dark flat icon @click.native="toggleSetting()">
          <v-icon>save</v-icon>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-list three-line subheader>
      <v-subheader>일반 설정</v-subheader>
      <v-list-tile avatar>
        <v-list-tile-action>
          <v-checkbox v-model="notifications"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>푸시 알림</v-list-tile-title>
          <v-list-tile-sub-title>맞춤형 푸시 알림을 받습니다.</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-list-tile avatar>
        <v-list-tile-action>
          <v-checkbox v-model="sound"></v-checkbox>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>취업포탈 알림</v-list-tile-title>
          <v-list-tile-sub-title>취업포탈 공지사항을 알림으로 받습니다.</v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider></v-divider>
    </v-list>
    <v-list three-line subheader>
      <v-subheader>관심태그 설정</v-subheader>
      <v-select v-model="chips" label="관심 태그를 입력해주세요" chips tags solo prepend-icon="filter_list" append-icon="" clearable>
        <template slot="selection" slot-scope="data">
          <v-chip :selected="data.selected" close @input="removeTag(data.item)">
            <strong>{{ data.item }}</strong>
          </v-chip>
        </template>
      </v-select>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data(){
    return {
      notifications: false,
      sound: true,
      chips: ['개발', '금융', '중견기업']
    }
  },
  methods: {
    toggleSetting(){
      this.$emit('toggleSetting')
    },
    removeTag(item) {
      this.chips.splice(this.chips.indexOf(item), 1)
      this.chips = [...this.chips]
    }
  }
}
</script>

<style>

</style>
