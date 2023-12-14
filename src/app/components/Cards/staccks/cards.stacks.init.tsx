import { Card } from "./card"
import react from "../../../../../public/react.svg"




export function CardStackInit () {
    const infor = {
        name: `React.js: uma biblioteca JavaScript para criar 
        interfaces de usuário reativas e 
        eficientes, enfatizando componentes reutilizáveis.`,
        image: react
    }

    return(
        <>
            <Card 
                name={infor.name}
                image={infor.image}
            />
        </>
    )
}