import { shallowMount, createLocalVue } from '@vue/test-utils';
import CoreuiVue from '@coreui/vue-pro'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'

import TheSidebar from '@/containers/TheSidebar'

const localVue = createLocalVue()
localVue.use(CoreuiVue)
localVue.use(Vuex)
localVue.use(VueI18n)


const store = new Vuex.Store({
  state: {
    sidebarShow: 'responsive',
    sidebarMinimize: false,
    asideShow: false,
    darkMode: false
  }
})

const i18n = {
  locale: 'en',
  messages: {
    en: {
      menu: { dashboard: 'Dashboard' }
    }
  }
}

describe('TheSidebar.vue', () => {
  it('has a name', () => {
    expect(TheSidebar.name).toBe('TheSidebar')
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(TheSidebar, { store, localVue, i18n })
    expect(wrapper.element).toMatchSnapshot()
  })
})
