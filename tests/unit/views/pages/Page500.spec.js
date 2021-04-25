import {createLocalVue, shallowMount} from '@vue/test-utils'
import CoreuiVue from '@coreui/vue-pro'
import Vuex from 'vuex'

import Page500 from '@/views/pages/Page500'

const localVue = createLocalVue()
localVue.use(CoreuiVue)
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    sidebarShow: 'responsive',
    sidebarMinimize: false,
    asideShow: false,
    darkMode: false
  }
})

describe('Page500.vue', () => {
  it('has a name', () => {
    expect(Page500.name).toBe('Page500')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Page500, { store, localVue })
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Page500', () => {
    const wrapper = shallowMount(Page500, { store, localVue })
    expect(wrapper.findComponent(Page500)).toBeTruthy()
  })
  it('should render correct content', () => {
    const wrapper = shallowMount(Page500, { store, localVue })
    expect(wrapper.find('h1').text()).toMatch('500')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Page500, { store, localVue })
    expect(wrapper.element).toMatchSnapshot()
  })
})
