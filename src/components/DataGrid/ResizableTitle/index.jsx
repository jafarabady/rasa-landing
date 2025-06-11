import React, { useState, useRef, useCallback } from 'react'

export const ResizableTitle = React.memo(({ ...props }) => {
  const { onResize, width, ...restProps } = props
  const startX = useRef(null)
  const startWidth = useRef(null)
  const [isResizing, setIsResizing] = useState(false)

  const handleMouseDown = useCallback(
    (e) => {
      if (!onResize) return
      e.preventDefault()
      startX.current = e.clientX
      startWidth.current = width
      setIsResizing(true)

      const handleMouseMove = (event) => {
        const delta = event.clientX - startX.current
        const calculatedWidth = startWidth.current - delta
        onResize(event, {
          size: { width: Math.max(50, calculatedWidth) },
        })
      }

      const handleMouseUp = () => {
        setIsResizing(false)
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', handleMouseUp)
      }

      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', handleMouseUp)
    },
    [onResize, width]
  )

  return (
    <th {...restProps} style={{ position: 'relative', width }}>
      {restProps.children}
      {onResize && (
        <div
          onMouseDown={handleMouseDown}
          style={{
            position: 'absolute',
            right: 'auto',
            left: 0,
            top: 0,
            bottom: 0,
            width: '8px',
            cursor: 'col-resize',
            background: isResizing ? '#ddd' : 'transparent',
            zIndex: 1,
          }}
        />
      )}
    </th>
  )
})
