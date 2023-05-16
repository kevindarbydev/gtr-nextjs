import { ReactNode } from 'react'
import Link from 'next/link'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen mx-auto">
      <nav className="border-b border-gray-200 py-5 relative z-20 bg-background shadow-[0_0_15px_0_rgb(0,0,0,0.1)]">
        <div className="flex items-center mx-auto lg:px-6 max-w-7xl px-14">
          <div className="flex flex-row items-center">
            <Link
              className="text-link hover:text-link-light transition-colors no-underline [&_code]:text-link [&_code]:hover:text-link-light [&_code]:transition-colors"
              href="/"
            >
              <span>
                <svg height={26} viewBox="0 0 75 65" fill="#000">
                  <title>Vercel Logo</title>
                  <path d="M37.59.25l36.95 64H.64l36.95-64z" />
                </svg>
              </span>
            </Link>
            <ul className="flex items-center content-center">
              <li className="ml-2 text-gray-200">
                <svg
                  viewBox="0 0 24 24"
                  width={32}
                  height={32}
                  stroke="currentColor"
                  strokeWidth={1}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  shapeRendering="geometricPrecision"
                >
                  <path d="M16.88 3.549L7.12 20.451" />
                </svg>
              </li>
              <li className="text-xl ml-4 underline" style={{ letterSpacing: '.01px' }}>
                GTR Hair
              </li>
            </ul>
          </div>
          <div className="justify-end flex-1 hidden md:flex">
            <nav className="inline-flex flex-row items-center">
              <span className="flex flex-start h-full mr-16 cursor-not-allowed text-accents-5">
                <a
                  href="https://www.facebook.com/gtrhair/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  About me
                </a>
              </span>
              <span className="flex items-center h-full ml-2 cursor-not-allowed text-accents-5">
                <a
                  href="https://www.facebook.com/gtrhair/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FB logo
                </a>
              </span>
              <span className="flex items-center h-full ml-2 cursor-not-allowed text-accents-5">
                Instagram logo
              </span>
            </nav>
          </div>
        </div>
      </nav>
      {children}
    </div>
  )
}
