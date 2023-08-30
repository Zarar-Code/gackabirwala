export default{
    name:'datesheet',
    title:'Date Sheet',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Class Name',
            type:'string',
            validation: Rule => Rule.required(),
        },
        {
        name:'datesheetimg',
        title:'Date Sheet Image',
        type: 'image',
        validation: Rule => Rule.required(),
        options: {
            hotspot: true,
        },
    },
    ]
}