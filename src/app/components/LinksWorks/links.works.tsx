import { Links } from './links'
import { infoWorks } from '@/utils/info.works'
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export function LinksWorks() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to('.container_links', {
      opacity: 1,
      scrollTrigger: {
        trigger: '.container_links',
        start: 'top 400px',
        end: 'bottom 800px',
        scrub: true,
      },
    })
  }, [])

  return (
    <>
      <div className="container_links">
        <h3 className="h3_link_works">Em que posso ajudar você?</h3>
        {infoWorks.map((info) => (
          <Links work={info.work} key={info.id} link={info.link} />
        ))}
      </div>
    </>
  )
}
