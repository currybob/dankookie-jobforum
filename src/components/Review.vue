<template>
  <v-list three-line light>
    <template v-for="(item, index) in items">
      <v-list-tile avatar subheader @click="toggle(index)" class="list_item">
        <v-list-tile-content class="list_item_cont">
          <v-list-tile-title class="review_comp">{{ item.comp }}</v-list-tile-title>
          <v-list-tile-sub-title class="text--primary review_title">{{ item.title }}</v-list-tile-sub-title>
          <v-list-tile-sub-title class="review_content">{{ item.content }}</v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action class="list_item_action">
          <v-list-tile-action-text>{{ item.date }}</v-list-tile-action-text>
          <v-icon v-if="selected.indexOf(index) < 0" color="grey lighten-1">thumb_up_alt</v-icon>
          <v-icon v-else color="yellow darken-2">thumb_up_alt</v-icon>
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
          id: 0,
          date: '2018. 05. 31',
          title: '저, 드디어 취뽀했습니다!',
          comp: '단국제약',
          content: "취업수기 첫번째 입니다. 비교적 최근의 것들로 구성해보았고 자소서의 구체적인 작성요령은 다음 글에서 올리겠습니다."
        }, {
          id: 1,
          date: '2018. 05. 31',
          title: '단국대에 취업했어요. 너무 감격스럽네요',
          comp: '단국컴퍼니',
          content: "우와 감동이에요 단국대에 취직하다니."
        }, {
          id: 2,
          date: '2018. 05. 31',
          title: '여러분도 모두 해내실수 있습니다!',
          comp: '단모레퍼시픽',
          content: "취업수기 첫번째 입니다. 비교적 최근의 것들로 구성해보았고 자소서의 구체적인 작성요령은 다음 글에서 올리겠습니다."
        }, {
          id: 3,
          date: '2018. 05. 31',
          title: '제가 대기업에 붙을줄 몰랐습니다!',
          comp: '단성전자',
          content: "취업수기 첫번째 입니다. 비교적 최근의 것들로 구성해보았고 자소서의 구체적인 작성요령은 다음 글에서 올리겠습니다."
        }, {
          id: 4,
          date: '2018. 05. 31',
          title: '저, 드디어 취뽀했습니다!',
          comp: '한국제약',
          content: "취업수기 첫번째 입니다. 비교적 최근의 것들로 구성해보았고 자소서의 구체적인 작성요령은 다음 글에서 올리겠습니다."
        }, {
          id: 5,
          date: '2018. 05. 31',
          title: '저, 드디어 취뽀했습니다!',
          comp: '한국제약',
          content: "취업수기 첫번째 입니다. 비교적 최근의 것들로 구성해보았고 자소서의 구체적인 작성요령은 다음 글에서 올리겠습니다."
        }, {
          id: 6,
          date: '2018. 05. 31',
          title: '저, 드디어 취뽀했습니다!',
          comp: '한국제약',
          content: "취업수기 첫번째 입니다. 비교적 최근의 것들로 구성해보았고 자소서의 구체적인 작성요령은 다음 글에서 올리겠습니다."
        }, {
          id: 7,
          date: '2018. 05. 31',
          title: '저, 드디어 취뽀했습니다!',
          comp: '한국제약',
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
  padding: 15px 0;

  .review_comp {
    color: sienna;
  }
  .review_title {
    font-weight: 600;
  }
}

</style>
