import React from "react";

interface itemObject {
    item_name: string,
    item_title: string,
    item_media: string
}

interface DesignerSlideItemProps {
    item: itemObject,
    index: number
} 

function DesignerSlideItem({ item, index }: DesignerSlideItemProps) {
  return (
    <li key={index} className="mx-4" style={{ width: '273px', height: '340px', position: 'relative' }}>
      {item.item_media.includes(".mp4") ? (
        <video  autoPlay muted loop  className="w-full h-full rounded-3xl">
          <source src={item.item_media} type="video/mp4" />
        </video>
      ) : (
        <img
          src={item.item_media}
          alt={item.item_name}
          className="w-full h-full rounded-3xl"
        />
      )}
      <div className="absolute left-3 bottom-4 text-left text-white text-sm font-semibold">
        <h3>{item.item_name}</h3>
        <p>{item.item_title}</p>
        <div className="flex justify-between mt-3 space-x-1">
          <Button>Animation</Button>
          <Button>Ui</Button>
          <Button>Visual</Button>
        </div>
      </div>
    </li>
  );
}

export default DesignerSlideItem;

type ButtonProps = {
  children: React.ReactNode
}

function Button({children} : ButtonProps) {
  return (
    <div className="border text-xs text-white border-white bg-transparent flex justify-center items-center rounded-full h-7 py-2 px-4">
      {children}
    </div>
  )
}
