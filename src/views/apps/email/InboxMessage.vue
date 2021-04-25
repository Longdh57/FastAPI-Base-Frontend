<template>
  <CLink 
    to="./message" 
    class="c-message" 
    :class="{ 'c-message-read': read }"
  >
    <div class="c-message-actions">
      <CIcon name="cil-star"/>
    </div>
    <div class="c-message-details">
      <div class="c-message-headers">
        <div class="c-message-headers-from">{{from}}</div>
        <div class="c-message-headers-date">{{date}}</div>
        <div class="c-message-headers-subject">{{title}}</div>
      </div>
      <div class="c-message-body">
        {{description}}
      </div>
    </div>
  </CLink>
</template>

<script>
export default {
  name: 'InboxMessage',
  props: {
    read: Boolean,
    description: {
      type: String,
      default: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
    },
    title: {
      type: String,
      default: 'Lorem ipsum dolor sit amet.'
    },
    from: {
      type: String,
      default: 'Lukasz Holeczek'
    },
    date: {
      type: String,
      default: 'Today, 3:47 PM'
    }
  }
}
</script>