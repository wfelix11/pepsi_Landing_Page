'use client'

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface CabecalhoProps {
    cor: string;
}
export default function Cabecalho({cor}: CabecalhoProps) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return (
        <header className="flex flex-row justify-between items-center py-4">
            <div className="w-12 md:w-20">
                <Image src="/logo.png" alt="Logo" width={70} height={70} />
            </div>

            <button
                className="md:hidden text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>


            <ul 
            style={{ backgroundColor: isMenuOpen ? cor : 'transparent' }}
            className={`
            ${isMenuOpen ? 'flex z-20' : 'hidden'}
            flex-col 
            gap-6 
            absolute 
            top-16 
            left-0 
            w-full 
            p-4
            md:p-0
            md:bg-transparent m
            md:w-auto 
            md:static 
            md:gap-10 
            md:flex 
            md:flex-row 
            text-white
            `}>
                <li className="hover:underline"><Link href='#'>Home</Link></li>
                <li className="hover:underline"><Link href='#'>Products</Link></li>
                <li className="hover:underline"><Link href='#'>What's New</Link></li>
                <li className="hover:underline"><Link href='#'>Newsletter</Link></li>
                <li className="hover:underline"><Link href='#'>Contact</Link></li>
            </ul>
        </header>
    )
}