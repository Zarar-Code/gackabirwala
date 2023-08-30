export default{
    name:'feestructure',
    title:'Fee Structure',
    type: 'document',
    fields:[
        {
        name:'feestructureimg',
        title:'Fee Structure Image',
        type: 'image',
        validation: Rule => Rule.required(),
        options: {
            hotspot: true,
        },
    },
    ]
}