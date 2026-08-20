export default {
  name: 'trek',
  title: 'Trek',
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
      title: 'Location',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      options: {
        list: ['Easy', 'Moderate', 'Difficult', 'Hard']
      }
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      placeholder: 'e.g. 2 Days'
    },
    {
      name: 'season',
      title: 'Best Season',
      type: 'string'
    },
    {
      name: 'altitude',
      title: 'Max Altitude',
      type: 'string'
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'string',
      placeholder: 'e.g. 4.8'
    },
    {
      name: 'reviewsCount',
      title: 'Reviews Text/Count',
      type: 'string',
      placeholder: 'e.g. (120 Reviews)'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'string',
      placeholder: 'e.g. ₹2,499'
    },
    {
      name: 'mainImg',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }]
    },
    {
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'desc', title: 'Description', type: 'string' },
            { name: 'iconName', title: 'Icon Type', type: 'string', options: { list: ['views', 'experience', 'guides', 'fort', 'safety'] } }
          ]
        }
      ]
    },
    {
      name: 'itinerary',
      title: 'Itinerary',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'day', title: 'Day label', type: 'string', placeholder: 'e.g. Day 1' },
            { name: 'title', title: 'Day Title', type: 'string' },
            { name: 'img', title: 'Day Image', type: 'image', options: { hotspot: true } },
            { name: 'events', title: 'Events', type: 'array', of: [{ type: 'string' }] }
          ]
        }
      ]
    },
    {
      name: 'inclusions',
      title: 'Inclusions',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'exclusions',
      title: 'Exclusions',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'carry',
      title: 'Carry Checklist',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Item Name', type: 'string' },
            { name: 'iconName', title: 'Icon Type', type: 'string' }
          ]
        }
      ]
    },
    {
      name: 'difficultyDesc',
      title: 'Difficulty Detailed Description',
      type: 'text'
    }
  ]
}
