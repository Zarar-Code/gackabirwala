export default{
    name:'contactus',
    title:'Contact Us',
    type: 'document',
    fields:[
        {
            name:'address',
            title:'Address',
            type:'string',
            validation: Rule => Rule.required(),
        },
        {
            name:'email',
            title:'Email',
            type:'string',
            validation: Rule => Rule.required(),
        },
        {
            name:'number',
            title:'Phone Number',
            type:'string',
            validation: Rule => Rule.required(),
        },
    ]
  }