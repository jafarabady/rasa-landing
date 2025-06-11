import { create } from 'zustand'
import { fetchPosts, createPost, updatePost, deletePost, fetchPostsComments } from '../api/post'

const usePostStore = create((set) => ({
  posts: [],
  comments: [],
  loading: false,
  commentsLoading: false,
  error: null,

  getPosts: async () => {
    set({ loading: true })
    try {
      const posts = await fetchPosts()
      set({ posts, loading: false })
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },

  getPostsComments: async (postId) => {
    set({ commentsLoading: true })
    try {
      const comments = await fetchPostsComments(postId)
      set({ comments, commentsLoading: false })
    } catch (error) {
      set({ error: error.message, commentsLoading: false })
    }
  },

  addPost: async (post) => {
    set({ loading: true })
    try {
      const newPost = await createPost(post)
      set((state) => ({
        posts: [newPost, ...state.posts],
        loading: false,
      }))
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },

  editPost: async (id, updatedPost) => {
    set({ loading: true })
    try {
      await updatePost(id, updatedPost)
      set((state) => ({
        posts: state.posts.map((post) => (post.id === id ? { ...post, ...updatedPost } : post)),
        loading: false,
      }))
    } catch (error) {
      set({ error: error.message, loading: false })
    }
  },

  removePost: async (id) => {
    set({ loading: true })
    try {
      await deletePost(id)
      set((state) => ({
        posts: state.posts.filter((post) => post.id !== id),
        loading: false,
      }))
    } catch (error) {
      set({ error: 'حذف پست ناموفق بود', loading: false })
    }
  },
}))

export default usePostStore
