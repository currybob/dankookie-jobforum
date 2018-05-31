<template>
  <div class="calendar_wrap">
    <vue-tuicalendar ref="calendar" :schedules="schedules" :options="options" class="calendar"></vue-tuicalendar>
    <div class="btn_wrap">
      <v-btn fab dark color="error">
        <v-icon dark>add</v-icon>
      </v-btn>
      <v-btn fab dark color="primary">
        <v-icon dark>settings</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
data() {
    return {
      options: {
        defaultView: 'month',
        taskView: true,
        scheduleView: true, 
        month: {
          daynames: ['일', '월', '화', '수', '목', '금', '토'],
          startDayOfWeek: 0,
          narrowWeekend: false
        }
      },
      schedules: [
        {
          id: '1',
          calendarId: '1',
          title: 'A기업 공채 시작',
          category: 'time',
          dueDateClass: '',
          start: '2018-05-20T22:30:00+09:00',
          end: '2018-05-21T02:30:00+09:00'
        },
        {
          id: "2",
          calendarId: "1",
          title: "B기업 공채 시작",
          category: "time",
          dueDateClass: "",
          start: "2018-05-23T17:30:00+09:00",
          end: "2018-05-24T17:31:00+09:00",
          isReadOnly: true
        }
      ]
    }
  },
  methods: {
    mounted() {
      // this.$refs.calendar.fireMethod('clear');
      // this.$refs.calendar.fireMethod('getElement');
      
      // this.$refs.calendar.registerEvent('beforeDeleteSchedule', (event) => {
        
      // })
    }
  }
}
</script>

<style lang="scss" scoped>
.calendar_wrap {
  height: calc(100% - 100px);
  .calendar {
    height: 100%;
  }

  .btn_wrap {
    position: relative;
    height: 100px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    border-top: 1px solid #eee;
  }
}
</style>
