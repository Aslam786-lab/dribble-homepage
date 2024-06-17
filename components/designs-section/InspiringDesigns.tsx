import { designsData } from '@/db/designs.js'
import React from 'react'
import DesignsItem from './DesignsItem'

function InspiringDesigns() {
  return (
    <section className="py-20 bg-gray-50 text-center mx-14">
      <h2 className="text-3xl font-bold">Explore inspiring designs</h2>
      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-9 px-4">
        {designsData.map((item, index) => (
            <DesignsItem item={item} index={index}/>
        ))}
      </ul>
      <button className='w-52 h-14 border border-black rounded-full text-sm font-semibold mt-14 hover:text-[#565564]'>Browse more inspirations</button>
    </section>
  )
}

export default InspiringDesigns