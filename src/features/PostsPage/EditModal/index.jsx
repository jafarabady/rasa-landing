import { Button, Form, Input, Modal, notification, Space } from 'antd'
import { useEffect } from 'react'
import usePostStore from '../../../store/postStore'

function EditModal({ open = false, initialData, onClose = () => {} }) {
  const { editPost, loading } = usePostStore()
  const [notificationApi, contextHolder] = notification.useNotification()
  const [form] = Form.useForm()
  useEffect(() => {
    if (open) {
      form.setFieldsValue({
        id: initialData.id || '',
        title: initialData.title || '',
        body: initialData.body || '',
      })
    }
  }, [open, initialData, form])
  const onFinish = async (values) => {
    try {
      await editPost(values.id, values)
      notificationApi.success({
        message: 'پست با موفقیت ویرایش شد.',
        duration: 5,
      })
      onClose()
    } catch (error) {
      notificationApi.error({
        message: 'خطا در ویرایش پست: ' + error.message,
        duration: 5,
      })
    }
  }
  return (
    <>
      {contextHolder}
      <Modal open={open} onCancel={onClose} title="ویراش پست" centered footer={null}>
        <Form
          form={form}
          layout="vertical"
          name="basic"
          labelCol={{ span: 8 }}
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item label="شناسه" name="id">
            <Input disabled />
          </Form.Item>

          <Form.Item
            label="عنوان"
            name="title"
            rules={[
              {
                pattern: /^[A-Za-z\s]+$/,
                message: 'فقط حروف انگلیسی مجاز هستند!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item label="متن" name="body">
            <Input.TextArea />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button onClick={onClose} color="danger" variant="outlined">
                لغو
              </Button>

              <Button loading={loading} htmlType="submit" color="primary" variant="outlined">
                تایید
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default EditModal
