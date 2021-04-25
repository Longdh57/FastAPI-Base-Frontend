<template>
  <CCard>
    <CCardHeader>
      <CIcon name="cil-calendar"/> Calendar
      <a 
        href="https://coreui.io/pro/vue/" 
        rel="noreferrer noopener" 
        target="_blank" 
        class="badge badge-danger ml-1"
      >
        CoreUI Pro
      </a>
      <div class="card-header-actions">
        <a 
          href="https://github.com/richardtallent/vue-simple-calendar" 
          rel="noreferrer noopener" 
          target="_blank" 
          class="card-header-action"
        >
          <small class="text-muted">docs</small>
        </a>
      </div>
    </CCardHeader>
    <CCardBody>
      <calendar-view
        id="calendar"
        :events="events"
        enable-drag-drop
        :show-date="showDate"
        :displayPeriodUom="displayPeriod"
        currentPeriodLabel="icons"
        :class="themeClasses"
        @click-date="onClickDay"
        @click-event="onClickEvent"
        @drop-on-date="onDrop"
        @show-date-change="setShowDate"
        ref="calendarView"
      >
        <calendar-view-header
					slot="header"
					slot-scope="{ headerProps }"
					:header-props="headerProps"
					@input="setShowDate"
				/>
      </calendar-view>
    </CCardBody>
    <CCardFooter>
      <CForm inline>
        <CSelect
          :options="['year', 'month', 'week']"
          :value.sync="displayPeriod"
          label="View"
          add-wrapper-classes="ml-2"
        />
        <h4 class="ml-auto my-auto">
          <CBadge v-if="message" color="primary">{{ message }}</CBadge>
        </h4>
      </CForm>
    </CCardFooter>
  </CCard>
</template>

<script>
  import { 
    CalendarView, 
    CalendarViewHeader, 
    CalendarMathMixin 
  } from 'vue-simple-calendar'
  // import CalendarMathMixin from 'vue-simple-calendar/dist/calendar-math-mixin.js'
  // The next two lines are processed by webpack. If you're using the component without webpack compilation,
  // you should just create <link> elements for these as you would normally for CSS files. Both of these
  // CSS files are optional, you can create your own theme if you prefer.
  import 'vue-simple-calendar/static/css/default.css'
  import 'vue-simple-calendar/static/css/holidays-us.css'

  const currDate = new Date();
  const currYear = currDate.getFullYear();
  const currMonth = currDate.getMonth();
  const sampleEvents = [
    {
      title: 'All Day Event very long title',
      allDay: true,
      startDate: new Date(currYear, currMonth, 0),
      endDate: new Date(currYear, currMonth, 1),
    },
    {
      title: 'Long Event',
      startDate: new Date(currYear, currMonth, 7),
      endDate: new Date(currYear, currMonth, 10),
    },

    {
      title: 'DTS STARTS',
      startDate: new Date(currYear + 1, 2, 13, 0, 0, 0),
      endDate: new Date(currYear + 1, 2, 20, 0, 0, 0),
    },

    {
      title: 'DTS ENDS',
      startDate: new Date(currYear + 1, 10, 6, 0, 0, 0),
      endDate: new Date(currYear + 1, 10, 13, 0, 0, 0),
    },

    {
      title: 'Some Event',
      startDate: new Date(currYear, currMonth, 9, 0, 0, 0),
      endDate: new Date(currYear, currMonth, 9, 0, 0, 0),
    },
    {
      title: 'Conference',
      startDate: new Date(currYear, currMonth, 11),
      endDate: new Date(currYear, currMonth, 13),
      desc: 'Big conference for important people',
      classes: 'orange'
    },
    {
      title: 'Meeting',
      startDate: new Date(currYear, currMonth, 12, 10, 30, 0, 0),
      endDate: new Date(currYear, currMonth, 12, 12, 30, 0, 0),
      desc: 'Pre-meeting meeting, to prepare for the meeting',
    },
    {
      title: 'Lunch',
      startDate: new Date(currYear, currMonth, 12, 12, 0, 0, 0),
      endDate: new Date(currYear, currMonth, 12, 13, 0, 0, 0),
      desc: 'Power lunch',
    },
    {
      title: 'Meeting',
      startDate: new Date(currYear, currMonth, 14, 14, 0, 0, 0),
      endDate: new Date(currYear, currMonth, 14, 15, 0, 0, 0),
    },
    {
      title: 'Happy Hour',
      startDate: new Date(currYear, currMonth, 12, 17, 0, 0, 0),
      endDate: new Date(currYear, currMonth, 12, 17, 30, 0, 0),
      desc: 'Most important meal of the day',
      classes: 'primary'
    },
    {
      title: 'Dinner',
      startDate: new Date(currYear, currMonth, 26, 20, 0, 0, 0),
      endDate: new Date(currYear, currMonth, 26, 21, 0, 0, 0),
      classes: 'success'
    },
    {
      title: 'Birthday Party',
      startDate: new Date(currYear, currMonth, 13, 7, 0, 0),
      endDate: new Date(currYear, currMonth, 13, 10, 30, 0),
    },
    {
      title: 'Birthday Party 2',
      startDate: new Date(currYear, currMonth, 24, 17, 0, 0),
      endDate: new Date(currYear, currMonth, 24, 18, 30, 0),
      classes: 'primary'
    },
    {
      title: 'Late Night Event',
      startDate: new Date(currYear, currMonth, 17, 19, 30, 0),
      endDate: new Date(currYear, currMonth, 18, 2, 0, 0),
      classes: 'danger'
    },
    {
      title: 'Multi-day Event',
      startDate: new Date(currYear, currMonth, 20, 19, 30, 0),
      endDate: new Date(currYear, currMonth, 22, 2, 0, 0),
    }
  ]

  export default {
    name: 'Calendar',
    mixins: [CalendarMathMixin],
    data: function () {
      return {
        message: '',
        showDate: currDate,
        displayPeriod: 'month',
        events: sampleEvents,
        useDefaultTheme: true,
        useHolidayTheme: true,
      }
    },
    components: {
      CalendarView,
      CalendarViewHeader
    },
    computed: {
      themeClasses() {
        return {
          'theme-default': this.useDefaultTheme,
          'holiday-us-traditional': this.useHolidayTheme,
          'holiday-us-official': this.useHolidayTheme,
        }
      }
    },
    methods: {
      setShowDate(d) {
        this.showDate = d;
      },
      onClickDay(d) {
        this.message = `You clicked: ${d.toLocaleDateString()}`
      },
      onClickEvent(e) {
        this.message = `You clicked: ${e.title}`
      },
      onDrop(event, date) {
        this.message = `Moved: ${event.title || event.id} to ${date.toLocaleDateString()}`
        // Determine the delta between the old start date and the date chosen,
        // and apply that delta to both the start and end date to move the event.
        const eLength = this.dayDiff(event.startDate, date)
        event.originalEvent.startDate = this.addDays(event.startDate, eLength)
        event.originalEvent.endDate = this.addDays(event.endDate, eLength)
      }
    },
  }
</script>

<style lang="scss">
  @import '../../assets/scss/style';
  #calendar {
    color: $body-color;
    height: 63vh;
    margin-left: auto;
    margin-right: auto;
  }
  .theme-default .cv-event {
    background-color: #C8CED3;
    border-color: $table-border-color;
    color: $body-color;
  }
  .theme-default .cv-event.success {
    background-color: $success;
    border-color: lighten($success, 5%);
  }
  .theme-default .cv-event.danger {
    background-color: $danger;
  }
  .theme-default .cv-event.primary {
    background-color: #20A8D8;
  }
  .theme-default .cv-event.orange {
    background-color: #F8CB00;
    border-color: lighten(#F8CB00, 5%);
  }
  .theme-default .cv-day.today {
    background-color: $gray-300;
  }
  .theme-default .cv-day.today > .cv-day-number {
    background-color: #20A8D8;
    border-radius: 50%;
    position: absolute;
    left: 0;
  }
  .theme-default .cv-day.past {
     background-color: $body-bg;
  }
  .theme-default .cv-day.outsideOfMonth {
     background-color: $body-bg;
  }
  .theme-default .cv-weeks,
  .theme-default .cv-day {
    border-color: $table-border-color;
  }
  .theme-default .cv-header,
  .theme-default .cv-header-days,
  .theme-default .cv-header-day {
    background-color: #E4E5E6;
    border-color: $table-border-color;
    border-style: solid;
  }
  .theme-default .cv-header-nav > button {
    color: $body-color;
    background-color: $input-bg;
    border-color: $input-border-color;
  }
  .theme-default .cv-day.draghover {
    box-shadow: inset 0 0 0.2em 0.2em #321FDB;
  }
</style>
