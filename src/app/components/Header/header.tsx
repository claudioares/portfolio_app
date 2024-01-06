'use client'
import Image from 'next/image'
import logo from '../../../../public/logo.svg'
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function MyHeader() {
  const pathname = usePathname()

  useLayoutEffect(() => {
    gsap.to('#header_logo, #docs, #blog, #aboutme', {
      opacity: 1,
    })

    gsap.to('#home', {
      x: 0,
      opacity: 1,
    })

    return () => {
      gsap.killTweensOf('#header_logo, .home')
    }
  }, [])

  return (
    <>
      {pathname === '/talkToMe' ? (
        <div
          id="header"
          className="z-10 fixed w-[100%] h-[5.9rem] bg-black to-transparent flex justify-between items-center ps-[10.5rem] pe-[32.9rem] border-b-[0.1rem] border-y-grey"
        >
          <Image
            src={logo}
            alt="logo"
            className="w-[15rem] opacity-0"
            id="header_logo"
          />
          <ul className="flex h-[100%] justify-between w-[56.5rem] items-center text-green_clean">
            <li>
              <Link href="/" className={`hover:text-grey opacity-0`} id="home">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/portifolio"
                className={`hover:text-grey opacity-0`}
                id="docs"
              >
                Portifólio
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`hover:text-grey opacity-0`}
                id="blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/aboutme"
                className={`hover:text-grey opacity-0`}
                id="aboutme"
              >
                Sobre mim
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div
          id="header"
          className="z-10 fixed w-[100%] h-[5.9rem] bg-black to-transparent flex justify-between items-center ps-[10.5rem] pe-[32.9rem] border-b-[0.1rem] border-y-grey"
        >
          <Image
            src={logo}
            alt="logo"
            className="w-[15rem] opacity-0"
            id="header_logo"
          />
          <ul className="flex h-[100%] justify-between w-[56.5rem] items-center text-green_clean">
            <li>
              <Link
                href="/"
                className={`${
                  pathname === '/' && 'text-grey'
                } hover:text-grey opacity-0`}
                id="home"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/portifolio"
                className={`${
                  pathname === '/portifolio' && 'text-grey'
                } hover:text-grey opacity-0`}
                id="docs"
              >
                Portifólio
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`${
                  pathname === '/blog' && 'text-grey'
                } hover:text-grey opacity-0`}
                id="blog"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/aboutme"
                className={`${
                  pathname === '/aboutme' && 'text-grey'
                } hover:text-grey opacity-0`}
                id="aboutme"
              >
                Sobre mim
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  )
}
