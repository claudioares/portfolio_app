'use client'
import Image from 'next/image'
import icon01 from '../../../../../public/icon01.svg'
import icon02 from '../../../../../public/icon02.svg'
import icon03 from '../../../../../public/icon03.svg'
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function CardsPrimery() {
  gsap.registerPlugin(ScrollTrigger)
  useLayoutEffect(() => {
    gsap.to('.c_1', {
      x: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.container_cards',
        start: 'top 600px',
        end: 'bottom 650px',
        scrub: true,
      },
    })

    gsap.to('.c_2', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.container_cards',
        start: 'top 600px',
        end: 'bottom 650px',
        scrub: true,
      },
    })

    gsap.to('.c_3', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: '.container_cards',
        start: 'top 600px',
        end: 'bottom 650px',
        scrub: true,
      },
    })

    return () => {
      gsap.killTweensOf('.c_1, .c_2, .c_3')
    }
  }, [])

  return (
    <div className="container_card_primary">
      <span className="info_head_card_primary">
        Estou aqui para transformar suas ideias em realidade digital.
      </span>
      <div className="container_cards">
        <div className="cards c_1">
          <div className="img_card">
            <Image src={icon01} alt="imagem do card" />
          </div>
          <h3 className="h3_card">Páginas Dinamicas</h3>
          <p className="p_card">
            Páginas dinâmicas adaptam-se e respondem em tempo real às interações
            do usuário, proporcionando experiências web envolventes e
            personalizadas.
          </p>
        </div>

        <div className="cards c_2">
          <div className="img_card">
            <Image src={icon02} alt="imagem do card" />
          </div>
          <h3 className="h3_card">Responsividade</h3>
          <p className="p_card">
            Responsividade de página garante uma experiência fluida em diversos
            dispositivos, otimizando a visualização e interação para atender a
            diferentes tamanhos de tela.
          </p>
        </div>

        <div className="cards c_3">
          <div className="img_card">
            <Image src={icon03} alt="imagem do card" />
          </div>
          <h3 className="h3_card">Escalabilidade</h3>
          <p className="p_card">
            Escalabilidade na programação refere-se à capacidade de uma
            aplicação crescer eficientemente, lidando com o aumento de demanda e
            volume de dados, garantindo desempenho consistente mesmo diante de
            expansões significativas.
          </p>
        </div>
      </div>
    </div>
  )
}
