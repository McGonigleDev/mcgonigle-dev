import React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import Seo from '../components/seo';

export default function About() {
    return (
        <Layout>
            <Seo title='Contact' />
            <div className='grid place-content-center h-screen bg-slate-600'>
            <div class="px-4 py-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 -mt-10">
                <div class="grid gap-10 lg:grid-cols-2">
                    <div class="lg:pr-10 ">
                        <Link href="/" aria-label="Go Home" title="Logo" class="inline-block mb-5 hidden md:block">
                            <div class="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                                <svg class="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>
                            </div>
                        </Link>
                        <h5 class="mb-4 text-4xl font-primary text-white leading-none capitalize">
                            Providing IT support<br class="hidden md:block" />
                            &amp; digital solutions<span class="text-red-500"> since 2010</span>
                        </h5>
                        <p class="mb-6 text-gray-300">
                            Since becoming a CompTIA certified technician in 2010 I have worked with many businesses providing support and solutions for both hardware and software. Main focus has been configuring, maintaining and supporting backend servers for open source, proprietary and bespoke web applications.
                        </p>
                        <hr class="mb-5 border-gray-300" />
                        <div class="flex items-center space-x-4">
                            <Link href="https://twitter.com/mcgonigledev" class="text-white transition-colors duration-300 hover:text-red-500">
                                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                                    <path
                                        d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z"
                                    ></path>
                                </svg>
                            </Link>
                            <Link href="https://instagram.com/mcgonigle.dev" class="text-white transition-colors duration-300 hover:text-red-500">
                                <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                                    <circle cx="15" cy="15" r="4"></circle>
                                    <path
                                        d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                                    ></path>
                                </svg>
                            </Link>
                            <Link href="https://www.linkedin.com/in/mcgonigledev" class="text-white transition-colors duration-300 hover:text-red-500">
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-6 fill-white' viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                            </Link>

                        </div>
                    </div>
                    <div className='h-12'>
                        <StaticImage src="../images/working.svg" />
                    </div>
                </div>
            </div>
            </div>
        </Layout>

    )
}
