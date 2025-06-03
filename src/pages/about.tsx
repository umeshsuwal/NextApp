import type { NextPage } from 'next'
import Link from 'next/link'

const About: NextPage = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-4xl font-bold text-primary-600">About</h1>
        <div className="prose prose-lg mb-8 text-gray-700">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          </p>
          <ul className="mt-4 list-disc pl-5">
            <li>Lorem ipsum dolor sit amet</li>
            <li>Lorem ipsum</li>
            <li>Lorem ipsum dolor</li>
            <li>Demooo</li>
          </ul>
        </div>
        <Link
          href="/"
          className="inline-block rounded-md bg-primary-500 px-6 py-2 text-white transition-colors hover:bg-primary-600"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default About