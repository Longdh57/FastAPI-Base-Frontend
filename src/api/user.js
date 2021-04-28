import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function register(data) {
  return request({
    url: '/register',
    method: 'post',
    data
  })
}

export function getUserInfo() {
  return request({
    url: '/users/me',
    method: 'get'
  })
}

export function updateCurrentUser(data) {
  return request({
    url: '/users/me',
    method: 'put',
    data
  })
}

export function getListUsers(query) {
  return request({
    url: '/users',
    method: 'get',
    params: query
  })
}

export function getDetailUser(user_id) {
  return request({
    url: `/users/${user_id}`,
    method: 'get'
  })
}

export function createUser(data) {
  return request({
    url: '/users',
    method: 'post',
    data
  })
}

