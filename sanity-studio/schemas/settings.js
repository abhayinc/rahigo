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
    }
  ]
}
