export default {
    name: 'vision',
    title: 'Message',
    type: 'document',
    fields: [
    {
        name: 'head',
        title: 'Header',
        type: 'string',
      },
    {
        name: 'message',
        title: 'Message',
        type: 'text',
      },
      {
        name:'image',
        title:'Image',
        type: 'image',
        options: {
          hotspot: true,
        },
    },
    ],
  };