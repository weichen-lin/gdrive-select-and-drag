const unitify = (val: string | number, unit = 'px'): string => {
  return typeof val === 'number' ? val + unit : val
}

/**
 * Add css to a DOM-Element
 *
 * @param el The Element.
 * @param attr The attribute or an object which holds css key-properties.
 * @param val The value for a single attribute.
 * @returns {*}
 */
export function css(
  ele: HTMLElement,
  css_obj: Partial<Record<keyof CSSStyleDeclaration, string | number>> | string
): void {
  if (typeof attr === 'object') {
    for (const [key, value] of Object.entries(attr)) {
      value !== undefined && (style[key as any] = unitify(value))
    }
  } else if (val !== undefined) {
    style[attr as any] = unitify(val)
  }
  for (const [style_name, style_value] of Object.entries(css_obj)) {
    style_value
  }
}
