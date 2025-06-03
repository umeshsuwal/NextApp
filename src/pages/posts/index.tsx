import type { NextPage } from 'next'
import Link from 'next/link'
import { getAllPosts } from '../../lib/posts'

interface Props {
  posts: Awaited<ReturnType<typeof getAllPosts>>
}

const PostsPage: NextPage<Props> = ({ posts }) => {
  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.id} className="border-b pb-4">
            <Link href={`/posts/${post.id}`} className="text-xl font-semibold hover:underline">
              {post.title}
            </Link>
            <p className="text-gray-600 mt-1">{post.excerpt}</p>
            <p className="text-sm text-gray-400">{post.date}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const posts = await getAllPosts()
  return {
    props: { posts }
  }
}

export default PostsPage