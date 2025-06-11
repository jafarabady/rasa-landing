import { Helmet } from 'react-helmet'

const PageMetadata = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title || 'پروژه'}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  )
}

export default PageMetadata
