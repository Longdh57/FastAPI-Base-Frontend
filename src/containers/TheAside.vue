<template>
  <CSidebar 
    aside 
    :show="$store.state.asideShow"
    @update:show="(val) => $store.commit('set', ['asideShow', val])"
    colorScheme="light"
    overlaid
    size="lg"
  >
    <CSidebarClose @click.native="$store.commit('toggle', 'asideShow')"/>
    <CTabs tabs class="nav-underline nav-underline-primary">
      <CTab active>
        <template slot="title">
          <CIcon name="cil-list"/>
        </template>
        <CListGroup class="list-group-accent">
          <CListGroupItem 
            class="list-group-item-accent-secondary bg-light text-center 
            font-weight-bold text-muted text-uppercase small"
          >
            Today
          </CListGroupItem>
          <CListGroupItem 
            href="#" 
            class="list-group-item-accent-warning list-group-item-divider"
          >
            <div class="c-avatar float-right">
              <img 
                class="c-avatar-img" 
                src="img/avatars/7.jpg" 
                alt="admin@bootstrapmaster.com"
              >
            </div>
            <div>Meeting with
              <strong>Lucas</strong>
            </div>
            <small class="text-muted mr-3">
              <CIcon name="cil-calendar"/>&nbsp;&nbsp;1 - 3pm
            </small>
            <small class="text-muted">
              <CIcon name="cil-location-pin"/>&nbsp;&nbsp;Palo Alto, CA
            </small>
          </CListGroupItem>
          <CListGroupItem href="#" class="list-group-item-accent-info">
            <div class="c-avatar float-right">
              <img 
                class="c-avatar-img" 
                src="img/avatars/4.jpg" 
                alt="admin@bootstrapmaster.com"
              >
            </div>
            <div>Skype with <strong>Megan</strong>
            </div>
            <small class="text-muted mr-3">
              <CIcon name="cil-calendar"/>&nbsp;&nbsp;4 - 5pm
            </small>
            <small class="text-muted">
              <CIcon name="cib-skype"/>&nbsp;&nbsp;On-line
            </small>
          </CListGroupItem>
          <hr class="transparent mx-3 my-0">
          <CListGroupItem 
            class="list-group-item-accent-secondary bg-light text-center 
            font-weight-bold text-muted text-uppercase small"
          >
            Tomorrow
          </CListGroupItem>
          <CListGroupItem 
            href="#" 
            class="list-group-item-accent-danger list-group-item-divider"
          >
            <div>New UI Project - <strong>deadline</strong>
            </div>
            <small class="text-muted mr-3">
              <CIcon name="cil-calendar"/>&nbsp;&nbsp;10 - 11pm
            </small>
            <small class="text-muted">
              <CIcon name="cil-home"/>&nbsp;&nbsp;creativeLabs HQ
            </small>
            <div class="c-avatars-stack mt-2">
              <div class="c-avatar c-avatar-xs">
                <img 
                  class="c-avatar-img" 
                  src="img/avatars/2.jpg" 
                  alt="admin@bootstrapmaster.com"
                >
              </div>
              <div class="c-avatar c-avatar-xs">
                <img 
                  class="c-avatar-img" 
                  src="img/avatars/3.jpg" 
                  alt="admin@bootstrapmaster.com"
                >
              </div>
              <div class="c-avatar c-avatar-xs">
                <img 
                  class="c-avatar-img" 
                  src="img/avatars/4.jpg" 
                  alt="admin@bootstrapmaster.com"
                >
              </div>
              <div class="c-avatar c-avatar-xs">
                <img 
                  class="c-avatar-img" 
                  src="img/avatars/5.jpg" 
                  alt="admin@bootstrapmaster.com"
                >
              </div>
              <div class="c-avatar c-avatar-xs">
                <img 
                  class="c-avatar-img" 
                  src="img/avatars/6.jpg" 
                  alt="admin@bootstrapmaster.com"
                >
              </div>
            </div>
          </CListGroupItem>
          <CListGroupItem 
            href="#" 
            class="list-group-item-accent-success list-group-item-divider"
          >
            <div><strong>#10 Startups.Garden</strong> Meetup</div>
            <small class="text-muted mr-3">
              <CIcon name="cil-calendar"/>&nbsp; 1 - 3pm
            </small>
            <small class="text-muted">
              <CIcon name="cil-location-pin"/>&nbsp; Palo Alto, CA
            </small>
          </CListGroupItem>
          <CListGroupItem 
            href="#" 
            class="list-group-item-accent-primary list-group-item-divider"
          >
            <div><strong>Team meeting</strong></div>
            <small class="text-muted mr-3">
              <CIcon name="cil-calendar"/>&nbsp; 4 - 6pm
            </small>
            <small class="text-muted">
              <CIcon name="cil-home"/>&nbsp; creativeLabs HQ
            </small>
            <div class="c-avatars-stack mt-2">
              <div class="c-avatar c-avatar-xs">
                <img 
                  src="img/avatars/2.jpg" 
                  class="c-avatar-img" 
                  alt="admin@bootstrapmaster.com"
                >
              </div>
              <div class="c-avatar c-avatar-xs">
                <img 
                  src="img/avatars/3.jpg" 
                  class="c-avatar-img" 
                  alt="admin@bootstrapmaster.com"
                >
              </div>
              <div class="c-avatar c-avatar-xs">
                <img 
                  src="img/avatars/4.jpg" 
                  class="c-avatar-img" 
                  alt="admin@bootstrapmaster.com"
                >
              </div>
              <div class="c-avatar c-avatar-xs">
                <img 
                  src="img/avatars/5.jpg" 
                  class="c-avatar-img" 
                  alt="admin@bootstrapmaster.com"
                >
              </div>
              <div class="c-avatar c-avatar-xs">
                <img 
                  src="img/avatars/6.jpg" 
                  class="c-avatar-img" 
                  alt="admin@bootstrapmaster.com"
                >
              </div>
              <div class="c-avatar c-avatar-xs">
                <img 
                  src="img/avatars/7.jpg" 
                  class="c-avatar-img" 
                  alt="admin@bootstrapmaster.com"
                >
              </div>
              <div class="c-avatar c-avatar-xs">
                <img 
                  src="img/avatars/8.jpg" 
                  class="c-avatar-img" 
                  alt="admin@bootstrapmaster.com"
                >
              </div>
            </div>
          </CListGroupItem>
        </CListGroup>
      </CTab>
      <CTab>
        <template slot="title">
          <CIcon name="cil-speech"/>
        </template>
        <div class="p-3">
          <div class="message">
            <div class="py-3 pb-5 mr-3 float-left">
              <div class="c-avatar">
                <img 
                  src="img/avatars/7.jpg" 
                  class="c-avatar-img" 
                  alt="admin@bootstrapmaster.com"
                >
                <span class="bg-success c-avatar-status"></span>
              </div>
            </div>
            <div>
              <small class="text-muted">Lukasz Holeczek</small>
              <small class="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div class="text-truncate font-weight-bold">
              Lorem ipsum dolor sit amet
            </div>
            <small class="text-muted">{{lorem}}</small>
          </div>
          <hr>
          <div class="message">
            <div class="py-3 pb-5 mr-3 float-left">
              <div class="c-avatar">
                <img 
                  src="img/avatars/7.jpg" 
                  class="c-avatar-img" 
                  alt="admin@bootstrapmaster.com"
                >
                <span class="bg-success c-avatar-status"></span>
              </div>
            </div>
            <div>
              <small class="text-muted">Lukasz Holeczek</small>
              <small class="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div class="text-truncate font-weight-bold">
              Lorem ipsum dolor sit amet
            </div>
            <small class="text-muted">{{lorem}}</small>
          </div>
          <hr>
          <div class="message">
            <div class="py-3 pb-5 mr-3 float-left">
              <div class="c-avatar">
                <img 
                  src="img/avatars/7.jpg" 
                  class="c-avatar-img" 
                  alt="admin@bootstrapmaster.com"
                >
                <span class="bg-success c-avatar-status"></span>
              </div>
            </div>
            <div>
              <small class="text-muted">Lukasz Holeczek</small>
              <small class="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div class="text-truncate font-weight-bold">
              Lorem ipsum dolor sit amet
            </div>
            <small class="text-muted">{{lorem}}</small>
          </div>
          <hr>
          <div class="message">
            <div class="py-3 pb-5 mr-3 float-left">
              <div class="c-avatar">
                <img 
                  src="img/avatars/7.jpg" 
                  class="c-avatar-img" 
                  alt="admin@bootstrapmaster.com"
                >
                <span class="bg-success c-avatar-status"></span>
              </div>
            </div>
            <div>
              <small class="text-muted">Lukasz Holeczek</small>
              <small class="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div class="text-truncate font-weight-bold">
              Lorem ipsum dolor sit amet
            </div>
            <small class="text-muted">{{lorem}}</small>
          </div>
          <hr>
          <div class="message">
            <div class="py-3 pb-5 mr-3 float-left">
              <div class="c-avatar">
                <img 
                  src="img/avatars/7.jpg" 
                  class="c-avatar-img" 
                  alt="admin@bootstrapmaster.com"
                >
                <span class="bg-success c-avatar-status"></span>
              </div>
            </div>
            <div>
              <small class="text-muted">Lukasz Holeczek</small>
              <small class="text-muted float-right mt-1">1:52 PM</small>
            </div>
            <div class="text-truncate font-weight-bold">
              Lorem ipsum dolor sit amet
            </div>
            <small class="text-muted">{{lorem}}</small>
          </div>
        </div>
      </CTab>
      <CTab>
        <template slot="title">
          <CIcon name="cil-settings"/>
        </template>
        <div class="p-3">
          <h6>Settings</h6>
          <div>
            <div class="clearfix mt-4">
              <small><b>Option 1</b></small>
              <CSwitch 
                color="success" 
                labelOn="On"
                labelOff="Off"
                shape="pill" 
                size="sm" 
                class="float-right" 
                checked 
              />
            </div>
            <div>
              <small class="text-muted">
                
              </small>
            </div>
          </div>
          <div>
            <div class="clearfix mt-3">
              <small><b>Option 2</b></small>
              <CSwitch 
                color="success" 
                labelOn="On"
                labelOff="Off"
                shape="pill" 
                size="sm" 
                class="float-right" 
              />
            </div>
            <div>
              <small class="text-muted">{{lorem}}</small>
            </div>
          </div>
          <div>
            <div class="clearfix mt-3">
              <small><b>Option 3</b></small>
              <CSwitch 
                color="success" 
                labelOn="On"
                labelOff="Off" 
                shape="pill" 
                size="sm" 
                class="float-right" 
                disabled 
                checked
              />
            </div>
            <div>
              <small class="text-muted">Disabled option.</small>
            </div>
          </div>
          <div>
            <div class="clearfix mt-3">
              <small><b>Option 4</b></small>
              <CSwitch 
                color="success" 
                labelOn="On"
                labelOff="Off" 
                shape="pill"
                size="sm" 
                class="float-right" 
                checked
              />
            </div>
          </div>
          <hr>
          <h6>System Utilization</h6>
          <div class="text-uppercase mb-1 mt-4">
            <small><b>CPU Usage</b></small>
          </div>
          <CProgress class="progress-xs" color="info" :value="25"/>
          <small class="text-muted">348 Processes. 1/4 Cores.</small>
          <div class="text-uppercase mb-1 mt-2">
            <small><b>Memory Usage</b></small>
          </div>
          <CProgress class="progress-xs" color="warning" :value="70"/>
          <small class="text-muted">11444MB/16384MB</small>
          <div class="text-uppercase mb-1 mt-2">
            <small><b>SSD 1 Usage</b></small>
          </div>
          <CProgress class="progress-xs" color="danger" :value="95"/>
          <small class="text-muted">243GB/256GB</small>
          <div class="text-uppercase mb-1 mt-2">
            <small><b>SSD 2 Usage</b></small>
          </div>
          <CProgress class="progress-xs" color="success" :value="10"/>
          <small class="text-muted">25GB/256GB</small>
        </div>
      </CTab>
    </CTabs>
  </CSidebar>
</template>

<script>
export default {
  name: 'TheAside',
  data () {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  }
}
</script>
