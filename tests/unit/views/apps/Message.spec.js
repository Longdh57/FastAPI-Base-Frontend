import {shallowMount, createLocalVue} from '@vue/test-utils';
import VueRouter from 'vue-router'
import CoreuiVue from '@coreui/vue-pro'
import Message from '@/views/apps/email/Message'

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

localVue.use(CoreuiVue)

describe('Message.vue', () => {
  it('has a name', () => {
    expect(Message.name).toMatch('Message')
  })
  it('is Vue instance', () => {
    const wrapper = shallowMount(Message, {
      localVue,
      router
    })
    expect(wrapper.vm).toBeTruthy()
  })
  it('is Message', () => {
    const wrapper = shallowMount(Message, {
      localVue,
      router
    })
    expect(wrapper.findComponent(Message)).toBeTruthy()
  })
  test('renders correctly', () => {
    const wrapper = shallowMount(Message, {
      localVue,
      router
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
