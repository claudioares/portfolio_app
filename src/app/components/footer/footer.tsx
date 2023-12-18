import Image from "next/image"
import icon_insta from "../../../../public/icon_insta.svg"
import icon_git from "../../../../public/icon_git.svg"
import icon_linkedin from "../../../../public/icon_linkedin.svg"
import logo from "../../../../public/logo.svg"


export function Footer () {


    return(
        <>
            <div className="container_footer">
                <div className="content_one">
                    <Image className="one_image" src={logo} alt="Logo da empresa claudio soares" />
                    <div className="content_icons_social_redes">
                        <Image src={icon_insta} alt="icon logo instagram" />
                        <Image src={icon_git} alt="icon logo github" />
                        <Image src={icon_linkedin} alt="icon logo linkedin" />
                    </div>
                </div>
                <div className="content_two">
                    <div className="links">
                        <strong>LINKS</strong>
                        <ul>
                            <li><a href="">Home</a></li>
                            <li><a href="">Templates</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Sobre mim</a></li>
                            <li><a href="">Em que posso ajudar você?</a></li>
                        </ul>
                    </div>
                    <div className="contacts">
                        <strong>CONTATOS</strong>
                        <ul>
                            <li><a href="">Fale comigo</a></li>
                            <li><a href="">Saiba mais</a></li>
                            <li><a href="">claudiojasoares@gmail.com</a></li>
                            <li><a href="">jascode@yahoo.com</a></li>
                            <li><a href="">jascode.facebook.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}


