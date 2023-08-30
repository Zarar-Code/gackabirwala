import React, { useState ,useEffect  } from 'react'
import {urlFor ,client} from '../client'
import { HashLoader } from "react-spinners";
import './GalleryContent.css'

const GalleryContent = () => {

  const [activeFilter, setActiveFilter] = useState("All");
  const  [gallery, setGallery] = useState([])
  const [filterWork, setFilterWork] = useState([])
  const [loading, setLoading] = useState(true)
  const [availableTags, setAvailableTags] = useState([]);

  useEffect(() => {
    const query = '*[_type == "gallery"]';
    
    client.fetch(query)
      .then((data) => {
        setGallery(data);
        setFilterWork(data);
        const allTags = [...new Set(data.flatMap(item => item.tags))];
        setAvailableTags(allTags);
      })
      .finally(() => setLoading(false));
  }, []);
  // console.log(filterWork)
  

  if (loading) {
    return (
      <>
      {/* <Head name={"Events Detail"} /> */}
      <div className="loading-spinner">
      <HashLoader color="#5159ff" loading={loading} size={40} />
      </div>
      </>
    );
  }

  const handleWorkFilter=(item)=>{
    setActiveFilter(item);
        setFilterWork(gallery.filter((gallery)=>gallery.tags.includes(item)))
  }
  return (
    <>
     <h3>Gallery Photo Albums</h3>
        <p>Here are institute Photo Albums</p>
    <div className="degreePro-cont">
    <div className="degreePro-btn">
  {[ ...availableTags].map((item, index) => (
    <div
      style={{ cursor: "pointer" }}
      key={index}
      onClick={() => handleWorkFilter(item)}
      className={`degree-btn ${activeFilter === item ? "active" : ""}`}
    >
      {item.toUpperCase()}
    </div>
  ))}
</div>
        <div className="gallery-cont" data-aos="fade-up">
        {filterWork?.map((filterWork)=>(
          <>
        {
        filterWork.galleryimages?.map((curElem, index)=>{
            return(
            <>
        <img key={index} src={urlFor(curElem.image)} alt='gallery' />
    </>
    )
  })
}
</>
        ))}
  </div>
</div>
    </>
  )









//     const photos = ["ALL" , "Biology Lab","Chemistry Lab" , "Computer Lab","Physics Lab", "Library" ];

//     const [gallery, setGallery] = useState("ALL");
//   return (
//     <>
//       <h3>Gallery Photo Albums</h3>
//     <p>Here are institute Photo Albums</p>
//     <div className="degreePro-cont">
//     <div className="degreePro-btn">
//     {
//             photos.map((curPic)=>{
//                 return(
//                     <button
//                     type='button'
//                     key={curPic}
//                     className={`degree-btn ${gallery === curPic ? 'active' : ''}`}
//                     onClick={()=> setGallery(curPic)}
//                     >
//                     {curPic.toUpperCase()}
//                     </button>
//                 )
//             })
//         }
//         </div>
//     {
//   GalleryData.map((curElem) => (
//     <div key={curElem.id}>
//       {gallery === "ALL" && (
//         <div className="gallery-cont" data-aos="fade-up">
//           {curElem.Images.map((image, index) => (
//             <img key={index} src={image} alt={`${curElem.name} ${index + 1}`} />
//           ))}
//         </div>
//       )}
//       <div>{gallery === curElem.name && (
//         <div className="gallery-cont "data-aos="fade-up">
//     {curElem.Images.map((image, index) => (
//               <img key={index} src={image} alt={`${curElem.name} ${index + 1}`} />
//             ))
//             }
//         </div>
//     )}</div>
//     </div>
//   ))
// }
// </div>
//     </>
//   )
}

export default GalleryContent