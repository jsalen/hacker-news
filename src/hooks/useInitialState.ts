import { useAppDispatch } from './hooksTypes'
import { addLike, removeLike } from '../features/likedPosts/likedPostSlice'
import { useLocalStorage } from './useLocalStorage'

export function useInitialState() {
  const dispatch = useAppDispatch()
  const { storedValue: likedPosts, setValue: saveLikedPosts } = useLocalStorage(
    'HNEWS_V1',
    []
  )

  const addLikedPost = (post: News) => {
    const newPost = { ...post, liked: true }
    dispatch(addLike(newPost))
  }

  const removeLikedPost = (postID: string) => {
    saveLikedPosts(likedPosts.filter((p: News) => p.objectID !== postID))
    dispatch(removeLike(postID))
  }

  return {
    likedPosts,
    addLikedPost,
    removeLikedPost,
  }
}
