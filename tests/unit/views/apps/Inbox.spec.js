import {shallowMount, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router'
import CoreuiVue from '@coreui/vue-pro'
import Inbox from '@/views/apps/email/Inbox'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

localVue.use(CoreuiVue)

describe('Inbox.vue', () => {
  it('has a name', () => {
    expect(Inbox.name).toMatch('Inbox')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Inbox, {
      localVue,
      router
    })
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Inbox', () => {
    const wrapper = shallowMount(Inbox, {
      localVue,
      router
    })
    expect(wrapper.findComponent(Inbox)).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Inbox, {
      localVue,
      router
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
