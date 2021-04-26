import React from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

const Enlace=styled.article`
margin-bottom:30px;
`

const ItemImage = ({image,url}) => {
  
    const {id,alt_description,color,description,urls:{regular}}=image
    return (
        <Enlace>
            <Link href={`/${url}/${id}`}>
           <a>

           <img
           className="img-fluid"
           src={regular}
           
           /> 
           </a>
            </Link>
        </Enlace>
    )
}
export default ItemImage