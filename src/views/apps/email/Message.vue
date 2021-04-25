<template>
  <div>
    <MailToolbar/>

    <div class="c-message p-3">
      <div class="c-message-details">
        <div class="c-message-headers">
          <div class="c-message-headers-subject">Lorem ipsum dolor sit amet</div>
          <div class="c-message-headers-from">
            Lukasz Holeczek
            <span class="text-muted">email@email.com</span>
          </div>
          <div class="c-message-headers-date">Today, <b>3:47 PM</b></div>
        </div>
        <hr>
        <div class="c-message-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <blockquote>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </blockquote>
        </div>
        <div class="c-message-attachments">
          <div class="c-message-attachment">
            <CBadge color="danger" class="mr-1">zip</CBadge> 
            <b>bootstrap.zip</b> <i>(2,5MB)</i>
            <span class="ml-auto">
              <CButton small class="btn-link" href="#">
                <CIcon name="cil-magnifying-glass"/>
              </CButton>
              <CButton small class="btn-link" href="#">
                <CIcon name="cil-share"/>
              </CButton>
              <CButton small class="btn-link" href="#">
                <CIcon name="cil-cloud-download"/>
              </CButton>
            </span>
          </div>
          <div class="c-message-attachment">
            <CBadge color="info" class="mr-1">txt</CBadge> 
            <b>readme.txt</b> <i>(7KB)</i>
            <span class="ml-auto">
              <CButton small class="btn-link" href="#">
                <CIcon name="cil-magnifying-glass"/>
              </CButton>
              <CButton small class="btn-link" href="#">
                <CIcon name="cil-share"/>
              </CButton>
              <CButton small class="btn-link" href="#">
                <CIcon name="cil-cloud-download"/>
              </CButton>
            </span>
          </div>
          <div class="c-message-attachment">
            <CBadge color="success" class="mr-1">xls</CBadge> 
            <b>spreadsheet.xls</b> <i> (984KB)</i>
            <span class="ml-auto">
              <CButton small class="btn-link" href="#">
                <CIcon name="cil-magnifying-glass"/>
              </CButton>
              <CButton small class="btn-link" href="#">
                <CIcon name="cil-share"/>
              </CButton>
              <CButton small class="btn-link" href="#">
                <CIcon name="cil-cloud-download"/>
              </CButton>
            </span>
          </div>
        </div>
        <form class="mt-3" method="post" action="">
          <div class="form-group">
            <textarea 
              class="form-control" 
              id="message" 
              name="body" 
              rows="12" 
              placeholder="Click here to reply"
            ></textarea>
          </div>
          <div class="form-group">
            <CButton color="success" tabindex="3" type="submit">
              Send message
            </CButton>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import MailToolbar from './MailToolbar'

export default {
  name: 'Message',
  components: {
    MailToolbar
  }
}
</script>
