export default function CanonicalTags() {
  return (
    <>
      {/* Additional meta tags for better SEO */}
      <meta name="googlebot" content="index, follow" />
      
      {/* Prevent duplicate content issues */}
      <meta name="format-detection" content="telephone=no" />
      
      {/* Additional SEO meta tags */}
      <meta name="author" content="Max Erfodimo" />
    </>
  );
}
