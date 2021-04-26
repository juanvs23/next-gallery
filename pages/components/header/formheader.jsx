import React from 'react'
import {FunctionalsContent} from '../../../context/contextApi'
import styled from '@emotion/styled'
import {useRouter} from 'next/router'


const FormDiv= styled.form`
.border-form{
    position:relative;
   
    button {
        position:absolute;
        appearance: none;
        border: none;
        background: transparent;
        right: 7px;
    top: 21px;
    }
    input.form-control{
        border-radius:30px !important;
    }
}
`


const FormHeader = () => {
    const router = useRouter()
    const search=React.createRef()
    const {setTitle,setimageList,setSelect,keyword,setKeyword} = React.useContext(FunctionalsContent)
    const key=process.env.NEXT_PUBLIC_ACCESS_KEY

    const handlerSubmit=(e)=>{
        
        e.preventDefault()
       if(search.current.value.length>0){
           
      
        setSelect()
        setTitle(`Result's... ${search.current.value}`)
        
        setKeyword(search.current.value)
        fetch(`https://api.unsplash.com/search/photos?per_page=20&query=${search.current.value}&client_id=${key}`)
        .then(res=>res.json())
        .then(res=>{
           
            setimageList(res.results)
          
        })
       }else{

       }
    }
    return (
        <FormDiv onSubmit={handlerSubmit}>
            <div className="pt-3 pb-3 border-form input-group">
  <input type="text" className="form-control" onFocus={()=>router.push('/')} ref={search} placeholder="keyword" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <button type="submit" ><i className="bi bi-search"></i></button>
</div>
        </FormDiv>
    )
}

export default FormHeader
