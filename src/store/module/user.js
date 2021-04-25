const state = {
  user: {
    name: undefined,
    token: undefined
  }
}

const getters = {
  token: state => state.user.token
}

export default {state, getters}
