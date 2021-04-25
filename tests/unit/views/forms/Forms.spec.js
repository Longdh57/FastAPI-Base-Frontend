import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import CoreuiVue from '@coreui/vue-pro'
import Forms from '@/views/forms/Forms'

Vue.use(CoreuiVue)

describe('Forms.vue', () => {
  it('has a name', () => {
    expect(Forms.name).toBe('Forms')
  })
  it('is Forms', () => {
    const wrapper = shallowMount(Forms)
    expect(wrapper.findComponent(Forms)).toBeTruthy()
  })
})
