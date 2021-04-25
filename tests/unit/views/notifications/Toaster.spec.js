import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue-pro'
import Toaster from '@/views/notifications/Toaster'

Vue.use(CoreuiVue)

describe('Toaster.vue', () => {
  it('has a name', () => {
    expect(Toaster.name).toMatch('Toaster')
  })
  it('has a created hook', () => {
    expect(typeof Toaster.data).toMatch('function')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Toaster)
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Toastr', () => {
    const wrapper = shallowMount(Toaster)
    expect(wrapper.findComponent(Toaster)).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Toaster)
    expect(wrapper.element).toMatchSnapshot()
  })
})
