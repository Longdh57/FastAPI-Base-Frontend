import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import {getUserInfo, login} from "@/api/user"
import {setToken, removeToken} from "@/utils/auth"

const state = {
  sidebarShow: 'responsive',
  sidebarMinimize: false,
  asideShow: false,
  darkMode: false,
  user: {
    full_name: undefined,
    email: undefined,
    token: undefined,
    role: undefined,
    last_login: undefined
  }
}

const getters = {
  token: state => state.user.token,
  role: state => state.user.role
}

const mutations = {
  toggleSidebarDesktop (state) {
    const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarOpened ? false : 'responsive'
  },
  toggleSidebarMobile (state) {
    const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
    state.sidebarShow = sidebarClosed ? true : 'responsive'
  },
  set (state, [variable, value]) {
    state[variable] = value
  },
  toggle (state, variable) {
    state[variable] = !state[variable]
  },
  SET_TOKEN: (state, token) => {
    state.user.token = token
  },
  SET_ROLE: (state, role) => {
    state.user.role = role
  },
  SET_INFORMATION: (state, userInfo) => {
    state.user.full_name = userInfo.full_name
    state.user.email = userInfo.email
    state.user.last_login = userInfo.last_login
  }
}

const actions = {
  // user login
  login({ commit }, userInfo) {
    const { username, password } = userInfo
    return new Promise((resolve, reject) => {
      login({ username: username.trim(), password: password }).then(async response => {
        const data = response.data
        commit('SET_TOKEN', data.access_token)
        setToken(data.access_token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },

  // User logout
  logout({commit}) {
    return new Promise((resolve) => {
      commit('SET_TOKEN', undefined)
      commit('SET_ROLE', undefined)
      commit('SET_INFORMATION', {full_name: undefined, email: undefined, last_login: undefined})
      removeToken()
      resolve()
    })
  },

  // Get User Info
  getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getUserInfo().then(response => {
        const { data } = response

        if (!data) {
          reject('Verification failed, please Login again.')
        }

        const { full_name, email, role, last_login } = data

        // roles must be a non-empty array
        if (!['admin', 'guest'].includes(role)) {
          reject('getInfo: Role must is admin or guest')
        }

        commit('SET_ROLE', role)
        commit('SET_INFORMATION', {full_name, email, last_login})

        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },

  // remove token
  resetToken({ commit }) {
    return new Promise(resolve => {
      commit('SET_TOKEN', '')
      commit('SET_ROLE', '')
      removeToken()
      resolve()
    })
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store
