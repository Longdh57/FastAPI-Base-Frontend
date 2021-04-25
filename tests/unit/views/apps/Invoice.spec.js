import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue-pro'
import Invoice from '@/views/apps/invoicing/Invoice'

Vue.use(CoreuiVue)

describe('Invoice.vue', () => {
  it('has a name', () => {
    expect(Invoice.name).toMatch('Invoice')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Invoice)
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Invoice', () => {
    const wrapper = shallowMount(Invoice)
    expect(wrapper.findComponent(Invoice)).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Invoice)
    expect(wrapper.element).toMatchSnapshot()
  })
})
