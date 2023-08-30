export default{
    name:'VP',
    title:'Vacancy Positions',
    type: 'document',
    fields:[
        {
        name:'VPimage',
        title:'Vacancy Positions Image',
        type: 'image',
        validation: Rule => Rule.required(),
        options: {
            hotspot: true,
        },
    },
    ]
}