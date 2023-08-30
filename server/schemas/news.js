export default{
    name:'news',
    title:'News',
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
          name:'nimage',
          title:'News Images',
          type: 'image',
          validation: Rule => Rule.required(),
          options: {
            hotspot: true,
          },
      },
        {
            name:'newsImages',
            title:'News Images',
            type:'array',
            of:[{ type:'newsImage'}]
        },
    ]
  }