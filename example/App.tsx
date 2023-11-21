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
      // for selection boundary
      boundary: ref?.current as HTMLDivElement,
      // select box styling name ** must have
      selectAreaClassName: 'selection-area',
      // element which can select need to add into classList
      selectablePrefix: 'selectable',
      // callback function for selected element
      select_cb: e => {
        setSelected([...e.stored])
      },
      // callback function for dragged element
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
