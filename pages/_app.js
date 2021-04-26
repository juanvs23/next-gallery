import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';
import 'bootstrap/scss/bootstrap.scss'
import 'bootstrap-icons/font/bootstrap-icons.css'
import '../style/global.css'


import FunctionalsProvider from '../context/contextApi'

export default function MyApp({ Component, pageProps }) {
  
    return (
        <FunctionalsProvider>
            
            
          
            <Component {...pageProps} />

            
        </FunctionalsProvider>
    )
  }