import addCss from './addCss'

export default (num: string, position: { x: number; y: number }) => {
  const numElement = document.createElement('div')
  numElement.textContent = num
  numElement.id = 'nums_of_element'
  addCss(numElement, {
    position: 'absolute',
    width: 18,
    height: 18,
    backgroundColor: 'rgb(231, 87, 75)',
    color: 'rgb(236, 232, 232)',
    borderRadius: 150,
    zIndex: 10,
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 18,
    padding: '3px',
    top: position.y,
    left: position.x,
    transitionProperty: 'opacity',
    transitionDuration: '0.3s',
    opacity: '0%',
    boxShadow: '4px 4px 16px 1px rgba(0,0,0,0.75)'
  })

  return numElement
}
