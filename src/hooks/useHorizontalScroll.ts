import { useEffect, useRef } from 'react'

export function useHorizontalScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    function onWheel(event: WheelEvent) {
      if (event.deltaY === 0) return
      event.preventDefault()
      el!.scrollLeft += event.deltaY
    }

    el.addEventListener('wheel', onWheel)
    return () => el.removeEventListener('wheel', onWheel)
  }, [])

  return ref
}
