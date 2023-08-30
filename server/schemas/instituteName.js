export default{
    name:'instituteName',
    title:'Institute Name',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Institute Name',
            type:'string',
            validation: Rule => Rule.required(),

        },
    ]
  }