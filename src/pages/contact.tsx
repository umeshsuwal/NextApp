import type { NextPage } from 'next'
import Link from 'next/link'

const Contact: NextPage = () => {
  return (
    <div className="mx-auto max-w-2xl">
      <div className="rounded-xl bg-white p-8 shadow-md">
        <h1 className="mb-6 text-4xl font-bold text-primary-600">Contact</h1>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-primary-500 focus:ring-primary-500"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-primary-500 py-2 px-4 text-white transition-colors hover:bg-primary-600"
          >
            Submit
          </button>
        </form>
        <div className="mt-6">
          <Link href="/" className="text-primary-500 transition-colors hover:text-primary-600">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Contact