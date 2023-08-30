export default{
    name:'admissionc',
    title:'Admission Criteria',
    type: 'document',
    fields:[
        {
        name:'admissioncimg',
        title:'Admission Criteria Image',
        type: 'image',
        validation: Rule => Rule.required(),
        options: {
            hotspot: true,
        },
    },
    ]
}