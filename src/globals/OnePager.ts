import { GlobalConfig } from 'payload'

export const OnePager: GlobalConfig = {
  slug: 'onePager',
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'bannerImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'avatarImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'subtitle',
      type: 'text',
      required: true,
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
        },
        {
          name: 'url',
          type: 'text',
        },
        {
          name: 'displayName',
          type: 'text',
        },
      ],
    },
    {
      name: 'featuredMedia',
      type: 'upload',
      relationTo: 'media',
    },

    {
      name: 'featuredMediaCaption',
      type: 'text',
    },
    {
      name: 'letterText',
      type: 'richText',
    },
  ],
}
