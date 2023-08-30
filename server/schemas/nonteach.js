export default{
    name:'nonteach',
    title:'Non-Teaching Staff',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Non-Teaching Staff Name',
            type:'string'
        },
        {
            name:'designation',
            title:'Designation',
            type:'string'
        },
        {
            name:'qualification',
            title:'Qualification',
            type:'string'
        },
        {
          name:'nteachimage',
          title:'Non-Teaching Staff Image',
          type: 'image',
          options: {
            hotspot: true,
          },
      },
    ]
  }