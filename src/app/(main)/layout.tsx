import Footer from '@/components/section/global/footer'
import Navbar from '@/components/section/global/navbar'
import React from 'react'

export default function Layout({children}:{children:React.ReactNode}) {
  return (
    <div>
        <Navbar />
        {children}
        <Footer/>
    </div>
  )
}
