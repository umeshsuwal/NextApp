import type { Post, PostMeta } from '../types'

const postsData: Post[] = [
  {
    id: '1',
    title: 'First Post',
    content: 'This is my first blog post content.',
    date: '2025-06-01'
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'Another post with some content.',
    date: '2025-06-02'
  }
]

export async function getAllPosts(): Promise<PostMeta[]> {
  return postsData.map((post: Post) => ({
    id: post.id,
    title: post.title,
    date: post.date,
    excerpt: post.content.slice(0, 100) + '...'
  }))
}

export async function getPostById(id: string): Promise<Post | undefined> {
  return postsData.find((post: Post) => post.id === id)
}