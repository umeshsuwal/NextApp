export interface Post {
  id: string
  title: string
  content: string
  date: string
}

export interface PostMeta extends Omit<Post, 'content'> {
  excerpt: string
}

export interface PageProps {
  title?: string
  description?: string
}