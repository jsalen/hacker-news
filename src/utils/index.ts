import { News } from '../interfaces/News.interface'

export const filterData = (data: News[]) => {
  return data.filter((hit: News) => {
    return (
      hit.story_title !== null ||
      hit.author !== null ||
      hit.story_url !== null ||
      hit.created_at !== null
    )
  })
}
