import React from 'react'

import style from './header.module.css'
import MenuItemLlist from './menuItem'
import { FunctionalsContent } from '../../../context/contextApi';

import {Swiper} from 'swiper/react';
import {fetchImage, getRandomInt,morePage} from '../../helpers/fetch'





import styled from '@emotion/styled'
import HeaderTop from './headerTop';
  
const HeaderContainer =styled.header`
border-bottom:1px solid #444;
button{
    transition:0.2s all;
}
a.active span {
    border-bottom: 2px solid #444;
   
}
a span{
    border-bottom: 2px solid transparent;
   
}
.swiper-button-prev:after, .swiper-button-next:after{
    font-size:12px;
}
.swiper-button-next:after, .swiper-button-prev:after{
    font-size: 13px;
    color: black;
    font-weight: bolder;

}
a{
    color: #212529;
    text-decoration:none !important;
}
a:hover,a.active{
    color: #444;
    text-decoration:none !important;
}
`
 const Header = () => {
    
    const {list,setList,select,setSelect}=React.useContext(FunctionalsContent)
     const key=process.env.NEXT_PUBLIC_ACCESS_KEY
     //https://api.unsplash.com/collections?per_page=20&page=1&client_id=p2VDcLcYCgQfeUwJNQNAnKddjrl1XnEr2tvCtExrsA8
     //`https://api.unsplash.com/collections?per_page=20&page=1&client_id=${key}`
     React.useEffect(()=>{
        fetchImage(`https://api.unsplash.com/collections?per_page=20&page=${getRandomInt(1,8)}&`)
         .then(res=>{
            
             setList(res)
         })
     },[])

     const onSelect=(key)=>{
        setSelect(key)
     }
    return (
        <HeaderContainer>
          <HeaderTop/>
         
         <nav className={style.headerNav}>
      
         <MenuItemLlist/>

      
         </nav>
            
        </HeaderContainer>
    )
}


export default Header


