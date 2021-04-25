import {shallowMount, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router'
import CoreuiVue from '@coreui/vue-pro'
import Compose from '@/views/apps/email/Compose'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

localVue.use(CoreuiVue)

describe('Compose.vue', () => {
  it('has a name', () => {
    expect(Compose.name).toMatch('Compose')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Compose, {
      localVue,
      router
    })
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Compose', () => {
    const wrapper = shallowMount(Compose, {
      localVue,
      router
    })
    expect(wrapper.findComponent(Compose)).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Compose, {
      localVue,
      router
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})

