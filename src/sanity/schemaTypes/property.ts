import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'property',
  title: 'Propriétés (Chalets/Hôtels)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom de la Propriété',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Lien URL (Slug)',
      type: 'slug',
      options: { source: 'name', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Prix / Tarif de base',
      type: 'string',
    }),
    defineField({
      name: 'mainImage',
      title: 'Image Principale',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'features',
      title: 'Caractéristiques (ex: Wifi, Spa, 4 Chambres)',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
})