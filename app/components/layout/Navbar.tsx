'use client'
import React from 'react'
import Link from 'next/link'
import { Bars3Icon } from '@heroicons/react/24/solid'

type Props = {}

export const Navbar = (props: Props) => {

    function onCloseDrawer() {
        document.getElementById('my-drawer-3')?.click()
    }
    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-neutral">
                    <div className="flex-none md:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <Bars3Icon className="w-6 h-6 m-2" />
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">Simple Blog</div>
                    <div className="flex-none hidden md:block">
                        <ul className="menu menu-horizontal">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About</Link></li>
                            <li><Link href="/blogs">Blogs</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    <li><Link href="/" onClick={onCloseDrawer}>Home</Link></li>
                    <li><Link href="/about" onClick={onCloseDrawer}>About</Link></li>
                    <li><Link href="/blogs" onClick={onCloseDrawer}>Blogs</Link></li>
                    <li><Link href="/contact" onClick={onCloseDrawer}>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}