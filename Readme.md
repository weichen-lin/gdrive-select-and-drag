![截圖 2023-01-11 下午2 02 53](https://user-images.githubusercontent.com/60848391/211729673-b48371a0-8d75-46b0-b0fe-92ceb22a6b78.png)

# gdrive-select-and-drag

This is a libary to satisfy the function of selecting and dragging the selected files in Google Cloud Drive

[Video Demo](https://youtu.be/scjGdpSBdRE)

#### 🙏 Thanks for the idea from [Simonwep](https://github.com/Simonwep/selection)

## 🚀 How to use

```css
.selection-area {
  border: 1px solid rgba(20, 20, 20, 0.06);
  background-color: rgba(20, 20, 20, 0.06);
  border-radius: 5px;
}
```

```typescript
import Selectable from './selectable'

const App = () => {
  const [selected, setSelected] = useState<Set<string>>(new Set())
  const [dragged, setDragged] = useState<Set<string>>(new Set())

  const root = createRef<HTMLDivElement>()

  interface SelectionEvent {
    stored: string[]
    canSelected: Element[]
    changed: {
      added: string[]
      removed: string[]
    }
  }

  const handleSelected = ({
    stored,
    changed: { added, removed }
  }: SelectionEvent) => {
    const newSelected = new Set<string>(stored)
    added.forEach((e) => newSelected.add(e))
    removed.forEach((e) => newSelected.delete(e))

    setSelected(newSelected)
  }

  const handleDragged = ({
    stored,
    changed: { added, removed }
  }: SelectionEvent) => {
    const newSelected = new Set<string>(stored)
    added.forEach((e) => newSelected.add(e))
    removed.forEach((e) => newSelected.delete(e))

    setDragged(newSelected)
  }

  const handleTransform = (e: Element) => {
    return e
  }

  const handleRevert = (e: Element) => {
    return e
  }

  useEffect(() => {
    const a = new Selectable({
      boundary: root?.current as HTMLDivElement,
      selectAreaClassName: 'selection-area',
      selectablePrefix: 'selectable',
      select_cb: handleSelected,
      drag_cb: handleDragged,
      transformFunc: {
        transform: {
          func: handleTransform,
          css: {
            width: 200,
            margin: 0,
            height: 80,
            textAlign: 'center'
          }
        },
        revert: {
          func: handleRevert,
          css: {
            width: 108,
            margin: 30,
            opacity: '100%',
            willChange: 'top left width height'
          }
        },
        iconPositionX: 200
      }
    })
  }, [])

  return (
    <div className='container' ref={root}>
      {Array.from(Array(8).keys()).map((ele, index) => {
        return (
          <div
            className={`box selectable ${
              selected.has(`selectable-${index}`) ? 'selected' : ''
            } ${dragged.has(`selectable-${index}`) ? 'onDrag' : ''}`}
            key={`index ${index}`}
            data-key={`selectable-${index}`}
          >
            {ele + 1}
          </div>
        )
      })}
    </div>
  )
}
```
