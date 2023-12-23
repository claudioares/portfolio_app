"use client"
import Image from "next/image"
import logo from "../../../../public/logo.svg"
import {useLayoutEffect} from "react"
import {gsap} from "gsap"
// import {ScrollTrigger} from "gsap/ScrollTrigger"

export function MyHeader () {

    useLayoutEffect(()=>{
        gsap.to("#header_logo, #docs, #blog, #aboutme", {
            opacity: 1
        })

        gsap.to("#home", {
            x:0,
            opacity: 1
        })

        return ()=>{
            gsap.killTweensOf("#header_logo, .home")
        }
    },[])

    
    return(
        <>
            <header id="header"  className="z-10 fixed w-[100%] h-[5.9rem] bg-black to-transparent flex justify-between items-center ps-[10.5rem] pe-[32.9rem] border-b-[0.1rem] border-y-grey">
                <Image src={logo} alt="logo" className="w-[15rem] opacity-0" id="header_logo"/>
                <ul className="flex h-[100%] justify-between w-[56.5rem] items-center text-green_clean">
                    <li><a href="" className="text-grey" id="home">Home</a></li>
                    <li><a href="" className=" hover:text-grey opacity-0" id="docs">Docs</a></li>
                    <li><a href="" className=" hover:text-grey opacity-0"id="blog" >Blog</a></li>
                    <li><a href="" className=" hover:text-grey opacity-0" id="aboutme">Sobre mim</a></li>
                </ul>
            </header>
        </>
    )
}