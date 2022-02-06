import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import './index.css'
import App from './App'

import { hydrate } from './features/likedPosts/likedPostSlice'

const getPostsFromLocalStorage = () => {
  try {
    const persistedState = localStorage.getItem('HNEWS_V1')
    if (persistedState) {
      return JSON.parse(persistedState)
    }
  } catch (error) {
    console.log(error)
  }
}

const posts = getPostsFromLocalStorage()
if (posts) {
  store.dispatch(hydrate(posts))
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
