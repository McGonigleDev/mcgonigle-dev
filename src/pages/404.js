import React from 'react'
import Layout from '../components/layout'

export default function NotFoundPage() {
  return (
    <Layout>
      <div className='grid place-content-center bg-slate-600 h-screen'>
        <div className='container mx-auto'>
          <img src="../images/404.svg" className='h-[60vh]' alt="Oops. Page not found" />
        </div>
      </div>
    </Layout>
  )
}
