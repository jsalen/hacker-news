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
      state.likedPosts = action.payload
    },
    addLike: (state, action: PayloadAction<News>) => {
      state.likedPosts.push(action.payload)
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
