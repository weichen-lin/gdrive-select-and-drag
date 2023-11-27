import { selectedElement } from './types'

interface EventOnSelectable {
  isCtrlKey: boolean
  mouseEventOnSelectable: boolean
  targetElement: string | null
}

export default (evt: MouseEvent, canSelected: Element[]): EventOnSelectable => {
  let mouseEventOnSelectable: boolean = false
  let targetElement: string | null = null

  const target = evt.target as Element

  canSelected.forEach((value, key) => {
    const containsChecker = value.contains(target)
    if (containsChecker) {
      mouseEventOnSelectable = containsChecker
      targetElement = `${key}`
    }
  })

  return {
    isCtrlKey: evt.ctrlKey || evt.metaKey,
    mouseEventOnSelectable: mouseEventOnSelectable,
    targetElement: targetElement,
  }
}
