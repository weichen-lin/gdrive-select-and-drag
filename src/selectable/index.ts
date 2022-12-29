interface SelectableOption {
  selectableRangeClass: string
  selectableRectangleClass: string
}

class Selectable {
  // _selectableRange -> selectable range
  // _selectableRectangle -> ractangle select appear site
  private readonly _selectableRange: HTMLDivElement
  private readonly _selectableRectangle: HTMLDivElement

  constructor(opt: SelectableOption) {
    const { selectableRangeClass, selectableRectangleClass } = opt

    this._selectableRectangle = document.createElement('div')
    this._selectableRange = document.createElement('div')
    this._selectableRange.appendChild(this._selectableRectangle)

    // must have styling for rectangle selection appear
    this._selectableRectangle.classList.add(selectableRectangleClass)

    selectableRangeClass ??
      this._selectableRange.classList.add(selectableRangeClass)

    // styling
  }

  onMousePress() {}

  onMouseMove() {}

  onMouseLeave() {}
}
