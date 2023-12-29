import { GithubIcon } from 'lucide-react'

export function NavRight() {
  return (
    <>
      <div className="border-l-4 border-double h-full w-[25%] flex flex-col items-center p-10">
        <nav className="flex flex-col gap-10">
          <ul className="flex items-center justify-center h-12 w-40 gap-3 rounded-md bg-green">
            <GithubIcon className="w-6" />
            <strong className="text-sm">Links GitHub</strong>
          </ul>
        </nav>
      </div>
    </>
  )
}
