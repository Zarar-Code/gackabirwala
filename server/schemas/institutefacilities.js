export default{
    name:'institutefacilities',
    title:'Institute Facilities',
    type: 'document',
    fields:[
        {
            name:'heading',
            title:'Heading',
            type:'string',
            validation: Rule => Rule.required(),
        },
        {
            name:'detail',
            title:'Detail',
            type:'text',
            validation: Rule => Rule.required(),
        },
    ]
  }