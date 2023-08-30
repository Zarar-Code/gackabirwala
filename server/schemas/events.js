export default{
  name:'events',
  title:'Events',
  type: 'document',
  fields:[
      {
          name:'name',
          title:'Name',
          type:'string',
          validation: Rule => Rule.required(),
      },
      {
          name:'detail',
          title:'Detail',
          type:'text'
      },
      {
        name:'fimage',
        title:'Main Images',
        type: 'image',
        validation: Rule => Rule.required(),
        options: {
          hotspot: true,
        },
    },
      {
          name:'eventImages',
          title:'Event Images',
          type:'array',
          of:[{ type:'eventImage'}]
      },
  ]
}