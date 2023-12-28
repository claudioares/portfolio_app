import Image from "next/image"
import icon_insta from "../../../../public/icon_insta.svg"
import icon_git from "../../../../public/icon_git.svg"
import icon_linkedin from "../../../../public/icon_linkedin.svg"
import logo from "../../../../public/logo.svg"
import Link from "next/link"


export function MyFooter () {

    return(
        <>
            <div className="container_footer z-10 text-grey">
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
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="">Templates</Link></li>
                            <li><Link href="">Blog</Link></li>
                            <li><Link href="">Sobre mim</Link></li>
                            <li><Link href="">Em que posso ajudar você?</Link></li>
                        </ul>
                    </div>
                    <div className="contacts">
                        <strong>CONTATOS</strong>
                        <ul>
                            <li><a href="/talkToMe">Fale comigo</a></li>
                            <li><a href="">Saiba mais</a></li>
                            <li><a href="">claudiojasoares@gmail.com</a></li>
                            <li><a href="">jas.code@yahoo.com</a></li>
                            <li><a href="">jascode.facebook.com</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}


