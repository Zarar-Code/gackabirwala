export default{
  name:'faculty',
  title:'Faculty',
  type: 'document',
  fields:[
      {
          name:'name',
          title:'Faculty Name',
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
        name:'facultyimage',
        title:'Faculty Image',
        type: 'image',
        options: {
          hotspot: true,
        },
    },
  ]
}