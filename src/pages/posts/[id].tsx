import type { GetStaticPropsContext, NextPage } from 'next'
import { getPostById, getAllPosts } from '../../lib/posts'
import type { Post } from '../../types'

interface Props {
  post: Post | undefined
}

const PostPage: NextPage<Props> = ({ post }) => {
  if (!post) return <div>Post not found</div>

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-gray-400 mb-6">{post.date}</p>
      <div className="prose">
        <p>{post.content}</p>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const posts = await getAllPosts()
  const paths = posts.map((post) => ({
    params: { id: post.id }
  }))

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps(context: GetStaticPropsContext) {
  const id = context.params?.id as string
  const post = await getPostById(id)

  return {
    props: { post }
  }
}

export default PostPage