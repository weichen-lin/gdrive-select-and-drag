const cssValueStringify = (value: string | number): string => {
  if (typeof value === 'number') {
    return `${value}px`
  } else {
    return value
  }
}

export default function addCss(ele: HTMLElement, css_obj: Partial<Record<keyof CSSStyleDeclaration, string | number>>) {
  for (const [css_name, value] of Object.entries(css_obj)) {
    if (value !== undefined) {
      ele.style[css_name as any] = cssValueStringify(value)
    }
  }
}
