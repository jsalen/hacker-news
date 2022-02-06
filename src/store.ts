import { configureStore } from '@reduxjs/toolkit'
import likedPostsReducer from './features/likedPosts/likedPostSlice'

export const store = configureStore({
  reducer: {
    likedPosts: likedPostsReducer,
  },
})

store.subscribe(() => {
  localStorage.setItem(
    'HNEWS_V1',
    JSON.stringify(store.getState().likedPosts.likedPosts)
  )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
