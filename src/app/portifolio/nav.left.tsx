import Link from 'next/link'
import {
  infoStyleUse,
  infoLibUse,
  infoSitesUse,
} from '@/utils/info.tec.templates.use'

export function NavLeft() {
  return (
    <>
      <div className="border-r-4 border-double h-full w-[25%] flex flex-col items-center justify-center p-10">
        <nav className="flex flex-col gap-10">
          <ul>
            <strong>Sites/blogs de pesquisa</strong>
            {infoSitesUse.map((info) => (
              <li key={info.id}>
                <Link href={info.link} target="_blank">
                  {info.site}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <strong>Bibliotecas mais usadas</strong>
            {infoLibUse.map((info) => (
              <li key={info.id}>
                <Link href={info.link} target="_blank">
                  {info.name}
                </Link>
              </li>
            ))}
          </ul>
          <ul>
            <strong>Estilizações</strong>
            {infoStyleUse.map((info) => (
              <li key={info.id}>
                <Link href={info.link} target="_blank">
                  {info.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
