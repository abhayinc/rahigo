export default {
  name: 'destination',
  title: 'Destination',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'location',
      title: 'Location/Subtitle',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Destination Image',
      type: 'image',
      options: { hotspot: true }
    }
  ]
}
