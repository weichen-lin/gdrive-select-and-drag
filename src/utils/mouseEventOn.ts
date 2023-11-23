import { selectedElement } from './types'

interface EventOnSelectable {
  isCtrlKey: boolean
  mouseEventOnSelectable: boolean
  targetElement: string | null
}

export default (evt: MouseEvent, canSelected: Map<string, selectedElement>): EventOnSelectable => {
  let mouseEventOnSelectable: boolean = false
  let targetElement: string | null = null

  const target = evt.target as Element

  canSelected.forEach((value, key) => {
    const containsChecker = value.element.contains(target)
    if (containsChecker) {
      mouseEventOnSelectable = containsChecker
      targetElement = key
    }
  })

  return {
    isCtrlKey: evt.ctrlKey || evt.metaKey,
    mouseEventOnSelectable: mouseEventOnSelectable,
    targetElement: targetElement,
  }
}
