export default{
    name:'results',
    title:'Examination Result',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Class Name',
            type:'string',
            validation: Rule => Rule.required()
        },
        {
        name:'resultimag',
        title:'Result Image',
        type: 'image',
        validation: Rule => Rule.required(),
        options: {
            hotspot: true,
        },
    },
    ]
}