export default{
    name:'principal',
    title:'Principal',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Principle Name',
            type:'string'
        },
        {
            name:'stdname',
            title:'Dear Students',
            type:'string'
        },
        {
            name:'message',
            title:'Message',
            type:'text'
        },
        {
          name:'pimage',
          title:'Principal Image',
          type: 'image',
          options: {
            hotspot: true,
          },
      },
    ]
  }