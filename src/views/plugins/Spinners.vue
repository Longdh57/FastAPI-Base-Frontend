<template>
  <div class="animated fadeIn">
    <CCard>
      <CCardHeader>
        <CIcon name="cil-circle"/> Base spinners
        <div class="card-header-actions">
          <a 
            href="https://coreui.io/vue/docs/components/spinner.html" 
            rel="noopener noreferrer" 
            target="_blank" 
            class="card-header-action"
          >
            <small class="text-muted">docs</small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody>
        <div class="d-flex justify-content-between align-items-center">
          <CSpinner color="success" size="sm"/>
          <CSpinner color="info"/>
          <CSpinner
            color="primary"
            style="width:4rem;height:4rem;"
          />

          <CSpinner grow size="sm"/>
          <CSpinner color="warning" grow/>
          <CSpinner
            style="width:4rem;height:4rem;"
            color="danger"
            grow
          />
        </div>
      </CCardBody>
    </CCard>
    <CCard>
      <CCardHeader>
        <CIcon name="cil-circle"/> Spinners - SpinKit
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
            href="https://github.com/tobiasahlin/SpinKit" 
            rel="noopener noreferrer" 
            target="_blank" 
            class="card-header-action"
          >
            <small class="text-muted">docs</small>
          </a>
        </div>
      </CCardHeader>
      <CCardBody>
        <p>
          Simple loading spinners animated with CSS. SpinKit uses hardware accelerated (translate and opacity) CSS animations to create smooth and easily customizable animations.
        </p>
      </CCardBody>
    </CCard>
    <CRow>
      <CCol xl="3" lg="4" md="6">
        <CCard>
          <CCardHeader>
            Rotating plane
          </CCardHeader>
          <CCardBody>
            <div class="sk-plane"></div>
          </CCardBody>
        </CCard >
      </CCol>
      <CCol xl="3" lg="4" md="6">
        <CCard>
          <CCardHeader>
            Double bounce
          </CCardHeader>
          <CCardBody>
            <div class="sk-bounce">
              <div class="sk-bounce-dot"></div>
              <div class="sk-bounce-dot"></div>
            </div>
          </CCardBody>
        </CCard >
      </CCol>
      <CCol xl="3" lg="4" md="6">
        <CCard>
          <CCardHeader>
            Wave
          </CCardHeader>
          <CCardBody>
            <div class="sk-wave">
              <div class="sk-wave-rect"></div>
              <div class="sk-wave-rect"></div>
              <div class="sk-wave-rect"></div>
              <div class="sk-wave-rect"></div>
              <div class="sk-wave-rect"></div>
            </div>
          </CCardBody>
        </CCard >
      </CCol>
      <CCol xl="3" lg="4" md="6">
        <CCard>
          <CCardHeader>
            Wandering cubes
          </CCardHeader>
          <CCardBody>
            <div class="sk-wander">
              <div class="sk-wander-cube"></div>
              <div class="sk-wander-cube"></div>
            </div>
          </CCardBody>
        </CCard >
      </CCol>
      <CCol xl="3" lg="4" md="6">
        <CCard>
          <CCardHeader>
            Pulse
          </CCardHeader>
          <CCardBody>
            <div class="sk-pulse"></div>
          </CCardBody>
        </CCard >
      </CCol>
      <CCol xl="3" lg="4" md="6">
        <CCard>
          <CCardHeader>
            Chasing dots
          </CCardHeader>
          <CCardBody>
            <div class="sk-chase">
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
            </div>
          </CCardBody>
        </CCard >
      </CCol>
      <CCol xl="3" lg="4" md="6">
        <CCard>
          <CCardHeader>
            Swing
          </CCardHeader>
          <CCardBody>
            <div class="sk-swing">
              <div class="sk-swing-dot"></div>
              <div class="sk-swing-dot"></div>
            </div>
          </CCardBody>
        </CCard >
      </CCol>
      <CCol xl="3" lg="4" md="6">
        <CCard>
          <CCardHeader>
            Flow
          </CCardHeader>
          <CCardBody>
            <div class="sk-flow">
              <div class="sk-flow-dot"></div>
              <div class="sk-flow-dot"></div>
              <div class="sk-flow-dot"></div>
            </div>
          </CCardBody>
        </CCard >
      </CCol>
      <CCol xl="3" lg="4" md="6">
        <CCard>
          <CCardHeader>
            Circle
          </CCardHeader>
          <CCardBody>
            <div class="sk-circle">
              <div class="sk-circle-dot"></div>
              <div class="sk-circle-dot"></div>
              <div class="sk-circle-dot"></div>
              <div class="sk-circle-dot"></div>
              <div class="sk-circle-dot"></div>
              <div class="sk-circle-dot"></div>
              <div class="sk-circle-dot"></div>
              <div class="sk-circle-dot"></div>
              <div class="sk-circle-dot"></div>
              <div class="sk-circle-dot"></div>
              <div class="sk-circle-dot"></div>
              <div class="sk-circle-dot"></div>
            </div>
          </CCardBody>
        </CCard >
      </CCol>
      <CCol xl="3" lg="4" md="6">
        <CCard>
          <CCardHeader>
            Cube grid
          </CCardHeader>
          <CCardBody>
            <div class="sk-grid">
              <div class="sk-grid-cube"></div>
              <div class="sk-grid-cube"></div>
              <div class="sk-grid-cube"></div>
              <div class="sk-grid-cube"></div>
              <div class="sk-grid-cube"></div>
              <div class="sk-grid-cube"></div>
              <div class="sk-grid-cube"></div>
              <div class="sk-grid-cube"></div>
              <div class="sk-grid-cube"></div>
            </div>
          </CCardBody>
        </CCard >
      </CCol>
      <CCol xl="3" lg="4" md="6">
        <CCard>
          <CCardHeader>
            Fading circle
          </CCardHeader>
          <CCardBody>
            <div class="sk-circle-fade">
              <div class="sk-circle-fade-dot"></div>
              <div class="sk-circle-fade-dot"></div>
              <div class="sk-circle-fade-dot"></div>
              <div class="sk-circle-fade-dot"></div>
              <div class="sk-circle-fade-dot"></div>
              <div class="sk-circle-fade-dot"></div>
              <div class="sk-circle-fade-dot"></div>
              <div class="sk-circle-fade-dot"></div>
              <div class="sk-circle-fade-dot"></div>
              <div class="sk-circle-fade-dot"></div>
              <div class="sk-circle-fade-dot"></div>
              <div class="sk-circle-fade-dot"></div>
            </div>
          </CCardBody>
        </CCard >
      </CCol>
      <CCol xl="3" lg="4" md="6">
        <CCard>
          <CCardHeader>
            Folding Cube
          </CCardHeader>
          <CCardBody>
            <div class="sk-fold">
              <div class="sk-fold-cube"></div>
              <div class="sk-fold-cube"></div>
              <div class="sk-fold-cube"></div>
              <div class="sk-fold-cube"></div>
            </div>
          </CCardBody>
        </CCard >
      </CCol>
    </CRow>
  </div>
</template>

<script>
export default {
  name: 'spinners'
}
</script>

<style src="spinkit/spinkit.min.css"></style>

<style scoped>
.card-body div{
  margin: auto;
}
</style>
