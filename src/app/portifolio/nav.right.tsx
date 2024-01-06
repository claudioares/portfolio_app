'use client'
import { GithubIcon } from 'lucide-react'
import { repositories } from '@/utils/repo'
import Link from 'next/link'

export async function NavRight() {
  const REPOSITORIE = await repositories()

  return (
    <>
      <div className="border-l-4 border-double h-full w-[25%] flex flex-col items-center p-10">
        <nav className="flex flex-col gap-10 overflow-auto">
          <div className="flex items-center justify-center h-12 w-40 gap-3 rounded-md bg-green">
            <GithubIcon className="w-6" />
            <strong className="text-sm">Links GitHub</strong>
          </div>
          <ul>
            {REPOSITORIE.map(
              (repo: {
                id: null | undefined
                name: string
                svn_url: string
              }) => (
                <li className="cursor-pointer" key={repo.id}>
                  <Link href={repo.svn_url} target="_blank">
                    {repo.name}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      </div>
    </>
  )
}
