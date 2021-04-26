import React from 'react'
import { FunctionalsContent } from '../../context/contextApi'
import Masonry from 'react-masonry-css'
import ItemImage from '../itemimage/index'

const MansoryList = () => {
    const {imageList,setimageList,keyword,setKeyword} = React.useContext(FunctionalsContent)
    const breakpointColumnsObj = {
        default: 4,
        1300: 3,
        992: 2,
        767: 1
      };
    if(imageList){
    
        return(
    <Masonry
    breakpointCols={breakpointColumnsObj}
  className="my-masonry-grid"
  columnClassName="my-masonry-grid_column"
    >
        { imageList.map((image,i)=>{
             return <ItemImage  key={i} image={image} url={'photo'} />
          })
         }
    </Masonry>
        )

    }else{
        return null
    }

}

export default MansoryList
