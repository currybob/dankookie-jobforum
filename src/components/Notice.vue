<template>
  <v-list two-line light>
    <template v-for="(item, index) in items">
      <v-list-tile :key="item.title" avatar subheader @click="toggle(index)" class="list_item">
        <v-list-tile-content class="list_item_cont">
          <v-list-tile-sub-title class="text--primary review_title"><v-icon small>info</v-icon> {{ item.title }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action class="list_item_action">
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
      items: [
        {
          date: '2018. 05. 31',
          title: '[학점]드론(개발,조종) 추가모집 안내',
          content: "취업수기 첫번째 입니다. 비교적 최근의 것들로 구성해보았고 자소서의 구체적인 작성요령은 다음 글에서 올리겠습니다."
        }, {
          date: '2018. 05. 31',
          title: '단국올패스프로그램 4기 모집 안내',
          content: "우와 감동이에요 단국대에 취직하다니."
        }, {
          date: '2018. 05. 31',
          title: '2018 단국인 취업수기 공모전 안내',
          content: "취업수기 첫번째 입니다. 비교적 최근의 것들로 구성해보았고 자소서의 구체적인 작성요령은 다음 글에서 올리겠습니다."
        }, {
          date: '2018. 05. 31',
          title: '꿈날개 연계대학 서비스 이용 안내',
          content: "취업수기 첫번째 입니다. 비교적 최근의 것들로 구성해보았고 자소서의 구체적인 작성요령은 다음 글에서 올리겠습니다."
        }, {
          date: '2018. 05. 31',
          title: '잡플래닛 제휴 대학 서비스 안내',
          content: "취업수기 첫번째 입니다. 비교적 최근의 것들로 구성해보았고 자소서의 구체적인 작성요령은 다음 글에서 올리겠습니다."
        }, {
          date: '2018. 05. 31',
          title: '온라인 직무적성 취업솔루션 안내',
          content: "취업수기 첫번째 입니다. 비교적 최근의 것들로 구성해보았고 자소서의 구체적인 작성요령은 다음 글에서 올리겠습니다."
        }
      ]
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
    }
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

</style>
