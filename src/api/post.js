import axios from 'axios'

const API_URL = import.meta.env.REACT_APP_API_URL || 'https://jsonplaceholder.typicode.com'

export const fetchPosts = async () => {
  const response = await axios.get(`${API_URL}/posts`)
  return response.data
}
export const fetchPostsComments = async (postId) => {
  const response = await axios.get(`${API_URL}/comments`, {
    params: {
      postId,
    },
  })
  return response.data
}

export const createPost = async (post) => {
  const response = await axios.post(`${API_URL}/posts`, post)
  return response.data
}

export const updatePost = async (id, post) => {
  const response = await axios.put(`${API_URL}/posts/${id}`, post)
  return response.data
}

export const deletePost = async (id) => {
  await axios.delete(`${API_URL}/posts/${id}`)
  return id
}
