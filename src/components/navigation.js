import React from 'react'
import { HomeIcon, IdentificationIcon, AtSymbolIcon } from '@heroicons/react/solid'
import { Link } from "gatsby"


export default function Navigation() {
    
    return ( 
        <>
            <nav className='flex flex-row fixed bottom-0 w-full border-t border-black z-10'>
                <Link
                    to='/'
                    activeClassName="active"

                    className='basis-1/4 p-2 flex flex-col items-center bg-slate-500 hover:bg-red-400'>
                    <HomeIcon className='w-8 text-white' />
                    <span className='text-gray-100 font-semibold text-sm mt-1'>
                        Home
                    </span>
                </Link>
                <Link
                    to='/portfolio'
                    activeClassName="active"
                    className='basis-1/4 p-2 bg-slate-500 flex flex-col items-center border-l border-black hover:bg-red-400'>
                    <svg xmlns="http://www.w3.org/2000/svg" className='w-8 h-8 fill-white' viewBox="0 0 640 512"><path d="M128 96h384v256h64V80C576 53.63 554.4 32 528 32h-416C85.63 32 64 53.63 64 80V352h64V96zM624 384h-608C7.25 384 0 391.3 0 400V416c0 35.25 28.75 64 64 64h512c35.25 0 64-28.75 64-64v-16C640 391.3 632.8 384 624 384zM365.9 286.2C369.8 290.1 374.9 292 380 292s10.23-1.938 14.14-5.844l48-48c7.812-7.813 7.812-20.5 0-28.31l-48-48c-7.812-7.813-20.47-7.813-28.28 0c-7.812 7.813-7.812 20.5 0 28.31l33.86 33.84l-33.86 33.84C358 265.7 358 278.4 365.9 286.2zM274.1 161.9c-7.812-7.813-20.47-7.813-28.28 0l-48 48c-7.812 7.813-7.812 20.5 0 28.31l48 48C249.8 290.1 254.9 292 260 292s10.23-1.938 14.14-5.844c7.812-7.813 7.812-20.5 0-28.31L240.3 224l33.86-33.84C281.1 182.4 281.1 169.7 274.1 161.9z" /></svg>
                    <span className='text-gray-100 font-semibold text-sm mt-1'>
                        Portfolio
                    </span>
                </Link>
                <Link
                    to='/about'
                    activeClassName="active"
                    className='basis-1/4 p-2 bg-slate-500 flex flex-col items-center border-l border-black hover:bg-red-400'>
                    <IdentificationIcon className='w-8 text-white' />
                    <span className='text-gray-100 font-semibold text-sm mt-1'>
                        About
                    </span>
                </Link>
                <Link
                    to='/contact'
                    activeClassName="active"
                    className='basis-1/4 p-2 bg-slate-500 flex flex-col items-center border-l border-black hover:bg-red-400'>
                    <AtSymbolIcon className='w-8 text-white' />
                    <span className='text-gray-100 font-semibold text-sm mt-1'>
                        Contact
                    </span>
                </Link>
            </nav>
        </>
    )
}