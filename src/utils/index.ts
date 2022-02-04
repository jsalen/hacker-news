import { News } from '../interfaces/News.interface'

export const filterData = (data: News[]) => {
  return data.filter((hit: News) => {
    return hit.story_title && hit.story_url && hit.author && hit.created_at
  })
}
