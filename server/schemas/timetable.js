export default{
    name:'timetable',
    title:'Time Table',
    type: 'document',
    fields:[
        {
            name:'name',
            title:'Class Name',
            type:'string',
            validation: Rule => Rule.required(),
        },
        {
        name:'timetableimg',
        title:'Time Table Image',
        type: 'image',
        validation: Rule => Rule.required(),
        options: {
            hotspot: true,
        },
    },
    ]
}