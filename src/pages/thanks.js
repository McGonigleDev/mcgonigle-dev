import React from 'react'
import Layout from '../components/layout'

export default function ThankYou() {
  return (
    <Layout>
        <div className='grid place-content-center h-screen text-white text-center'>
            <h1 className='text-5xl md:text-8xl font-primary drop-shadow-xl '>Thanks for getting in touch.</h1>
            <p className='mt-6 text-xl md:text-4xl'>I'll get back to you as quick as I can. <br />
            Best regards, Patrick.
            </p>
        </div>
    </Layout>
  )
}
