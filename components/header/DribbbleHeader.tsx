import React from 'react'

import { DribbbleIcon, SearchIcon } from '../Icon'
import NavLinks from './NavLinks'

function DribbbleHeader() {
  return (
    <header className="flex justify-between items-center py-7 px-10 text-sm font-semibold">
      <NavLinks />
      <DribbbleIcon />
      <div className="flex items-center space-x-6">
        <div className="relative flex items-center">
          <SearchIcon />
          <input
            type="text"
            placeholder="Search..."
             className="border-4 border-transparent pl-10 pr-4 py-2 rounded-full w-64 h-12 font-normal outline-none hover:border-pink-100 "
          />
        </div>
        <button className="font-work hover:text-[#565564]">Log in</button>
        <button className="bg-black text-white px-4 py-2 rounded-full w-24 h-12 hover:bg-[#565564]">
          Sign up
        </button>
      </div>
    </header>
  )
}

export default DribbbleHeader