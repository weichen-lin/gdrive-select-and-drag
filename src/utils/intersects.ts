export default function intersects(selectArea: Element, selectableElement: Element) {
  const { left, top, right, bottom } = selectArea.getBoundingClientRect()
  const {
    left: selectableElementLeft,
    top: selectableElementTop,
    right: selectableElementright,
    bottom: selectableElementBottom,
  } = selectableElement.getBoundingClientRect()

  return (
    right >= selectableElementLeft &&
    left <= selectableElementright &&
    bottom >= selectableElementTop &&
    top <= selectableElementBottom
  )
}
