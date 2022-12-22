import Head from 'next/head'

import { data } from 'data'
import AppContainer from 'containers/AppContainer'

export default function Home() {
  const title = data.about.name

  return (
    <>
      <Head>
        <title>{title}</title>
        {data.about.description != null && (
          <meta name="description" content={data.about.description} />
        )}

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="profile" />
        <meta property="og:image" content="" />
        {data.about.website != null && (
          <meta property="og:url" content={data.about.website.url} />
        )}
        {data.about.description != null && (
          <meta property="og:description" content={data.about.description} />
        )}
      </Head>
      <AppContainer {...data} />
    </>
  )
}
