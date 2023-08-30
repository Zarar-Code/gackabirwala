export default{
    name:'degrees',
    title:'Degree',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string',
            validation: Rule => Rule.required(),
        },
        {
          name:'dimage',
          title:'Department Images',
          type: 'image',
          validation: Rule => Rule.required(),
          options: {
            hotspot: true,
          },
      },
        {
            name:'degreeprograms',
            title:'Degree Program',
            type:'array',
            of:[{ type:'degreeprogram'}]
        },
        {
          name: 'tags',
          title: 'Tags',
         type:'array',
         of: [
           {
             name:'tag',
             title:'Tag',
             type:'string'
           }
         ]
        },
    ]
  }