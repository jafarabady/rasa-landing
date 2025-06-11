import './index.css'
import { saveAs } from 'file-saver'
import { utils, write } from 'xlsx'
import { Button, ConfigProvider, Empty, Table } from 'antd'
import { useCallback, useMemo, useState } from 'react'
import { useResizableColumns } from '../../hooks/use-resizable-columns'
import { ResizableTitle } from './ResizableTitle'
import { DownloadOutlined } from '@ant-design/icons'

function DataGrid({
  dataSource = [],
  emptyImage,
  emptyText,
  columns = [],
  onChange,
  className = '',
  parentClass = '',
  size = 'middle',
  pagination = false,
  bordered = false,
  isLoading = false,
  expandableConfig,
  scroll = { x: 'fit-content', y: 585 },
  selectRow = false,
  rowKey = 'key',
  exportable = false,
}) {
  const { columns: resizableColumns, handleResize } = useResizableColumns(columns)
  const [selectedRowKeys, setSelectedRowKeys] = useState([])

  const exportToExcel = useCallback(() => {
    const headers = columns.reduce((acc, col) => {
      if (col.dataIndex && col.title) acc[col.dataIndex] = col.title
      return acc
    }, {})

    const exportData = dataSource.map((item) => {
      return columns.reduce((row, col) => {
        if (col.dataIndex) {
          row[headers[col.dataIndex]] = Array.isArray(col.dataIndex)
            ? col.dataIndex.reduce((acc, key) => acc?.[key], item)
            : item[col.dataIndex]
        }
        return row
      }, {})
    })

    const worksheet = utils.json_to_sheet(exportData)
    const workbook = utils.book_new()
    utils.book_append_sheet(workbook, worksheet, 'Data')
    const excelBuffer = write(workbook, { bookType: 'xlsx', type: 'array' })
    saveAs(new Blob([excelBuffer]), `export-${new Date().toISOString().slice(0, 10)}.xlsx`)
  }, [columns, dataSource])

  const renderEmpty = useCallback(
    () => (
      <Empty
        image={
          emptyImage ? (
            <img src={emptyImage} alt="no-data" className="mx-auto max-w-full h-full" />
          ) : (
            Empty.PRESENTED_IMAGE_SIMPLE
          )
        }
        description={emptyText || null}
      />
    ),
    [emptyImage, emptyText]
  )

  const tableColumns = useMemo(
    () =>
      resizableColumns.map((col, index) => {
        const isLastColumn = index === resizableColumns.length - 1

        return {
          ...col,
          key: col.key || col.dataIndex || index,
          align: col.align || 'center',
          className: `${col.className || ''} truncate-cell`,
          ellipsis: true,
          onHeaderCell: () => ({
            width: col.width,
            minWidth: col.minWidth,
            onResize: isLastColumn ? undefined : handleResize(index),
            dir: 'rtl',
          }),
          onCell: () => ({
            style: {
              maxWidth: col.width,
              minWidth: col.minWidth,
            },
          }),
        }
      }),
    [resizableColumns, handleResize]
  )

  const rowSelection = useMemo(
    () =>
      selectRow
        ? {
            selectedRowKeys,
            onChange: setSelectedRowKeys,
          }
        : null,
    [selectRow, selectedRowKeys]
  )

  const headerComponents = useMemo(
    () => ({
      header: {
        cell: ResizableTitle,
      },
    }),
    []
  )

  return (
    <div className={`${parentClass} my-5 w-full h-full select-none`}>
      {exportable && (
        <div className="flex justify-end mb-3">
          <Button icon={<DownloadOutlined />} onClick={exportToExcel} className="export-button">
            خروجی اکسل
          </Button>
        </div>
      )}

      <ConfigProvider renderEmpty={renderEmpty} direction="rtl">
        <Table
          dataSource={dataSource}
          columns={tableColumns}
          bordered={bordered}
          components={headerComponents}
          scroll={{ ...scroll, x: 'max-content' }}
          onChange={onChange}
          size={size}
          className={`${className} resizeable-table`}
          loading={isLoading}
          rowKey={rowKey}
          expandable={expandableConfig}
          pagination={pagination}
          rowSelection={rowSelection}
          virtual={false}
        />
      </ConfigProvider>
    </div>
  )
}

export default DataGrid
