import {defineField, defineType} from 'sanity'

export const cardType = defineType({
  name: 'card',
  title: 'Card',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'headline'},
      
    }),
    defineField({
        name: 'image',
        type: 'image',
        
      }),
      defineField({
        name: 'text',
        type: 'string',
      }),
  
    defineField({
        name: 'tags',
        type: 'array',
        of: [{type: 'string'}],
      }),
      defineField({
        name: 'offerUpper',
        type: 'string',
      }),
      defineField({
        name: 'offer',
        type: 'string',
      }),
      defineField({
        name: 'offerLower',
        type: 'string',
      }),
      defineField({
        name: 'btnUpper',
        type: 'string',
      }),
      defineField({
        name: 'button',
        type: 'string',
      }),
  ],
})