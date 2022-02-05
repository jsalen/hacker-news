import { useLocalStorage } from './useLocalStorage'

export function useInitialState() {
  const {
    storedValue: likedPosts,
    setValue: saveLikedPosts,
    synchronize,
  } = useLocalStorage('HNEWS_V1', [])

  const addLikedPost = (post: News) => {
    const newLikes: News[] = [...likedPosts]
    newLikes.push({
      ...post,
      liked: true,
    })
    saveLikedPosts(newLikes)
  }

  const removeLikedPost = (post: News) => {
    saveLikedPosts(likedPosts.filter((p: News) => p.objectID !== post.objectID))
  }

  return {
    likedPosts,
    addLikedPost,
    removeLikedPost,
    synchronize,
  }
}
