<template>
  <div>
    <MailToolbar/>
    <ul class="c-messages">
      <InboxMessage/>
      <InboxMessage read/>
      <InboxMessage read/>
      <InboxMessage/>
      <InboxMessage read/>
      <InboxMessage/>
      <InboxMessage read/>
      <InboxMessage read/>
      <InboxMessage read/>
      <InboxMessage read/>
      <InboxMessage read/>
      <InboxMessage/>
      <InboxMessage read/>
    </ul>
  </div>
</template>

<script>
import InboxMessage from './InboxMessage'
import MailToolbar from './MailToolbar'

export default {
  name: 'Inbox',
  components: {
    InboxMessage,
    MailToolbar
  }
}
</script>
