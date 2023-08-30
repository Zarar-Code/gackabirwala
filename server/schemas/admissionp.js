export default{
    name:'admissionp',
    title:'Admission Process',
    type: 'document',
    fields:[
        {
        name:'admissionpimg',
        title:'Admission Process Image',
        validation: Rule => Rule.required(),
        type: 'image',
        options: {
            hotspot: true,
        },
    },
    ]
}