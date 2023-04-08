export default {
  title: 'Blog',
  name: 'blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      description: 'A suitable title within 60 characters.',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().min(10).max(60),
    },
    {
      name: 'description',
      description: 'A fitting description of the article.',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required().min(100).max(350),
    },
    {
      name: 'category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    },

    {
      name: 'slug',
      title: 'Slug',
      description: 'This will be the url of the blog',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 200,
      },
    },
    {
      title: 'Featured Image',
      name: 'featuredImage',
      type: 'image',
      options: {
        metadata: [
          'blurhash',
          'lqip',
          'palette',
          'exif',
        ],
      },

      fields: [
        {
          name: 'source',
          type: 'string',
          title: 'Alt text',
          description: 'E.g. Source: Unsplash',
        },
      ],
    },
    {
      title: 'Body',
      name: 'body',
      type: 'markdown',
      // spellCheck: true,
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        }]
    },
    {
      name: 'date',
      type: 'date',
      initialValue: () => {
        const date = new Date()
        return `${date.getFullYear().toString().padStart(4, '0')}-${(date.getMonth() + 1)
          .toString()
          .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`
      },
    },
    {
      name: 'featured',
      title: 'Featured Article',
      type: 'boolean',
      initialValue: false,
      description: 'Feature this article at the home page.',
    },
  ],
}
