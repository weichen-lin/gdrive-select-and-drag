import { selectedElement } from './types'

export default (evt: MouseEvent, canSelected: Map<string, selectedElement>) => {
  let isClickOnSelectable: boolean = false
  let onClickElement: string | null = null

  const target = evt.target as Element

  canSelected.forEach((value, key) => {
    const containsChecker = value.element.contains(target)
    if (containsChecker) {
      isClickOnSelectable = containsChecker
      onClickElement = key
    }
  })

  return {
    isCtrlKey: evt.ctrlKey || evt.metaKey,
    isClickOnSelectable: isClickOnSelectable,
    onClickElement: onClickElement,
  }
}
