import type { NextPage } from 'next'
import Link from 'next/link'

const featuredPosts = [
  { id: '1', title: 'Getting Started with Next.js', excerpt: 'Learn the basics of Next.js' },
  { id: '2', title: 'Tailwind CSS Tips', excerpt: 'Best practices for styling' },
]

const Home: NextPage = () => {
  return (
    <div className="mx-auto max-w-2xl py-8">
      <div className="rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-4xl font-bold text-primary-600">Welcome to My Blog</h1>
        
        <section className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">Featured Posts</h2>
          <div className="space-y-4">
            {featuredPosts.map(post => (
              <article key={post.id} className="border-b border-gray-100 pb-4">
                <Link href={`/posts/${post.id}`}>
                  <h3 className="text-xl font-medium text-primary-500 hover:underline">{post.title}</h3>
                </Link>
                <p className="mt-1 text-gray-600">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="flex gap-4">
          <Link href="/posts" className="btn-primary">
            View All Posts
          </Link>
          <Link href="/about" className="btn-outline">
            About Me
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home