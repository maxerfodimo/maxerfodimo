export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Stay Focused – Motivational Quote by Max Erfodimo",
    "description": "Stay focused and the result will come. A powerful motivational quote by Max Erfodimo to inspire persistence, discipline, and success.",
    "url": "https://maxerfodimo.com",
    "mainEntity": {
      "@type": "CreativeWork",
      "name": "Stay focused and the result will come",
      "author": {
        "@type": "Person",
        "name": "Max Erfodimo",
        "jobTitle": "Motivational Speaker and Author",
        "description": "Max Erfodimo is a motivational speaker and author dedicated to inspiring people to achieve their goals through focus, discipline, and perseverance."
      },
      "text": "Stay focused and the result will come",
      "genre": "Motivational Quote",
      "keywords": "motivation, focus, success, discipline, perseverance, inspirational quotes"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Max Erfodimo",
      "url": "https://maxerfodimo.com"
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://maxerfodimo.com/images/maxerfodimo.jpg",
      "width": 1200,
      "height": 630,
      "alt": "Stay Focused - Motivational Quote by Max Erfodimo"
    },
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "inLanguage": "en-US",
    "isAccessibleForFree": true,
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://maxerfodimo.com"
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
} 