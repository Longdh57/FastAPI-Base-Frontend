import {createLocalVue, shallowMount} from '@vue/test-utils'
import CoreuiVue from '@coreui/vue-pro'
import Vuex from 'vuex'

import Login from '@/views/pages/Login'

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

describe('Login.vue', () => {
  it('has a name', () => {
    expect(Login.name).toBe('Login')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Login, { store, localVue })
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Login', () => {
    const wrapper = shallowMount(Login, { store, localVue })
    expect(wrapper.findComponent(Login)).toBeTruthy()
  })
  it('should render correct content', () => {
    const wrapper = shallowMount(Login, { store, localVue })
    expect(wrapper.find('h1').text()).toMatch('Login')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Login, { store, localVue })
    expect(wrapper.element).toMatchSnapshot()
  })
})
