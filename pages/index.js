import React from 'react'
import { FunctionalsContent } from '../context/contextApi'
import Layout from './components/layout'
import MansoryList from './components/layout/mansoryList'
import {fetchImage, getRandomInt,morePage} from './helpers/fetch'

const Home = () => {
    const {page,setPage,title,setTitle,setimageList,setSelect}=React.useContext(FunctionalsContent)
    
    

    

    React.useEffect(()=>{
       console.log( page)
       
        setPage(morePage(page))

        setTitle('The best gallery image')
        fetchImage(`https://api.unsplash.com/photos?per_page=20&`)
        .then(res=>setimageList(res))
        setSelect()
    },[])

    
    return (
        <Layout>
           <h1 className="mb-5 text-center display-4">
               {title}
           </h1>
           <div className="container-fluid">
               <div className="p-0 col-12">
                   <MansoryList/>
               </div>
           </div>
           
        </Layout>
    )
}

export default Home
