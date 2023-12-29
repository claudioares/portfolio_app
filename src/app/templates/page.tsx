import { Wrench, FigmaIcon, Cpu } from 'lucide-react'
import { infoTemplates } from '@/utils/info.tec.templates.use'
import Image from 'next/image'
import { NavLeft } from './nav.left'
import { NavRight } from './nav.right'

export default function Templates() {
  return (
    <>
      <div className="bg-black flex justify-center items-center h-screen pt-[5.9rem] text-grey">
        <NavLeft />

        <div className="w-[80rem] h-[auto] justify-center grid grid-cols-2 gap-4">
          {infoTemplates.map((info) => (
            <div
              className="flex gap-12 items-center justify-center"
              key={info.id}
            >
              <div className="relative w-56 cursor-pointer hover:opacity-[0.8]">
                <Image
                  src={info.imgTemplateUp}
                  alt="mini imagem pagina"
                  className="absolute z-10 w-[24.6rem] h-[15.1rem] top-7 left-7 rounded-[1.2rem]"
                />
                <Image
                  src={info.imgTemplateDn}
                  alt="mini imagem pagina"
                  className="w-[24.6rem] h-[15.1rem] rounded-[1.2rem]"
                />
              </div>
              <div className="mt-9 flex flex-col gap-[2.2rem] items-center justify-center">
                <Wrench
                  size={15}
                  className="cursor-pointer hover:opacity-[0.8]"
                />
                <FigmaIcon
                  size={15}
                  className="cursor-pointer hover:opacity-[0.8]"
                />
                <Cpu size={15} className="cursor-pointer hover:opacity-[0.8]" />
              </div>
            </div>
          ))}

          <h1 className="text-center">Brevemente Novos templates</h1>
        </div>

        <NavRight />
      </div>
    </>
  )
}
