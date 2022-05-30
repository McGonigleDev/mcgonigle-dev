import React from 'react'
import Seo from '../components/seo';
import Layout from '../components/layout';


export default function ContactPage() {
  return (
    <Layout>
      <Seo title='Full Stack Developer' />
      <section class="bg-slate-700 grid place-content-center h-screen">
        <div class="max-w-screen-xl px-4 py-32 mx-auto sm:px-6 lg:px-8 bg-slate-700">
          <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div class="mt-36 lg:py-12 lg:col-span-2">
              <p class="max-w-xl text-3xl md:text-7xl text-white font-primary">
                Let's work together
              </p>

              <div class="mt-2">
                <p class="text-xl md:text-xl font-bold text-pink-600"> patrick@mcgonigle.dev </p>

                <address class="mt-2 not-italic text-sm md:text-base text-gray-200">Fill out the form and I'll get back to you as quick as I can.</address>
              </div>
            </div>

            <div class="p-8 bg-slate-500 shadow-offset-black rounded-lg lg:p-12 lg:col-span-3">
              <form action="https://formsubmit.co/b111adf07e54cc89aab203ecc7a7049c" method='post' class="space-y-4">
                <div>
                  <label class="sr-only" for="name">Name</label>
                  <input class="w-full p-3 text-sm border-gray-200 rounded-lg" placeholder="Name" type="text" id="name" />
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="sr-only" for="email">Email</label>
                    <input
                      class="w-full p-3 text-sm border-gray-200 rounded-lg"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      name='Email'
                    />
                  </div>

                  <div>
                    <label class="sr-only" for="phone">Phone</label>
                    <input
                      class="w-full p-3 text-sm border-gray-200 rounded-lg"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      name='Contact Number'
                    />
                  </div>
                </div>

                <div>
                  <label class="sr-only" for="message">Message</label>
                  <textarea
                    class="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Message"
                    rows="6"
                    id="message"
                    name='message'
                  ></textarea>
                </div>

                {/* Thank You Page */}
                <input type="hidden" name="_next" value="https://mcgonigle.dev/thanks" />
                {/* Honeypot */}
                <input type="text" name="_honey" className='hidden' />

                <div class="mt-4">
                  <button
                    type="submit"
                    class="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                  >
                    <span class="font-medium"> Send Enquiry </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5 ml-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
