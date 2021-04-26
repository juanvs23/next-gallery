
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import React from 'react'
import {SwiperSlide,Swiper} from 'swiper/react';
import style from './header.module.css'
import Link from 'next/link'
import { FunctionalsContent } from '../../context/contextApi';



const MenuItemList = () => {
    const {list,select,setSelect}=React.useContext(FunctionalsContent)
    SwiperCore.use([Navigation]);

  const handleClick=(element)=>{

   // setSelect(element.target.dataset.id);
  }


    if (!list) {
      return(<div className={style.loadingWaiting}><span>Loading</span></div>)
    } else {
      return(
        <Swiper 
        navigation
        breakpoints={{
          0: {
            
            slidesPerView: 2,
          },   
    768: {
     
      slidesPerView: 3,
    },
    992: {
     
      slidesPerView: 4,
    },
    1200: {
     
      slidesPerView: 5,
    },
        }
        } 
       >

      {  list.map((element,i)=>{
       //console.log(element)
          const {title,id}=element
          const selected=select===id?'active':'';
          return( <SwiperSlide 
                    key={i} > 
                     
                            <Link 
                            href={`/collection/${id}`}  
                           >
                              <a  data-id={id} 
                            className={`${style.navBtn} ${selected}` }
                            >  
                                <span >
                           {title}
                             </span> 
                             </a>
                             </Link>
                         
                      
                  </SwiperSlide>)
          
        })}
        </Swiper>

      )
    }
  };
  export default MenuItemList