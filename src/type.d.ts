interface News {
  objectID: string
  story_url: string
  story_title: string
  created_at: string
  author: string
  liked?: boolean
}

type ContextType = {
  likedPosts: News[]
  addLikedPost: (post: News) => void
  removeLikedPost: (post: News) => void
}
