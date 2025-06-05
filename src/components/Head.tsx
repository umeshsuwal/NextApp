import Head from 'next/head'

interface HeadProps {
  title?: string
  description?: string
}

export const CustomHead = ({ 
  title = 'NextApp', 
  description = 'Default description' 
}: HeadProps) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
  </Head>
)