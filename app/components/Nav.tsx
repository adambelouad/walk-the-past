'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/', label: 'PROTOTYPE' },
  { href: '/primary-sources', label: 'PRIMARY SOURCES' },
  { href: '/class-connections', label: 'CLASS CONNECTIONS' },
  { href: '/artistic-statement', label: 'ARTISTIC STATEMENT' },
]

export default function Nav() {
  const pathname = usePathname()

  return (
    <nav className="flex justify-center gap-14 px-12 pt-10">
      {links.map(({ href, label }) => {
        const active = pathname === href
        return (
          <Link
            key={href}
            href={href}
            className={`text-md tracking-wide text-black ${
              active ? 'font-black underline underline-offset-4' : 'font-medium no-underline'
            }`}
          >
            {label}
          </Link>
        )
      })}
    </nav>
  )
}
