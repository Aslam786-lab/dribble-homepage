import Link from 'next/link'
import React from 'react'
import { DownArrow } from '../Icon'
import CoursesMenu from './CoursesMenu'
import FindDesignerMenu from './FindDesignerMenu'

function NavLinks() {
  return (
    <div className="flex items-center space-x-4">
        <nav className="hidden md:flex space-x-10">
          <div className="relative group">
            <Link href="#" className="hover:text-[#565564] flex items-center">
              Find designers
              <DownArrow />
            </Link>
            <FindDesignerMenu />
          </div>
          <Link href="#" className="hover:text-[#565564]">
            Inspiration
          </Link>
          <div className="relative group">
            <Link href="#" className="hover:text-[#565564] flex items-center">
              Courses
              <DownArrow />
            </Link>
            <CoursesMenu />
          </div>
          <Link href="#" className="hover:text-[#565564]">
            Jobs
          </Link>
          <Link href="#" className="hover:text-[#565564]">
            Go Pro
          </Link>
        </nav>
      </div>
  )
}

export default NavLinks