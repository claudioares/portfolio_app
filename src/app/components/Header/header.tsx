import Image from "next/image"
import logo from "../../../assets/logo.png"

export function MyHeader () {
    return(
        <>
            <header className="fixed w-[100%] h-[5.9rem] bg-black to-transparent flex justify-between items-center ps-[10.5rem] pe-[32.9rem] border-b-[0.1rem] border-y-grey">
                <Image src={logo} alt="logo" className="w-[15rem]"/>
                <ul className="flex h-[100%] justify-between w-[56.5rem] items-center text-green_clean">
                    <li><a href="" className=" hover:text-grey">Templates</a></li>
                    <li><a href="" className=" hover:text-grey">Docs</a></li>
                    <li><a href="" className=" hover:text-grey">Blog</a></li>
                    <li><a href="" className=" hover:text-grey">Sobre mim</a></li>
                </ul>
            </header>
        </>
    )
}