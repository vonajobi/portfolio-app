import Head from 'next/head'

const titleDefault = 'Victoria Onajobi'
const url = 'https://onajobi.co.vercel.app'
const description =
  'Victoria Onajobi is an Industrial Designer, Engineer, and Programmer. They are technial oriented designer with exceptional skills for building accesible and interactive products.'
const author = 'Victoria Onajobi'

const Header = ({ title = titleDefault }) => {
  return (
    <>
      <Head>
        {/* Recommended Meta Tags */}
        <meta charSet='utf-8' />
        <meta name='language' content='english' />
        <meta httpEquiv='content-type' content='text/html' />
        <meta name='author' content={author} />
        <meta name='designer' content={author} />
        <meta name='publisher' content={author} />

        {/* Search Engine Optimization Meta Tags */}
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta
          name='keywords'
          content='Software Engineer, Creative Developer, CAD Designer, 3D Designer, Programmer, Designer, Artist'
        />
        <meta name='robots' content='index,follow' />
        <meta name='distribution' content='web' />
        
        <meta name='og:title' content={title} />
        <meta name='og:type' content='site' />
        <meta name='og:url' content={url} />
        <meta name='og:image' content={''} />
        <meta name='og:site_name' content='3D Portfolio' />
        <meta name='og:description' content={description} />

        <link rel='apple-touch-icon' href='' />
        <link
          rel='apple-touch-icon'
          sizes='16x16'
          href=''
        />
        <link
          rel='apple-touch-icon'
          sizes='32x32'
          href=''
        />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href=''
        />
        <link rel='manifest' href='/manifest.json' />
        <link
          rel='mask-icon'
          color='#000000'
          href=''
        />
        <link rel='apple-touch-startup-image' href='' />

        {/* Meta Tags for HTML pages on Mobile */}
        {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
        <meta
          name='viewport'
          content='width=device-width, minimum-scale=1, initial-scale=1.0'
        />
        <meta name='theme-color' content='#000' />
        <link rel='shortcut icon' href='' />
      </Head>
    </>
  )
}

export default Header
