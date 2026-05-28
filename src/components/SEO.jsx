import { Helmet } from 'react-helmet-async'

function SEO({
  title = 'Chansa Enterprises | Smart Tech Solutions',
  description = 'Chansa Enterprises provides web development, hosting, business email, electronics, graphic design, networking, software support, and IT solutions.',
  url = 'https://chansaenterprises.com',
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="https://chansaenterprises.com/favicon.png" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content="https://chansaenterprises.com/favicon.png" />
    </Helmet>
  )
}

export default SEO