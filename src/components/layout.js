import React from 'react'
import Navigation from './navigation';
import TopBar from './topbar';
import { motion } from "framer-motion";

import {AnimatePresence} from 'framer-motion';
export const wrapPageElement = ({element}) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
);

export default function Layout({ children }) {
    return (
        <>  
            <TopBar />
            <motion.main
                initial={{ opacity: 0, x: -200 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 200 }}
                transition={{
                    type: "spring",
                    mass: 0.35,
                    stiffness: 75,
                    duration: 0.3,
                    bounce: 0.5
                }}
            >
                <main className='bg-slate-600'>
                {children}
                </main>
            </motion.main>
            <Navigation />
        </>
    )
}
