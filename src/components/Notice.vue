<template>
  <v-list two-line light>
    <v-progress-circular :size="50" :width="7" indeterminate color="dankook_blue" v-if="!loaded" class="progress_bar"></v-progress-circular>
    <template v-for="(item, index) in items" v-else>
      <v-list-tile :key="item.title" avatar subheader class="list_item">
        <v-list-tile-content class="list_item_cont" @click="fncMainMenuMove(item.href)">
          <v-list-tile-sub-title class="text--primary review_title"><v-icon small>info</v-icon> {{ item.title }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action class="list_item_action" @click="toggle(index)">
          <v-list-tile-action-text>{{ item.date }}</v-list-tile-action-text>
          <v-icon v-if="selected.indexOf(index) < 0" color="grey lighten-1">star_border</v-icon>
          <v-icon v-else color="yellow darken-2">star</v-icon>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider v-if="index + 1 < items.length" :key="index"></v-divider>
    </template>
  </v-list>
</template>

<script>
export default {
  data () {
    return {
      selected: [],
      items: [],
      loaded: false
    }
  },
  methods: {
    toggle (index) {
      const i = this.selected.indexOf(index)
      if (i > -1) {
        this.selected.splice(i, 1)
      } else {
        this.selected.push(index)
      }
    },
    fncMainMenuMove(href){
      console.log(href)
    }
  },
  created(){
    this.axios.get('/notice').then((res)=>{
      this.items = res.data;
      this.loaded = true;
    })
    .catch((err)=> {
      if (err) console.log(err);
    });
  }
}
</script>

<style lang="scss" scoped>
.list_item {
  .review_title {
    font-weight: 600;

    i {
      margin-right: 5px;
    }
  }
}

.progress_bar {
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
}

</style>
