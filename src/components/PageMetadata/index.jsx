import { Helmet } from 'react-helmet-async';

function PageMetadata({ title, description, keywords }) {
  return (
    <Helmet>
      {title && <title>{title}</title>}
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
  );
}

export default PageMetadata;
