<template>
  <div class="calendar_wrap">
    <v-progress-circular :size="50" :width="7" indeterminate color="dankook_blue" v-if="!loaded" class="progress_bar"></v-progress-circular>
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

var parseString = require('xml2js').parseString;
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
      schedules: [],
      bgColors: ['#eeeeee'],
      loaded: false
    }
  },
  methods: {
    mounted() {
      // this.$refs.calendar.fireMethod('clear');
      // this.$refs.calendar.fireMethod('getElement'); 
      // this.$refs.calendar.registerEvent('beforeDeleteSchedule', (event) => {
        
      // })
    }
  },
  created(){
    const site = 'http://api.saramin.co.kr/job-search?stock=kospi+kosdaq&sr=directhire&job_type=4&fields=posting-date+expiration-date+keyword-code&start=1&count=30';
    const yql = 'http://query.yahooapis.com/v1/public/yql?q=' + encodeURIComponent('select * from xml where url="' + site + '"') + '&format=xml&callback=?';

    $.getJSON(yql, (data) => {
      let xml = data.results[0]
      parseString(xml, (err, result) => {
        let parsedData = result['job-search']['jobs'][0]['job'];
        for (let i in parsedData) {
          let copyObj = {
            id: parsedData[i]['id'][0],
            category: 'time',
            calendarId: 1,
            title: parsedData[i]['company'][0]['name'][0]['_'],
            start: parsedData[i]['posting-date'][0],
            end: parsedData[i]['expiration-date'][0],
            bgColor: this.bgColors[Math.floor(Math.random() * this.bgColors.length)]
          };
          this.schedules.push(copyObj);
          this.loaded = true;
        }
      });
    });
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

.progress_bar {
  position: absolute;
  top: calc(50% - 25px);
  left: calc(50% - 25px);
  z-index: 9999;
}


</style>
