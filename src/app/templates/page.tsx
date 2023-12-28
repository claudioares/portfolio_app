import {Wrench, FigmaIcon, Cpu} from "lucide-react";
import template1_0 from "../../../public/template1-0.svg"
import template1_1 from "../../../public/template1-1.svg"
import template2_0 from "../../../public/template2-0.svg"
import template2_1 from "../../../public/template2-1.svg"
import template3_0 from "../../../public/template3-0.svg"
import template3_1 from "../../../public/template3-1.svg"
import template4_0 from "../../../public/template4-0.svg"
import template4_1 from "../../../public/template4-1.svg"
import Image from "next/image";
import Link from "next/link";

export default function Templates () {
    return(
        <>
            <div className="bg-black flex justify-center items-center h-screen pt-[5.9rem] text-grey">
                <div className="border-r-4 border-double h-full w-[25%] flex flex-col items-center justify-center p-10">
                    <nav className="flex flex-col gap-10">
                        <ul>
                            <strong>Bibliotecas mais usadas</strong>
                            <li><Link href={'https://www.react-spring.dev/'} target="_blank">react-spring</Link></li>
                            <li><Link href={'https://lucide.dev/'} target="_blank">Lucide</Link></li>
                        </ul>
                        <ul>
                            <strong>Estilizações</strong>
                            <li><Link href={'https://tailwindcss.com/'} target="_blank">Tailwind</Link></li>
                        </ul>
                    </nav>

                </div>
                <div className="w-[80rem] h-[auto] justify-center grid grid-cols-2 gap-4">

                    <div className="flex gap-12 items-center justify-center">
                        <div className="relative w-56 cursor-pointer hover:opacity-[0.8]">
                            <Image src={template1_0} alt="mini imagem pagina" className="absolute z-10 w-[24.6rem] h-[15.1rem] top-7 left-7 rounded-[1.2rem]"/>
                            <Image src={template1_1} alt="mini imagem pagina" className="w-[24.6rem] h-[15.1rem] rounded-[1.2rem]"/>
                        </div>
                        <div className="mt-9 flex flex-col gap-[2.2rem] items-center justify-center">
                            <Wrench size={15} className="cursor-pointer hover:opacity-[0.8]"/>
                            <FigmaIcon size={15} className="cursor-pointer hover:opacity-[0.8]"/>
                            <Cpu size={15} className="cursor-pointer hover:opacity-[0.8]"/>
                        </div>
                    </div>

                    <div className="flex gap-12 items-center justify-center">
                        <div className="relative w-56 cursor-pointer hover:opacity-[0.8]">
                            <Image src={template2_0} alt="mini imagem pagina" className="absolute z-10 w-[24.6rem] h-[15.1rem] top-7 left-7 rounded-[1.2rem]"/>
                            <Image src={template2_1} alt="mini imagem pagina" className="w-[24.6rem] h-[15.1rem] rounded-[1.2rem]"/>
                        </div>
                        <div className="mt-9 flex flex-col gap-[2.2rem] items-center justify-center">
                            <Wrench size={15} className="cursor-pointer hover:opacity-[0.8]"/>
                            <FigmaIcon size={15} className="cursor-pointer hover:opacity-[0.8]"/>
                            <Cpu size={15} className="cursor-pointer hover:opacity-[0.8]"/>
                        </div>
                    </div>

                    <div className="flex gap-12 items-center justify-center">
                        <div className="relative w-56 cursor-pointer hover:opacity-[0.8]">
                            <Image src={template3_0} alt="mini imagem pagina" className="absolute z-10 w-[24.6rem] h-[15.1rem] top-7 left-7 rounded-[1.2rem]"/>
                            <Image src={template3_1} alt="mini imagem pagina" className="w-[24.6rem] h-[15.1rem] rounded-[1.2rem]"/>
                        </div>
                        <div className="mt-9 flex flex-col gap-[2.2rem] items-center justify-center">
                            <Wrench size={15} className="cursor-pointer hover:opacity-[0.8]"/>
                            <FigmaIcon size={15} className="cursor-pointer hover:opacity-[0.8]"/>
                            <Cpu size={15} className="cursor-pointer hover:opacity-[0.8]"/>
                        </div>
                    </div>

                    <div className="flex gap-12 items-center justify-center">
                        <div className="relative w-56 cursor-pointer hover:opacity-[0.8]">
                            <Image src={template4_0} alt="mini imagem pagina" className="absolute z-10 w-[24.6rem] h-[15.1rem] top-7 left-7 rounded-[1.2rem]"/>
                            <Image src={template4_1} alt="mini imagem pagina" className="w-[24.6rem] h-[15.1rem] rounded-[1.2rem]"/>
                        </div>
                        <div className="mt-9 flex flex-col gap-[2.2rem] items-center justify-center">
                            <Wrench size={15} className="cursor-pointer hover:opacity-[0.8]"/>
                            <FigmaIcon size={15} className="cursor-pointer hover:opacity-[0.8]"/>
                            <Cpu size={15} className="cursor-pointer hover:opacity-[0.8]"/>
                        </div>
                    </div>

                    <h1 className="text-center">Brevemente Novos templates</h1>
                </div>

                <div className="border-l-4 border-double h-full w-[25%] flex flex-col items-center p-10">

                    divw late
ral
                </div>
            </div>
        </>
    )
}