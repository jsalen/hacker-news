import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store'

interface LikedPostState {
  likedPosts: News[]
}

const initialState: LikedPostState = {
  likedPosts: [],
}

export const likedPostSlice = createSlice({
  name: 'likedPosts',
  initialState,
  reducers: {
    hydrate: (state, action) => {
      action.payload.map((item: News) => ({
        ...item,
        liked: true,
      }))
      state.likedPosts = action.payload
    },
    addLike: (state, action: PayloadAction<News>) => {
      const newPost = { ...action.payload, liked: true }
      state.likedPosts.push(newPost)
    },
    removeLike: (state, action: PayloadAction<string>) => {
      state.likedPosts = state.likedPosts.filter(
        (post) => post.objectID !== action.payload
      )
    },
  },
})

export const { addLike, removeLike, hydrate } = likedPostSlice.actions

export const selectLikedPosts = (state: RootState) =>
  state.likedPosts.likedPosts

export default likedPostSlice.reducer
