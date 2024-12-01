import { GlobalConfig } from 'payload'

export const Character: GlobalConfig = {
  slug: 'character',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'system',
      type: 'textarea',
    },
    {
      name: 'lore',
      type: 'json',
    },
  ],
}
