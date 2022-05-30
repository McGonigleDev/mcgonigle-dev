import React from 'react';
import Layout from '../components/layout';
import MyPortfolio from '../components/portfolio';

export default function Portfolio() {
    return (
        <Layout>
            <section className='bg-slate-600'>
                <div className='grid place-content-center h-screen'>
                    <header className='text-center py-4 md:py-20 max-w-2xl mx-auto'>
                        <h1 className='font-bold text-4xl md:text-6xl text-white'>This is a selection of my work for happy clients</h1>
                    </header>
                    <div className='container mx-auto'>
                    <MyPortfolio />
                    </div>
                </div>
            </section>
        </Layout>
    )
}
