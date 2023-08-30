export default{
    name:'pride',
    title:'Wall of Pride',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type:'string'
        },
        {
            name:'designation',
            title:'Designation',
            type:'string'
        },
        {
            name:'session',
            title:'Session',
            type:'string'
        },
        {
          name:'prideimage',
          title:'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
      },
    ]
  }