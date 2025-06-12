import { Button, Card, Form, Input, InputNumber, notification, Space } from 'antd'
import usePostStore from '../../store/postStore'
import PageMetadata from '../../components/PageMetadata'

const validationRules = {
  id: [
    { required: true, message: 'لطفا شناسه پست را وارد کنید!' },
    { pattern: /^[0-9\s]+$/, message: 'فقط اعداد مجاز هستند!' },
  ],
  title: [
    { required: true, message: 'لطفا عنوان پست را وارد کنید!' },
    { pattern: /^[A-Za-z\s]+$/, message: 'فقط حروف انگلیسی مجاز هستند!' },
  ],
  body: [{ required: true, message: 'لطفا متن پست را وارد کنید!' }],
}

function NewPostPage() {
  const { addPost, loading } = usePostStore()
  const [notificationApi, contextHolder] = notification.useNotification()
  const [form] = Form.useForm()

  const onFinish = async (values) => {
    try {
      await addPost(values)
      notificationApi.success({
        message: 'پست با موفقیت ساخته شد.',
        duration: 5,
      })
      form.resetFields()
    } catch (error) {
      notificationApi.error({
        message: 'خطا در ساخت پست',
        description: error?.message || 'مشکلی پیش آمده است.',
        duration: 5,
      })
    }
  }

  return (
    <>
      <PageMetadata
        title="پست جدید | پروژه"
        description="پست جدید پروژه"
        keywords="پروژه, برنامه نویسی"
      />
      <div className="w-full flex items-center justify-center">
      {contextHolder}
      <Form
        form={form}
        layout="vertical"
        name="new-post-form"
        style={{ maxWidth: 500, flexBasis: '100%' }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Card className='backdrop-blur-lg bg-[#FFF]/40'>
          <Form.Item label="شناسه" name="id" rules={validationRules.id}>
            <InputNumber min={1} style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label="عنوان" name="title" rules={validationRules.title}>
            <Input />
          </Form.Item>

          <Form.Item label="متن" name="body" rules={validationRules.body}>
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item>
            <Space>
              <Button
                color="primary"
                variant="outlined"
                type="primary"
                htmlType="submit"
                loading={loading}
              >
                تایید
              </Button>
            </Space>
          </Form.Item>
        </Card>
      </Form>
     </div>
    </>

  )
}

export default NewPostPage
