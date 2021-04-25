import {createLocalVue, shallowMount} from '@vue/test-utils'
import CoreuiVue from '@coreui/vue-pro'
import Vuex from 'vuex'

import Page404 from '@/views/pages/Page404'

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

describe('Page404.vue', () => {
  it('has a name', () => {
    expect(Page404.name).toBe('Page404')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Page404, { store, localVue })
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Page500', () => {
    const wrapper = shallowMount(Page404, { store, localVue })
    expect(wrapper.findComponent(Page404)).toBeTruthy()
  })
  it('should render correct content', () => {
    const wrapper = shallowMount(Page404, { store, localVue })
    expect(wrapper.find('h1').text()).toMatch('404')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Page404, { store, localVue })
    expect(wrapper.element).toMatchSnapshot()
  })
})
