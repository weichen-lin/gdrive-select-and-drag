import React, { useEffect, useRef, useState } from 'react'
import './index.css'
import Selectable from '../src'

export default function App() {
  const boxs = 100
  const ref = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<string[]>([])

  useEffect(() => {
    const selection = new Selectable({
      canStartSelect: true,
      boundary: ref?.current as HTMLDivElement,
      selectAreaClassName: 'selection-area',
      selectablePrefix: 'selectable',
      select_cb: e => {
        setSelected([...e.stored])
      },
      drag_cb: () => console.log('dragging'),
    })

    return () => selection.destroy()
  }, [])

  return (
    <div className='container' ref={ref}>
      {Array.from({ length: boxs }).map((_, i) => (
        <div
          key={i}
          className={`box selectable ${selected.includes(`box-${i}`) && 'selected'}`}
          data-key={`box-${i}`}
        />
      ))}
    </div>
  )
}
