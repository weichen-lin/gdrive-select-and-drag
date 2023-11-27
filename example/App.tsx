import React, { useEffect, useRef, useState, useMemo } from 'react'
import './index.css'
import Selectable from '../src'

export default function App() {
  const boxs = 100
  const ref = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<string[]>([])

  const selectable = useMemo(() => {
    return new Selectable({
      canStartSelect: true,
      selectAreaClassName: 'selection-area',
      selectablePrefix: 'selectable',
      select_cb: selected => {
        setSelected([...selected])
      },
      elementsExclude: ['test'],
    })
  }, [])

  const selectRef = useRef(selectable).current

  useEffect(() => {
    if (ref?.current && selectable.selectBoundary !== ref?.current) {
      selectRef.init(ref?.current)
    }
  }, [ref?.current])

  return (
    <div className='container' ref={ref}>
      {Array.from({ length: boxs }).map((_, i) => (
        <div
          key={i}
          className={`box selectable ${selected.includes(`box-${i}`) && 'selected'}`}
          data-key={`box-${i}`}
        />
      ))}
      <div id='test' className='box-test'>
        123
      </div>
    </div>
  )
}
