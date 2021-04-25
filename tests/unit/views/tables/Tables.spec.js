import Vue from 'vue'
// import { mount, shallowMount } from '@vue/test-utils';
import { mount } from '@vue/test-utils';
import CoreuiVue from '@coreui/vue-pro'
import Tables from '@/views/tables/Tables'

Vue.use(CoreuiVue)

describe('Tables.vue', () => {
  it('has a name', () => {
    expect(Tables.name).toMatch('Tables')
  })
  it('is Vue instance', () => {
    const wrapper = mount(Tables)
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Tables', () => {
    const wrapper = mount(Tables)
    expect(wrapper.findComponent(Tables)).toBeTruthy()
  })
})
