import { Helmet } from 'react-helmet-async';

export default function SEO({
  title = 'Abubakar Ibrahim | Full-Stack Developer – Laravel, React, Tailwind',
  description = 'Full-stack developer specializing in Laravel, React, and modern web applications. I build scalable, high-performance websites and e-commerce solutions.',
  keywords = 'full-stack developer, laravel developer, react developer, tailwind css, web developer, abubakar ibrahim, portfolio, freelance developer',
  ogImage = 'https://sadiqdev-portfolio.vercel.app/og-image.png',
  ogType = 'website',
  canonicalUrl = 'https://sadiqdev-portfolio.vercel.app/',
  author = 'Abubakar Ibrahim',
  publishedTime,
  modifiedTime,
  article = false,
  structuredData,
}) {
  const siteUrl = 'https://sadiqdev-portfolio.vercel.app';
  const fullCanonicalUrl = canonicalUrl.startsWith('http') ? canonicalUrl : `${siteUrl}${canonicalUrl}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={fullCanonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:site_name" content="Abubakar Ibrahim Portfolio" />
      
      {article && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {article && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {article && (
        <>
          <meta property="article:author" content={author} />
          <meta property="article:section" content="Technology" />
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullCanonicalUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@sadiqdev1" />
      <meta name="twitter:site" content="@sadiqdev1" />

      {/* Additional SEO */}
      <meta name="theme-color" content="#6366f1" />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
