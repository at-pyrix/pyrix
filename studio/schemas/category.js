export default {
  name: 'category',
  type: 'document',
  title: 'Category',
  fields: [
    {
      name: 'name',
      description: 'Name of the category.',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'color',
      type: 'string',
      title: 'Category Color',
      description: 'RGB Value of color separated by comma, e.g. \'255, 255, 255\''
    },
    {
      name: 'image',
      type: 'image',
      options: {
        metadata: [
          'blurhash',
          'lqip',
          'palette',
          'exif',
        ],
      },
    },
    {
      name: 'icon',
      type: 'string',
      title: 'Icon',
      description: 'Iconify name e.g. \'bx:code-alt\'\n.Check here: https://icon-sets.iconify.design/'
    }
  ],
}
