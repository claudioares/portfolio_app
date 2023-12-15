import {Links} from "./links"
import { infoWorks } from "@/utils/info.works"

export function LinksWorks () {
    
    return(
        <>
            <div className="constainer_links">
                <h3 className="h3_link_works">Em que posso ajudar você?</h3>
                {infoWorks.map(info=>(
                    <Links 
                        work={info}
                        key={info}
                    />
                ))
                }
            </div>
        </>
    )
}