export interface selectedElement {
  element: Element
  memorizePosition: Partial<DOMRect>
}

export interface selectionStore {
  stored: string[]
  dragStored: Element[]
  canSelected: Map<string, selectedElement>
  changed: {
    added: string[]
    removed: string[]
  }
}

export enum DragStatus {
  Start,
  End,
}

export type DragCallback = (stored: selectionStore['stored'], status: DragStatus, dragOn: string | null) => any
export type SelectCallback = (stored: selectionStore['stored']) => any

export interface selectionParams {
  selectAreaClassName: string
  selectablePrefix: string
  select_cb?: (...args: any[]) => any
  drag_cb?: DragCallback
  transformFunc?: TransformMethod
  canStartSelect: boolean
}

export enum StoreAction {
  Pass,
  Add,
  Delete,
}

interface TransformMaterial {
  func: (e: Element) => Element
  css: Partial<Record<keyof CSSStyleDeclaration, string | number>>
}

export interface TransformMethod {
  transform: TransformMaterial
  revert: TransformMaterial
  iconPositionX: number
}
