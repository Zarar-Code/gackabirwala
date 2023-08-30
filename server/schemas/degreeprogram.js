export default {
    name:'degreeprogram',
    title:'Degree Program',
    type:'document',
    fields:[
        {
            name:'name',
            title:'Name',
            type: 'string',
        },
        {
            name:'dsimage',
            title:'Images',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
    ]
}