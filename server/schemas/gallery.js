export default {
    name: 'gallery',
    title: 'Gallery',
    type: 'document',
    fields: [
      {
        name: 'tags',
        title: 'Tags',
       type:'array',
       of: [
         {
           name:'tag',
           title:'Tag',
           type:'string'
         }
       ]
      },
      {
        name:'galleryimages',
        title:'Gallery Images',
        type:'array',
        of:[{ type:'galleryimage'}]
    },
     
    ],
  };