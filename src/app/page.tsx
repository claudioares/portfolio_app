"use client"
import Image from "next/image";
import icon04 from "../../public/icon04.svg"
import { CardsPrimery } from "./components/Cards/primery/cards.primery";
import { CardStackInit } from "./components/Cards/staccks/cards.stacks.init";
import { LinksWorks } from "./components/LinksWorks/links.works";
import { Footer } from "./components/footer/footer";
import Typing from "./components/typing"
import {useLayoutEffect, useState} from "react"
import {gsap} from "gsap"
import {ScrollTrigger} from "gsap/ScrollTrigger"


export default function Home() {

  const [typing, setTyping] = useState(false)

  useLayoutEffect(()=>{
    gsap.to(".buttons_home", {
      opacity: 1
    })
    
    return ()=>{
      gsap.killTweensOf(".buttons_home")
    }
  }, [])

  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".h3_text_tree", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".h3_text_tree",
        start: "top 500px",
        end: "bottom 400px",
        scrub: true
      }
    })

    gsap.to(".img_home_icon04", {
      opacity: 1,
      translate: 0,
      scrollTrigger: {
        trigger: ".img_home_icon04",
        start: "top 400px",
        end: "bottom 370px",
        scrub: true
      }
    })

    return ()=>{
      gsap.killTweensOf("h3_text_tree, img_home_icon04")
    }
  }, [])

  useLayoutEffect(()=>{
    setTimeout(()=>{
      setTyping(true);
    }, 1000)
  }, [])

  return (
    <div className="home_one">
      <div className="primaries_infor_texts">
        <h3 className="h3_text_one">Transforme sua visão em realidade, com um toque de inovação!</h3>
        {typing && <Typing formationDiscripition = "Desenvolvimento Full Stack"/>}
        <p className="p_text_one">
          Desenvolvimento Full Stack envolve habilidades abrangentes 
          tanto no frontend quanto no backend, permitindo a criação 
          integrada de aplicações web. Esses profissionais dominam diversas 
          linguagens, frameworks e bancos de dados, 
          garantindo soluções completas e eficientes.
        </p>
        <div className="buttons_home">
          <button className="one">Fale comigo</button>
          <button className="two">Saiba Mais...</button>
        </div>
      </div>
      
      <div className="home_two">
        <span>
          Estou aqui para transformar suas ideias em realidade digital.
        </span>
        <CardsPrimery />
      </div>

      <div className="home_tree">
        <h2 className="h3_text_tree">
          Projetos para impulsionar sua produtividade 
          ao máximo Ferramentas de alta velocidade e eficiência
        </h2>
        <Image src={icon04} alt="Icons das features" className="img_home_icon04"/>

        <div className="cards_and_links">
            <div className="div_cards_stacks">
              <CardStackInit />
            </div>
            <LinksWorks />
        </div>
      </div>

      <div className="home_footer">
        <Footer />
      </div>

    </div>
  );
}
