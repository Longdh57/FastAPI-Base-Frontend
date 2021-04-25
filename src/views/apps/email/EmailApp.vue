<template>
  <div class="c-app" :class="{ 'c-dark-theme': $store.state.darkMode }">
    <EmailSidebar/>
    <TheAside/>
    <CWrapper>
      <TheHeader/>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <CCard class="c-email-app">
              <CCardBody>
                <transition name="fade" mode="out-in">
                  <router-view :key="$route.path"></router-view>
                </transition>
              </CCardBody>
            </CCard>
          </CContainer>
        </main>
      </div>
      <TheFooter/>
    </CWrapper>
  </div>
</template>

<script>
import EmailSidebar from './EmailSidebar'
import TheHeader from '../../../containers/TheHeader'
import TheFooter from '../../../containers/TheFooter'
import TheAside from '../../../containers/TheAside'

export default {
  name: 'EmailApp',
  components: {
    EmailSidebar,
    TheHeader,
    TheFooter,
    TheAside
  }
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
