import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

type Name = {
    name: string 
    href: string
    image: string | StaticImport
}


export function Card ({name, image, href}:Name) {
    return(
        <a href={href} className="container_card_stacks" target="_blank" rel="noreferrer">
            <div className="card_stack_2">
                <div className="card_stack_3">
                    <Image src={image} alt="LOgo da stack" />
                    <h1 className="h1_card_stacks">{name}</h1>
                </div>
            </div>
        </a>
    )
}