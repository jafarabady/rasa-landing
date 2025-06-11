import { Button, Input } from 'antd'
import { CommentOutlined, DeleteOutlined, EditOutlined, SearchOutlined } from '@ant-design/icons'

const getColumnSearchProps = (dataIndex, searchInputRef) => ({
  filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
    <div style={{ padding: 8 }}>
      <Input
        ref={searchInputRef}
        placeholder={`جستجو ${dataIndex === 'title' ? 'عنوان' : 'متن'}`}
        value={selectedKeys[0]}
        onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
        onPressEnter={() => confirm()}
        style={{ marginBottom: 8, display: 'block' }}
      />
      <div className="flex gap-2">
        <Button color="primary" variant="outlined" onClick={() => confirm()} size="small">
          جستجو
        </Button>
        <Button color="default" variant="outlined" onClick={() => clearFilters()} size="small">
          حذف
        </Button>
      </div>
    </div>
  ),
  filterIcon: (filtered) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
  onFilter: (value, record) =>
    record[dataIndex]?.toString().toLowerCase().includes(value.toLowerCase()),
})

const getPostColumns = ({ searchInputRef, onAction }) => [
  {
    width: 100,
    title: 'ردیف',
    dataIndex: '',
    key: 'i',
    render: (_, __, index) => <div className="flex">{index + 1}</div>,
  },
  {
    title: 'شناسه',
    dataIndex: 'id',
    sorter: (a, b) => a.id - b.id,
    width: 100,
  },
  {
    title: 'عنوان',
    dataIndex: 'title',
    width: 300,
    ...getColumnSearchProps('title', searchInputRef),
  },
  {
    title: 'متن',
    dataIndex: 'body',
    width: 500,
    ...getColumnSearchProps('body', searchInputRef),
  },
  {
    width: 150,
    title: 'عملیات',
    dataIndex: '',
    key: 'x',
    render: (row) => (
      <div className="flex gap-2">
        <Button
          variant="outlined"
          color="primary"
          icon={<CommentOutlined />}
          onClick={() => onAction('comments', row)}
        />
        <Button icon={<EditOutlined />} onClick={() => onAction('edit', row)} />
        <Button danger icon={<DeleteOutlined />} onClick={() => onAction('delete', row)} />
      </div>
    ),
  },
]

export { getPostColumns }
