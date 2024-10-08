import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Shopping List", href: "/shopping-list" },
    ]

    return (
        <div className='sticky top-0 inset-x-0 bg-background/80 z-40'>
            <nav className='my-container h-16 border-b flex items-center justify-between'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        <Link href='/' className='text-3xl font-bold '>
                            <Image alt='brand_logo' className='size-10' width={40} height={40} src="/recommendation_10294269.png" />
                        </Link>
                    </div>
                </div>
                <div className='flex space-x-6'>
                    {navLinks.map((link, index) => (
                        <a key={index} href={link.href} className='text-muted-foreground font-medium hover:text-foreground'>
                            {link.name}
                        </a>
                    ))}
                </div>
            </nav>
        </div>
    )
}

export default Navbar