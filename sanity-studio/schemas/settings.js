export default {
  name: 'settings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'phone',
      title: 'Contact Phone Number',
      type: 'string',
      placeholder: 'e.g. +91 98765 43210'
    },
    {
      name: 'email',
      title: 'Contact Email',
      type: 'string'
    },
    {
      name: 'address',
      title: 'Office Address',
      type: 'string'
    },
    {
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url'
    },
    {
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url'
    },
    {
      name: 'youtubeUrl',
      title: 'YouTube URL',
      type: 'url'
    },
    {
      name: 'whatsappUrl',
      title: 'WhatsApp URL',
      type: 'url'
    },
    {
      name: 'heroTitle',
      title: 'Hero Heading Title',
      type: 'string',
      placeholder: 'e.g. Find Your Next Adventure'
    },
    {
      name: 'heroSubtitle',
      title: 'Hero Subtitle Description',
      type: 'string',
      placeholder: 'e.g. Explore Maharashtra like never before.'
    },
    {
      name: 'heroBgImage',
      title: 'Hero Background Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'ctaHeading',
      title: 'CTA Banner Heading',
      type: 'string',
      placeholder: 'e.g. Every step tells a story.'
    },
    {
      name: 'ctaText',
      title: 'CTA Banner Description Text',
      type: 'text'
    },
    {
      name: 'ctaBgImage',
      title: 'CTA Banner Background Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
      placeholder: 'e.g. RahiGo Tours - Explore Treks in Maharashtra'
    },
    {
      name: 'seoDescription',
      title: 'SEO Description Meta Tag',
      type: 'text'
    },
    {
      name: 'seoKeywords',
      title: 'SEO Keywords Meta Tag',
      type: 'string',
      placeholder: 'e.g. treks, Maharashtra, forts, camping, tours'
    }
  ]
}
