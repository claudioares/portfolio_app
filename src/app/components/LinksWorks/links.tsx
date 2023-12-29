import Link from 'next/link'

type LinksProps = {
  work: string
  link: string
}

export function Links({ work, link }: LinksProps) {
  return (
    <>
      <Link className="cel_link" href={link}>
        <strong>{work}</strong>
      </Link>
    </>
  )
}
