import { AppProps } from 'next/app'
import { FC } from 'react'
import Layout from '../Layouts/ParentLayout/Layout'
import '../styles/index.css'



const MyApp:FC<AppProps> = ({ Component, pageProps }) => {
  return( 
    <Layout>
       <Component {...pageProps} />  
    </Layout>)
}

export default MyApp
