import { Modal, Space, notification } from 'antd'
import { ExclamationCircleFilled } from '@ant-design/icons'
import usePostStore from '../../../store/postStore'

export function DeleteModal({ open = false, postId, onClose = () => {} }) {
  const { removePost, loading } = usePostStore()
  const [notificationApi, contextHolder] = notification.useNotification()
  const handleDelete = async () => {
    try {
      await removePost(postId)
      notificationApi.success({
        message: 'پست با موفقیت حذف شد.',
        duration: 5,
      })
      onClose()
    } catch (error) {
      notificationApi.error({
        message: 'خطا در حذف پست: ' + error.message,
        duration: 5,
      })
    }
  }

  return (
    <>
      {contextHolder}
      <Modal
        open={open}
        closeIcon={null}
        title={
          <Space>
            <ExclamationCircleFilled style={{ color: '#faad14', fontSize: 20 }} />
            آیا از حذف این پست اطمینان دارید؟
          </Space>
        }
        centered
        okType="danger"
        confirmLoading={loading}
        onOk={handleDelete}
        okText="بله"
        onCancel={onClose}
        cancelText="خیر"
      />
    </>
  )
}

export default DeleteModal
