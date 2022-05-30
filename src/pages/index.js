import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'

export default function IndexPage() {
  return (
    <Layout>
      <Seo title='Full Stack Developer' />
        <section className='bg-slate-600'>
          <div class="px-4 py-2 mx-auto 2xl:max-w-screen-2xl sm:px-6 md:px-12 lg:px-24 lg:py-24 2xl:px-12 grid place-items-center h-screen bg-slate-600">
            <div class="flex flex-wrap items-center mx-auto 2xl:max-w-screen-2xl bg-slate-600 mt-16">
              <div class="flex flex-col items-start text-left lg:flex-grow lg:w-1/2 lg:pr-24 md:mb-0">
                <h1 class="mb-8 text-2xl font-bold font-primary leading-none text-white md:text-7xl lg:text-5xl">Hi 👋 I'm Patrick. An independent web developer from London, UK.</h1>
                <p class="mb-4 text-sm md:text-xl leading-relaxed text-left text-gray-400">Currently based in Bushey, Herts. I provide full service digital solutions to small businesses and startups to help them grow and succeed online.
              </p>
                <div class="mt-0 lg:mt-6 max-w-7xl flex space-x-4">
                  <div class="mt-3 rounded-lg sm:mt-0">
                    <Link to='/portfolio' class="items-center block px-8 py-2.5 text-sm md:text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-red-500 rounded-3xl border border-black shadow-offset-black hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">View My Work</Link>
                  </div>
                  <div class="mt-3 rounded-lg sm:mt-0 sm:ml-3">
                    <Link to='/contact' class="items-center block px-8 py-2.5 text-sm md:text-base font-medium text-center text-red-600 transition duration-500 ease-in-out transform border-2 border-black shadow-offset-black dark:bg-gray-100 rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">Make enquiry</Link>
                  </div>
                </div>
              </div>
              <div class="w-full mt-2 lg:w-5/6 lg:max-w-lg xl:mt-0  bg-slate-600">
                <div>
                  <div class="relative w-full max-w-lg bg-slate-600">
                    <div class="absolute top-0 rounded-full bg-red-300 -left-2 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                    <div class="absolute rounded-full bg-red-400 -bottom-6 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div class="relative">
                      <img class="object-cover object-center mx-auto" alt="hero" src="../images/developer.svg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </Layout>
  )
}
