import { useEffect, useState } from 'react'

export const useResizableColumns = (initialColumns) => {
  const [columns, setColumns] = useState(() =>
    initialColumns.map((col) => ({
      ...col,
      width: col.width || 100,
      minWidth: col.minWidth || 50,
    }))
  )

  useEffect(() => {
    setColumns((prev) => {
      return initialColumns.map((col, index) => ({
        ...col,
        width: prev[index]?.width || col.width || 100,
        minWidth: col.minWidth || 50,
      }))
    })
  }, [initialColumns])

  const handleResize =
    (index) =>
    (e, { size }) => {
      setColumns((prev) => {
        const newColumns = [...prev]
        const newWidth = Math.max(newColumns[index].minWidth, Math.min(size.width, 1500))

        newColumns[index] = {
          ...newColumns[index],
          width: newWidth,
        }

        return newColumns
      })
    }

  return { columns, handleResize }
}
