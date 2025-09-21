export default function CanonicalTags() {
  return (
    <>
      {/* Primary canonical URL - this tells Google which version is the "official" one */}
      <link rel="canonical" href="https://maxerfodimo.com/" />
      
      {/* Additional meta tags for better SEO */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Prevent duplicate content issues */}
      <meta name="format-detection" content="telephone=no" />
      
      {/* Additional SEO meta tags */}
      <meta name="author" content="Max Erfodimo" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </>
  );
}
