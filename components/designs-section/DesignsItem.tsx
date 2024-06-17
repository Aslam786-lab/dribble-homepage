import React from 'react'
import { HeartIcon, WatchIcon } from '../Icon'

interface ItemObject {
    thumbnailLink: string,
    userName: string,
    userProfileImg: string
}

interface DesignsItem {
    item:ItemObject,
    index: number
}

function DesignsItem({ item, index}: DesignsItem) {
  return (
    <li key={index}>
        <img src={item.thumbnailLink} className='rounded-md'></img>
        <div className='mt-2 flex justify-between'>
            <div className='flex gap-2'>
                <img src={item.userProfileImg} className='size-6 rounded-full'></img>
                <p className='text-sm'>{item.userName}</p>
            </div>
            <div className='flex '>
                <HeartIcon />
                <p className='text-xs pr-2'>56</p>
                <WatchIcon />
                <p className='text-xs'>35k</p>
            </div>
        </div>
    </li>
  )
}

export default DesignsItem