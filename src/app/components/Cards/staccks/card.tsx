import { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"

type Name = {
    name: string 
    image: string | StaticImport
}


export function Card ({name, image}:Name) {
    return(
        <div className="container_card_stacks">
            <div className="card_stack_2">
                <div className="card_stack_3">
                    <Image src={image} alt="LOgo da stack" />
                    <h1 className="h1_card_stacks">{name}</h1>
                </div>
            </div>
        </div>
    )
}