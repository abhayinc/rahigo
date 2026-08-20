export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Customer Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'role',
      title: 'Role/Subtitle',
      type: 'string',
      placeholder: 'e.g. Trekkers / Families'
    },
    {
      name: 'content',
      title: 'Review Content',
      type: 'text'
    },
    {
      name: 'rating',
      title: 'Stars (1-5)',
      type: 'number',
      validation: Rule => Rule.min(1).max(5)
    },
    {
      name: 'avatar',
      title: 'Avatar Image URL',
      type: 'url'
    }
  ]
}
