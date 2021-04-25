<template>
  <div>
    <CButton 
      class="ml-2 mx-1" 
      color="primary"
      @click="resetLayout('base')"
    >
      Restore to base layout
    </CButton>
    <CButton
      v-if="storedLayout"
      class="mx-2" 
      color="primary"
      @click="resetLayout"
    >
      Restore to layout saved in local storage
    </CButton>
    <CButton 
      class="mx-2" 
      color="primary" 
      @click="saveGrid"
    >
      Save grid structure to local storage
    </CButton>
    <CButton 
      color="success"
      href="https://github.com/jbaysolutions/vue-grid-layout" 
      target="_blank"
    >
      Documentation
    </CButton>
    <GridLayout
      :layout.sync="layout"
      :key="gridKey"
      :cols="{ lg: 12, md: 8, sm: 8, xs: 4, xxs: 4 }"
      :row-height="10"
      :is-draggable="true"
      :is-resizable="true"
      :responsive="true"
      :margin="[10, 10]"
    >
      <GridItem 
        v-for="item in layout" 
        :key="item.i"
        v-bind="{...item, accent: null }"
        :min-h="7"
        :min-w="2"
      >
        <CCard 
          :accent-color="item.accent" 
          class="h-100"
        >
          <CCardHeader>
            {{ item.static ? 'Static Card' : `Drag & Drop Card ${item.i}` }}
          </CCardHeader>
          <CCardBody class="overflow-auto">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          </CCardBody>
        </CCard>
      </GridItem>
    </GridLayout>
  </div>
</template>

<script>
import { GridLayout, GridItem } from 'vue-grid-layout'

const baseLayout = [
  { i: '0', x: 0, y: 0, w: 4, h: 16, accent: 'primary' },
  { i: '1', x: 4, y: 0, w: 4, h: 12, accent: 'secondary', static: true },
  { i: '2', x: 8, y: 0, w: 4, h: 12, accent: 'success' },
  { i: '3', x: 0, y: 4, w: 4, h: 12, accent: 'info' },
  { i: '4', x: 4, y: 4, w: 8, h: 12, accent: 'warning' },
  { i: '5', x: 4, y: 8, w: 4, h: 12, accent: 'danger' },
]
const layoutKey = 'CoreUI-Vue-Draggable-Layouts'
const storedLayout = JSON.parse(localStorage[layoutKey] || null)

export default {
  name: 'Draggable',
  components: {
    GridLayout,
    GridItem
  },
  data () {
    return {
      layout: storedLayout || baseLayout,
      storedLayout,
      gridKey: 0
    }
  },
  methods: {
    saveGrid () {
      this.storedLayout = JSON.parse(JSON.stringify(this.layout))
      localStorage.setItem(layoutKey, JSON.stringify(this.storedLayout))
    },
    resetLayout (type) {
      this.gridKey++
      this.layout = type === 'base' ? baseLayout : this.storedLayout
    }
  }
}
</script>

<style>
.vue-grid-item.vue-grid-placeholder {
  background: gray !important;
  border: thin dashed !important;
}
</style>

